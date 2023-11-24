<?php

$todolist_json = file_get_contents('./todolist.json');
$todo_decode = json_decode($todolist_json, true);

$response = [
    "success" => true,
    "results" => $todo_decode
];

header("Content-type: application/json");
echo json_encode($response);
