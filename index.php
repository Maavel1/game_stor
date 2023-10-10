<?php
session_start();

if ($_SESSION['user']) {
    header('Location: profile.php');
}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Авторизация и регистрация</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>

<!-- Форма авторизации -->
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
    
    
    <div class="bg_fon_php">
        <img src="img/personal_shares_2.png" alt="">
        <img src="img/mine_person_bg_shares.png" alt="">
    </div>
    
    <form action="vendor/signin.php" method="post">
        <label>Логин</label>
        <input type="text" name="login" placeholder="Введите свой логин">
        <label>Пароль</label>
        <input type="password" name="password" placeholder="Введите пароль">
        <button type="submit">Войти</button>
        <p>
            У вас нет аккаунта? - <a href="/register.php">зарегистрируйтесь</a>!
        </p>
        <?php
            if ($_SESSION['message']) {
                echo '<p class="msg"> ' . $_SESSION['message'] . ' </p>';
            }
            unset($_SESSION['message']);
        ?>
    </form>

</body>
</html>