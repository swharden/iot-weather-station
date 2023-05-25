<?php

include "../key.php";

function get_post_data()
{
    if ($_SERVER["REQUEST_METHOD"] != "POST") {
        echo "ERROR: POST required";
        die();
    }

    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data)) {
        echo "ERROR invalid JSON";
        die();
    }

    if ($data['key'] != get_api_key()) {
        echo "ERROR 'key' is invalid";
        die();
    }

    return $data;
}

function record_data($data)
{
    $time = time();
    $sensor = $data['sensor'];
    $temperature = $data['temperature'];
    $pressure = $data['pressure'];

    $file = '../log.txt';
    $line = "$time,$sensor,$temperature,$pressure\n";
    file_put_contents($file, $line, FILE_APPEND | LOCK_EX);

    $time = date("Y-m-d h:m:s");
    echo "[$time] logged: {$line}";
}

$data = get_post_data();
record_data($data);
