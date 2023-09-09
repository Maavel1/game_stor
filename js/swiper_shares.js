var swiper = new Swiper(".mySwipers", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });