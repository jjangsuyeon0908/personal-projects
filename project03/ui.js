
const visualTitslide = new Swiper('.visual-tit-slide', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    },

});

const visualTxtslide = new Swiper('.visual-txt-slide', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    },
    thumbs: {
        swiper: visualTitslide
    }
});

var testSwiper = new Swiper('.slide-sys02', {
    // width: 400,
    width: 565,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    loop : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { // 호출(pager) 여부
        el: ".swiper-pagination", //버튼을 담을 태그 설정     
        clickable: true, // 버튼 클릭 여부     
    },
});

visualTxtslide.controller.control = testSwiper;
testSwiper.controller.control = visualTxtslide;


const cont02Slide = new Swiper('.cont02-slide', {
    // width: 400,
    width: 565,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    loop : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { // 호출(pager) 여부
        el: ".swiper-pagination", //버튼을 담을 태그 설정     
        clickable: true, // 버튼 클릭 여부     
    },

});