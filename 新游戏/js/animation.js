

// 动画要加定位才能实现，加载进度条
function animationloading(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = 15;
        obj.css("width", obj.width() + step);
        if (obj.width() >= target) {
            clearInterval(obj.timer);
            // 结束再回调
            if (callback) {
                callback();
            }
        }

    }, 50)


};

// 手机移动动画
function animationTranslate(obj, target, callback) {
    clearInterval(obj.timer);
    var step = 0;
    obj.timer = setInterval(function () {
        if (target >= 0) {
            step += 3;
            obj.css("transform", 'translateZ(' + step + 'px) translateY(' + -step + 'px)');
            if (step >= target) {
                obj.css("transform", 'translateZ(0px) translateY(0px)');
                clearInterval(obj.timer);
                // 结束再回调
                if (callback) {
                    callback();
                }
            }
        }
        else {
            step -= 3;
            obj.css("transform", 'translateZ(' + step + 'px) translateY(' + step + 'px)');
            if (step <= target) {
                // obj.css("transform", 'translateZ(0px) translateY(0px)');
                clearInterval(obj.timer);
                // 结束再回调
                if (callback) {
                    callback();
                }
            }
        }

    }, 30)


};

// 手机旋转动画
function animationRotate(obj, target, callback) {
    clearInterval(obj.timer);
    var step = 0;
    obj.timer = setInterval(function () {
        if (target >= 0) {
            step += 4;
            obj.css("transform", 'rotateX(' + -step + 'deg) rotateZ(' + step + 'deg)');
            if (step >= target) {
                // obj.css("transform", 'rotateX(0deg) rotateZ(0deg)');
                clearInterval(obj.timer);
                // 结束再回调
                if (callback) {
                    callback();
                }
            }
        }
        else {
            step -= 4;
            obj.css("transform", 'rotateZ(' + step + 'deg)');
            // obj.css("transform", 'rotateX(' + -step + 'deg) rotateZ(' + step + 'deg)');
            if (step <= target) {
                obj.css("transform", 'rotateX(0deg) rotateZ(0deg)');
                clearInterval(obj.timer);
                // 结束再回调
                if (callback) {
                    callback();
                }
            }
        }



    }, 30)

};


