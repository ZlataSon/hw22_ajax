<?php
    $file_name = "tasks.json";  // name and location of json file

    $file = fopen($file_name, 'w');  // append the data to the end of the file.

// Other arguemnts for fopen in google 'fopen php'.

    $data = $_POST["newData"]; // put POST data from ajax

    fwrite($file, $data);  // write the data

    fclose($file);  // close