
$(function () {
    var loadingson = $(".loading-son")
    var width = $(".loading").width();
    var ul = $(".startloading ul")
    var flag = true
    var num = 0
    var width1 = $(".startloading").width();
    var flagEnter = true;
    // 被观察时才调用
    $(".observeDiv").on("mouseenter", callback);
    function callback() {
        if (flagEnter) {
            flagEnter = false;
            animationloading(loadingson, width, function () {
                $(".loading span").text("加载完成").css("color", "rgb(0, 255, 30)");
                clearInterval(timerautoplay);
                flag = false;
                flagEnter = true;
                $(".loading").off("mouseenter", callback);
            })

            // 图片轮播
            function lunbo() {
                if (flag) {
                    animationColor($(".loading span"), function (obj) {
                        // 清楚颜色动画
                        if (!flag) {
                            clearInterval(obj.timer);
                        }
                    });
                    flag = false;
                    if (num == ul.children().length - 1) {
                        ul.css("left", "0");
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
            }, 300)


        }

    }


})