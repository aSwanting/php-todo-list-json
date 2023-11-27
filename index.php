<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Todo List</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a095a4bfbe.js" crossorigin="anonymous"></script>
</head>

<body>
    <div id="app">
        <main>

            <div class="card mx-auto my-5 shadow" style="max-width: 500px;">

                <div class="card-header">
                    <h1 class="fs-3 fw-semibold text-uppercase">{{title}}</h1>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3 d-flex justify-content-between" v-for="(item, i) in todolist">
                        <span class="fw-medium" :class="{'text-decoration-line-through': item.complete}" @click="toggleComplete(i)" style="cursor: pointer;">{{item.name}}</span>
                        <span class="opacity-50" @click="removeTask(i)"><i class="fa-regular fa-circle-xmark" style="cursor: pointer;"></i></span>
                    </li>
                </ul>
                <div class="card-footer d-flex gap-3">
                    <input class="form-control" type="text" placeholder="add task" v-model="newTask" @keyup.enter="addTask()">
                </div>

            </div>

        </main>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>