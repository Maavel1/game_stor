const cartWrapper = document.querySelector('.counter_cart');


window.addEventListener('click', function(event) {
    if(event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.cart')

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.img_cart_basket').getAttribute('src'),
          
         
        
        
           
        };

       const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

       if (itemInCart) {
         const counterElement = itemInCart.querySelector('[data-counter]');
       } else {
        const cartItemHTML = ` <div class="img_game_top_btn" data-id="01">
        <a href="product_page.html">  <img src="img/game_icons_minecraft.png" alt=""></a>
          <button data-cart class="btn_game_top">В корзину</button>
          <img src="img/icons/img_top_4.png" alt="" class="img_top4">
          <svg class="fovurits_game_top_pos" id="ss" version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="25px" height="20px" viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">
         
         <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
         fill="#000000" stroke="none">
         <path class="path_fovurits_game_top" id="path_fovurits_game_top_id" d="M1175 4806 c-208 -31 -377 -96 -560 -215 -102 -66 -280 -247 -355
         -361 -267 -408 -332 -927 -173 -1400 95 -283 278 -563 584 -896 226 -246 438
         -439 1286 -1166 561 -483 556 -479 637 -464 19 4 49 19 68 34 69 55 1039 891
         1208 1041 584 517 880 857 1064 1220 147 290 205 583 178 889 -36 390 -173
         696 -426 947 -177 176 -371 287 -601 344 -369 91 -738 24 -1038 -190 -161
         -114 -339 -312 -443 -491 -21 -37 -41 -68 -44 -68 -3 0 -23 31 -44 68 -104
         179 -282 377 -443 491 -90 64 -228 136 -318 166 -168 56 -405 77 -580 51z"/>
         </g>
         </svg>
         </div>`;
 
    cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML)

        }

       

   
    }
})