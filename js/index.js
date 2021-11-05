var mySwiper = new Swiper('.swiper-container', {
  effect: 'cube',//设置切换效果
  loop: true,//循环播放
  autoplay: {//自动轮播
    delay: 2000,//设置定时时长，单位毫秒
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})