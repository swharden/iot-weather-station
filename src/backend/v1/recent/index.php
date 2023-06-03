<?php
header("Cache-Control: no-cache");
header("Content-Type: text/plain");
header("Access-Control-Allow-Origin: *");

function getReadings($db, $sensor, $hours){
	$timestampStart = time() - $hours * 60 * 60;
	$query = "SELECT * from readings WHERE sensor == $sensor AND timestamp > $timestampStart";

	$readings = [];
	$readings["hours"] = $hours;
	$readings["timestamps"] = [];
	$readings["temperatures"] = [];
	$readings["pressures"] = [];
	
	$results = $db->query($query);
	while ($row = $results->fetchArray()) {
		$readings["timestamps"][] = $row["timestamp"];
		$readings["temperatures"][] = $row["temperature"];
		$readings["pressures"][] = $row["pressure"];
	}
	
	return $readings;
}

$starttime = microtime(true);
$hours = isset($_GET['hours']) ? intval($_GET['hours']) : 1;
$results = [];
$results["hours"] = $hours;
$results["queryTimeMsec"] = 0;
$db = new SQLite3('../write/weather.db');
$results["outdoor"] = getReadings($db, 3, $hours);
$results["indoor"] = getReadings($db, 2, $hours);
$results["attic"] = getReadings($db, 4, $hours);
$db->close();
$results["queryTimeMsec"] = (microtime(true) - $starttime) * 1000;

ini_set('serialize_precision', 10);
echo json_encode($results, JSON_PRETTY_PRINT);