<?php
// Read Json
$todolist_json = file_get_contents("./todolist.json");

// Decode Json
$todolist_decoded = json_decode($todolist_json, true);

$case = $_POST["case"];
switch ($case) {

        // Add New Task
    case "addTask":
        // Get newTask from POST
        $new_task = $_POST["newTask"];
        if ($new_task) {

            $response["success"] = true;

            // Add completed status
            $new_task["complete"] = false;

            // Push newTask to decoded list
            $todolist_decoded[] = $new_task;
        } else {

            $response["success"] = false;
            $response["error"] = "Invalid Task";
        }
        break;

        // Toggle Task Status
    case "toggleTask":
        $response["success"] = true;
        $i = intval($_POST["taskIndex"]);
        $todolist_decoded[$i]["complete"] =  !$todolist_decoded[$i]["complete"];
        break;

        // Toggle Task Status
    case "deleteTask":
        $response["success"] = true;
        $i = intval($_POST["taskIndex"]);
        array_splice($todolist_decoded, $i, 1);
        break;
}

// Add to Response
$response["results"] = $todolist_decoded;

// Encode Json
$todolist_json = json_encode($todolist_decoded);

// Save Json
file_put_contents("./todolist.json", $todolist_json);

// Send Response as Json
header('Content-type: application/json');
echo json_encode($response);
