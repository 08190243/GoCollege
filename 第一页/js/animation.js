

// 动画要加定位才能实现
function animationloading(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {     
        var step = (target - obj.width()) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.css("width",obj.width()+ step) ;
       
        if (obj.width() >= target) {
            clearInterval(obj.timer);
            // 结束再回调
            if (callback) {
                callback();
            }
        }

    }, 50)


};
// 动画要加定位才能实现
function animation(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //  console.log(obj.offset().left)
        var step = (target - obj.offset().left) ;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.css("left", obj.offset().left+ step) ;
       
        if ( obj.offset().left >= target) {
            clearInterval(obj.timer);
            // 结束再回调
            if (callback) {
                callback();
            }
        }

    }, 50)


}


// loading文字动画
function animationColor(obj, callback) {
    clearInterval(obj.timer);
    var num=0;
    var arryColor=["rgb(238, 162, 49","rgb(241, 238, 56)","rgb(145, 241, 56)","rgb(60, 208, 82)","rgb(51, 204, 235)","rgb(185, 96, 241)"]
    obj.timer = setInterval(function () {
    obj.css("color", arryColor[num]) ; 
      num++;   
        if ( num===arryColor.length) {
            num=0;
            // clearInterval(obj.timer);
            // 结束再回调
            if (callback) {
                callback();
            }
        }

    }, 100)


}