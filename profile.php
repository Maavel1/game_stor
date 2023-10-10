<?php
session_start();
if (!$_SESSION['user']) {
    header('Location: /');
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Авторизация и регистрация</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<header class="header">
        <div class="container">
            <div class="header_inner">
                <div class="header_top">
                   <div class="block_language_cash">
                    <p class="language" id="language"><span id="change">RU </span><span class="dash_color"> / </span><span id="changes"> ₽</span><img src="img/icons/arrow.png" alt="Arrow" class="arrow" id="arrow" height="6px"></p>
                    <a href="#" class="score_cumulative">Накопительный счет</a>
                    <div class="panel_language_cash" id="panel_language_cash">
                        <div class="language_panel">
                            <p class="ru_language_panel active" id="ru" onclick="rus()">Русский (RU)</p>
                            <p class="en_language_panel" id="en" onclick="ens()">English (EN)</p>
                        </div>
                        <hr>
                        <div class="cash_panel">
                            <a href="#" class="dollars" onclick="dollar()" id="dollars">$</a>
                            <a href="#" class="euros" onclick="euro()" id="euros">€</a>
                            <a href="#" class="rubls" onclick="rubl()" id="rubls">₽</a>
                        </div>
                    </div>
                   </div>
                   <nav class="nav">
                    <a href="#" class="link_nav">Отзывы</a>
                    <a href="#" class="link_nav">Гарантии</a>
                    <a href="#" class="link_nav">Как купить</a>
                    <a href="#" class="link_nav">Накопительная</a>
                    <a href="#" class="link_nav">Заработай</a>
                   </nav>
                   <div class="personal_account">
                    <a class="link_account" href="index.php">Личный кабинет</a>
                   </div>
            </div>
                <div class="header_bottom">
                    <div class="logo_header">
                        <img src="img/icons/logo.svg" alt="logo" class="logo">
                        <a href="index.html" class="logo_text">Playnchill</a>
                       
                    </div>
</div>
</header>
    <div class="data_name">
        <div class="container">

        <form class="form">
            <hr>
            <h1 class="title_profile">
                Личный кабинет
            </h1>
            <div class="block_data">
                <div class="avatar">
                    <img src="<?= $_SESSION['user']['avatar'] ?>" width="200" alt="">
                </div>
                <div class="info_chel">
                    <div class="name_chel">
                        <h2 style="margin: 10px 0;"><?= $_SESSION['user']['full_name'] ?></h2>
                    </div>
                    <div class="email_chel">
                        <a href="#"><?= $_SESSION['user']['email'] ?></a>
                    </div>
                    <div class="btn_exit">
                        <a href="vendor/logout.php" class="logout">Выход</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </div>


    <!-- <form>
        <img src="<?= $_SESSION['user']['avatar'] ?>" width="200" alt="">
        <h2 style="margin: 10px 0;"><?= $_SESSION['user']['full_name'] ?></h2>
        <a href="#"><?= $_SESSION['user']['email'] ?></a>
        <a href="vendor/logout.php" class="logout">Выход</a>
    </form> -->

</body>
</html>