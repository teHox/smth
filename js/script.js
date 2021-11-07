new Swiper('.contacts-slider',{
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination:{
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
});
new Swiper('.main-work-slider',{
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  // loop: true,
});