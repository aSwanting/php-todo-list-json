<?php
// Get newTask from POST
$new_task = $_POST["newTask"];

// Store in Response
$response = [
    "chicken" => "jurgen",
    "results" => $new_task
];

// Send Response as Json
header('Content-type: application/json');
echo json_encode($response);
