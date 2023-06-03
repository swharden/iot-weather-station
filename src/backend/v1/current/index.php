<?php
header("Cache-Control: no-cache");
header("Content-Type: text/plain");
header("Access-Control-Allow-Origin: *");

// connect
$db = new SQLite3('../write/weather.db');

function getLatestReading($db, $sensor){
	$query = "SELECT * from readings WHERE sensor == $sensor ORDER BY id DESC LIMIT 1";
	$res = $db->query($query)->fetchArray();
	
	$result = [];
	$result["timestamp"] = $res["timestamp"];
	$result["temperature"] = $res["temperature"]/100;
	$result["pressure"] = $res["pressure"]/256/6894.76;
	$result["age"] = time() - $res["timestamp"];
	return $result;
}

// query
$results = [];
$results["attic"] = getLatestReading($db, 4);
$results["outdoor"] = getLatestReading($db, 3);
$results["indoor"] = getLatestReading($db, 2);

// disconnect
$db->close();

ini_set('serialize_precision', 10);
echo json_encode($results, JSON_PRETTY_PRINT);