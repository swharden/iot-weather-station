<?php
header("Cache-Control: no-cache");
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IoT Weather Station</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>

<body>
    <div class="container my-4">
        <h1>IoT Weather Station</h1>
		<div><code><?php 
			date_default_timezone_set('EST');
			$date = new DateTimeImmutable();
			echo $date->format('Y-m-d h:m:s a');
		?></code></div>
        <pre class='bg-light border p-3 my-3 rounded d-inline-block'><?php include "v1/log.txt"; ?></pre>
    </div>
</body>

</html>