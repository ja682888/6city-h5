// ;
(function() {
  window.onload = function() {

    var lazyLoadImg = new LazyLoadImg({
        el: document.querySelector('#app'),
        mode: 'default', //默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
        time: 300, // 设置一个检测时间间隔
        complete: true, //页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
        position: { // 只要其中一个位置符合条件，都会触发加载机制
          top: 0, // 元素距离顶部
          right: 0, // 元素距离右边
          bottom: 0, // 元素距离下面
          left: 0 // 元素距离左边
        },
        before: function() { // 图片加载之前执行方法

        },
        success: function(el) { // 图片加载成功执行方法
          el.classList.add('loading-success')
        },
        error: function(el) { // 图片加载失败执行方法
          el.src = './build/img/browser.png'
        }
      })
      // lazyLoadImg.start() // 重新开启懒加载程序
      // lazyLoadImg.destroy() // 销毁图片懒加载程序

    // var mySwiper = new Swiper('.box-main', {
    //   // Optional parameters
    //   direction: 'horizontal',
    //   // loop: true,
    //   // If we need pagination
    //   // pagination: '.swiper-pagination',
    //   // paginationClickable: true,
    //   pagination: '.swiper-pagination',
    //   paginationClickable: true,
    //   // Navigation arrows
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev',

    //   // And if we need scrollbar
    //   // scrollbar: '.swiper-scrollbar',
    // })

  }
})()