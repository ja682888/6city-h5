//main  

// var notyf = new Notyf();
function navClickIndex(index) {
  PD(".floor").addClass("hide");
  PD("#floor_" + index).removeClass("hide");
}

function LayerSpe(ele){
  var ele = ele || "#Lay-main-1";

  var Lay = PD(ele).html();

  PL.open({
      type: 1,
      title: false,
      closeBtn: false,
      area: '9.333333rem',
      skin: 'layui-Pan-nobg', //没有背景色
      shadeClose: true,
      content: Lay
  });


  PD(".l-close").on("click",function(){
      PL.closeAll();
  })

}

// ;
(function() {
  // Create an instance of Notyf
  // var notyf = new Notyf();

  window.onload = function() {

    FastClick.attach(document.body);

    PD('#nav-tap').on('click','li',function(){
      var t = PD(this);
      var index = t.index()
      PD("#nav-tap li").removeClass('cur')
      t.addClass('cur')
      navClickIndex(index + 1)
    })
   
  }
})()