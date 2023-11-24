<?php
// Get newTask from POST
$new_task = $_POST["newTask"];

// Store in Response
$response = [
    "chicken" => "jurgen",
    // "results" => $new_task
];


// Get tasks from Json file and add new task

// Read Json
$todolist_json = file_get_contents("./todolist.json");

// Decode Json
$todolist_decoded = json_decode($todolist_json, true);

// Push newTask to decoded list
$todolist_decoded[] = $new_task;

// Add Results to Response
$response["results"] = $todolist_decoded;

// Encode Json
$todolist_json = json_encode($todolist_decoded);

// Save Json
file_put_contents("./todolist.json", $todolist_json);

// Send Response as Json
header('Content-type: application/json');
echo json_encode($response);
