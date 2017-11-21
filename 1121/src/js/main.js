// ;
function LayerSpe(ele){
  var ele = ele || "#Lay-main-1";

  var Lay = PD(ele).html();

  PL.open({
      type: 1,
      title: false,
      closeBtn: false,
      skin: 'layui-Pan-nobg', //没有背景色
      shadeClose: true,
      content: Lay
  });


  PD(".l-close").on("click",function(){
      PL.closeAll();
  })

}

//判断访问终端
var browser={
  versions:function(){
      var u = navigator.userAgent, app = navigator.appVersion;
      return {
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
          weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
          qq: u.match(/\sQQ/i) == " qq" //是否QQ
      };
  }(),
  language:(navigator.browserLanguage || navigator.language).toLowerCase()
}


function openApp(url){
  var timeout, t = 1000, hasApp = true;
  PL.closeAll();
  setTimeout(function () { 
    if (!hasApp) { 
        //没有安装微信
        // var r=confirm("您没有安装微信，请先安装微信!");
        // if (r==true){
        //     location.href="http://weixin.qq.com/"
        // }
    }else{
        //安装微信
    }
    document.body.removeChild(ifr); 
  }, 2000) 
  
  var t1 = Date.now(); 
  var ifr = document.createElement("iframe"); 
  ifr.setAttribute('src', url); 
  ifr.setAttribute('style', 'display:none'); 
  document.body.appendChild(ifr); 
  timeout = setTimeout(function () { 
     var t2 = Date.now(); 
     if (!t1 || t2 - t1 < t + 100) { 
       hasApp = false; 
     } 
  }, t); 
} 


(function() {


  window.onload = function() {

    FastClick.attach(document.body);

    var lazyLoadImg = new LazyLoadImg({
        el: document.querySelector('#app'),
        mode: 'default', //默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
        time: 300, // 设置一个检测时间间隔
        complete: true, //页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
        position: { // 只要其中一个位置符合条件，都会触发加载机制
          top: -60, // 元素距离顶部
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


      var clipboard = new Clipboard('.copybtn');
      
      clipboard.on('success', function(e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);
          LayerSpe();
          e.clearSelection();
      });
      
      clipboard.on('error', function(e) {
          console.error('Action:', e.action);
          console.error('Trigger:', e.trigger);
      });


  }

})()