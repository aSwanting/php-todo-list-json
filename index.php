<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Todo List</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>

<body>
    <div id="app">
        <main>

            <div class="card w-50 mx-auto my-5 shadow">

                <div class="card-header">
                    <h1 class="display-6 fw-medium">{{title}}</h1>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item fw-medium" v-for="item in todolist">{{item}}</li>
                </ul>

            </div>

        </main>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>