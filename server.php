<?php
// Get and decode Json object
$todolist_json = file_get_contents('./todolist.json');
$todo_decode = json_decode($todolist_json, true);

// Store contents in response
$response = [
    "success" => true,
    "results" => $todo_decode
];

// Respond
header("Content-type: application/json");
echo json_encode($response);
