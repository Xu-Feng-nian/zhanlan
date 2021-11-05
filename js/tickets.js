var mySwiper = new Swiper('.swiper1', {
    effect: 'coverflow',//设置切换效果
    loop: true,//循环播放
    speed:1000,
    autoplay:{//自动轮播
      delay: 3005,//设置定时时长，单位毫秒
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  })
  var mySwiper = new Swiper('.swiper2',{
    effect : 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 60,
      modifier: 2,
      slideShadows : true
    },
    speed:1000,
    loop: true,//循环播放
    autoplay: {//自动轮播
      delay: 3000,//设置定时时长，单位毫秒
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    
    })
var mySwiper = new Swiper('.swiper3',{
        direction : 'vertical',
        effect : 'flip',
        loop: true,//循环播放
        speed:1000,
        autoplay: {//自动轮播
          delay: 3000,//设置定时时长，单位毫秒
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        
      })