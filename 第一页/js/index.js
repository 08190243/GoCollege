
$(function(){
var loadingson=$(".loading-son")
var width = $(".loading").width();
animationloading(loadingson,width,function(){
    $(".loading span").text("加载完成").css("color","rgb(0, 255, 30)");
    clearInterval(timerautoplay)

    $(".startloading").hide(10)
    $(".start").fadeIn()

})

// 图片轮播
var ul=$(".startloading ul")
var flag=true
var num = 0
var width1 = $(".startloading").width();
function lunbo() {
    if (flag) {
        animationColor($(".loading span"));
        flag = false;
        if (num == ul.children().length - 1) {
            ul.css("left","0");
            num = 0;
        }
        num++;
        animation(ul, -num * width1, function () {
            flag = true;
        });
    }

}
    var timerautoplay = setInterval(function () {
          lunbo();
    },500)

})