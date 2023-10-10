




window.addEventListener('click', function(event) {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const CounterWrapper = event.target.closest('.counter_cart')
         counter =CounterWrapper.querySelector('[data-counter]')
    }

    if(event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;

    }

    if( event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
           }
    }
})


let videoBtn = document.querySelector('.js-video-btn'),
 video = document.querySelector('.js-video');

 videoBtn.onclick = function () {
    video.play();
    this.classList.add('hide');
 }

 video.onclick = function () {
    if (this.paused) {
        this.play();
    }else{
        this.pause();
    }
 }

 video.addEventListener('ended', videoHandler, false);

 function videoHandler () {
    videoBtn.classList.remove('hide')
 }





