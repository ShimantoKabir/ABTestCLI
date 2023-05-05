const initSwiper = (container: string) => {
  // @ts-ignore
  window.slider = new window.Swiper(`${container}`, {
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      998: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      stopOnLastSlide: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grid: {
      cols: 3,
    },
  });
};

export default initSwiper;
