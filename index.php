<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ToDo List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="wrapper">
    <div class="container">
        <div class="block">
            <h2>ToDo list</h2>
            <form action="#" id="add">
                <label for="text">Add your task:</label>
                <input type="text" id="text">
                <button>Add new</button>
            </form>
            <ul class="list"></ul>
            <button id="clear">Clear task</button>
        </div>
    </div> <!-- #container -->
</div> <!-- #wrapper -->
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>