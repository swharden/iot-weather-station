/*
This version uses the one wire DS18B20 temperature sensor
*/

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS D2  // GPIO4
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

#define LED_PRIMARY 2     // D4
#define LED_SECONDARY 16  // D0

const char* ssid = "MY_SSID";
const char* password = "MY_SECRET_PASSWORD";

byte address[8];

void setup() {
  pinMode(LED_PRIMARY, OUTPUT);
  pinMode(LED_SECONDARY, OUTPUT);
  
  digitalWrite(LED_PRIMARY, HIGH);
  digitalWrite(LED_SECONDARY, HIGH);

  Serial.begin(9600);
  
  delay(500);
  delay(500);
  delay(500);
  delay(500);

  sensors.begin();
  setupWifi();
  
  digitalWrite(LED_PRIMARY, LOW);
  digitalWrite(LED_SECONDARY, LOW);
}

void setupWifi(){
  
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println(WiFi.localIP());

  WiFi.setAutoReconnect(true);
  WiFi.persistent(true);
}

void loop() {

  digitalWrite(LED_SECONDARY, HIGH);
  sensors.requestTemperatures();
  float tempF = sensors.getTempFByIndex(0);
  Serial.println(tempF);
  digitalWrite(LED_SECONDARY, LOW);

  digitalWrite(LED_PRIMARY, HIGH);
  make_request(tempF, 0);
  digitalWrite(LED_PRIMARY, LOW);

  wait(60);
}

void wait(int seconds) {
  Serial.println();
  Serial.write("Waiting");
  while (seconds--) {
    digitalWrite(LED_SECONDARY, LOW);
    delay(2);
    Serial.write(".");
    digitalWrite(LED_SECONDARY, HIGH);
    delay(1000); 
  }
  Serial.println();
}

void make_request(float temp, float pres) {

  String resource = String("https://swharden.com/weather/v1/write/");

  // indoor: 2
  // outdoor: 3
  // attic: 4

  String data = String("{")
                + String("\"key\": \"MY_SECRET_API_KEY\",")
                + String("\"sensor\": \"3\",")
                + String("\"temperature\": \"") + String(temp) + String("\",")
                + String("\"pressure\": \"") + String(pres) + String("\"")
                + String("}");

  if ((WiFi.status() != WL_CONNECTED)) {
    Serial.printf("[HTTP] not connected");
    return;
  }

  WiFiClientSecure client;
  client.setInsecure();  // WARNING
  const int HTTPS_PORT = 443;
  client.connect("swharden.com", HTTPS_PORT);

  HTTPClient http;

  Serial.print("[HTTP] begin...\n");
  http.begin(client, resource);
  http.addHeader("Content-Type", "application/json");

  Serial.print("[HTTP] POST:");
  Serial.println(data);
  int httpCode = http.POST(data);

  String payload = http.getString();
  Serial.printf("[HTTP] Response (code: %d): ", httpCode);
  Serial.println(payload);

  http.end();
  
  delay(500);
}