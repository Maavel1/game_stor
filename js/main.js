

document.getElementById('burger_menu').onclick = function() {
    document.getElementById('span_burger').classList.toggle('active'),
    document.getElementById('span_burger_2').classList.toggle('active');
};


document.getElementById('language').onclick = function() {
    document.getElementById('panel_language_cash').classList.toggle('active'),
    document.getElementById('arrow').classList.toggle('active');
};

document.getElementById('ss').onclick = function() {
    document.getElementById('path_fovurits_game_top_id').classList.toggle('active')
};



let dollars = document.getElementById('dollars');
let euros = document.getElementById('euros');
let rubls = document.getElementById('rubls');

dollars.addEventListener('click', function(){
	dollars.classList.add('active'),
    euros.classList.remove('active'),
    rubls.classList.remove('active');
});

euros.addEventListener('click', function(){
	euros.classList.add('active'),
    rubls.classList.remove('active'),
    dollars.classList.remove('active')
});

rubls.addEventListener('click', function(){
	rubls.classList.add('active'),
    euros.classList.remove('active'),
    dollars.classList.remove('active')
});







let ru = document.getElementById('ru');
let en = document.getElementById('en');

ru.addEventListener('click', function(){
	ru.classList.add('active'),
    en.classList.remove('active');
});

en.addEventListener('click', function(){
	en.classList.add('active'),
    ru.classList.remove('active')
});


function rus(){
    document.querySelector('#change').innerHTML = "RU";
};

function ens(){
    document.querySelector('#change').innerHTML = "EN";
};

function dollar(){
    document.querySelector('#changes').innerHTML = "$";
};

function euro(){
    document.querySelector('#changes').innerHTML = "€";
};

function rubl(){
    document.querySelector('#changes').innerHTML = "₽";
};




let nov = document.getElementById('nov_color');
let acaunt = document.getElementById('acaunt_color');
let keys = document.getElementById('keys_color');
let activati = document.getElementById('activati_color');
let upgrage = document.getElementById('upgrage_color');

nov.addEventListener('click', function(){
    nov.classList.add('active');
    acaunt.classList.remove('active');
    keys.classList.remove('active'),
    activati.classList.remove('active'),
    upgrage.classList.remove('active')
})

acaunt.addEventListener('click', function(){
    nov.classList.remove('active');
    acaunt.classList.add('active');
    keys.classList.remove('active'),
    activati.classList.remove('active'),
    upgrage.classList.remove('active')
})

keys.addEventListener('click', function(){
    nov.classList.remove('active');
    acaunt.classList.remove('active');
    keys.classList.add('active'),
    activati.classList.remove('active'),
    upgrage.classList.remove('active')
})

activati.addEventListener('click', function(){
    nov.classList.remove('active');
    acaunt.classList.remove('active');
    keys.classList.remove('active'),
    activati.classList.add('active'),
    upgrage.classList.remove('active')
})

upgrage.addEventListener('click', function(){
    nov.classList.remove('active');
    acaunt.classList.remove('active');
    keys.classList.remove('active'),
    activati.classList.remove('active'),
    upgrage.classList.add('active')
})




















