<?php

    $connect = mysqli_connect('localhost', 'maavelyand', 'Maks200513@', 'maavelyand');

    if (!$connect) {
        die('Error connect to DataBase');
    }