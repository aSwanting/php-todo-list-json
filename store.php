<?php
// Read Json
$todolist_json = file_get_contents("./todolist.json");

// Decode Json
$todolist_decoded = json_decode($todolist_json, true);

$case = $_POST["case"];
switch ($case) {

        // Add New Task
    case "addTask":
        $new_task = $_POST["newTask"];
        if ($new_task) {
            $response["success"] = true;
            $new_task["complete"] = false;
            $todolist_decoded[] = $new_task;
        } else {
            $response["success"] = false;
            $response["error"] = "Invalid Task";
        }
        break;

        // Add New SubTask
    case "addSubTask":
        $new_task = $_POST["newTask"];
        if ($new_task) {
            $response["success"] = true;

            $newSubtask = [
                "name" => $new_task,
                "complete" => false
            ];

            $i = intval($_POST["taskIndex"]);
            $todolist_decoded[$i]["subtasks"][] = $newSubtask;
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

        // Remove Task
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
