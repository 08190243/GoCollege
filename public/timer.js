//倒计时、时间
function countDown(time) {
    var nowtime = +new Date();//获取当前时间总毫秒数的快速写法
    var inputTime = +new Date(time);//获取用户输入时间总毫秒数的快速写法
    var times = (inputTime - nowtime) / 1000;//剩余总毫秒数
    var day = parseInt(times / 3600 / 24);//天数
    day = day < 10 ? "0" + day : day;//美观day
    var hour = parseInt(times / 3600 % 24);//小时
    hour = hour < 10 ? "0" + hour : hour;//美观hour
    var minute= parseInt(times /60 % 60);//分
    minute = minute < 10 ? "0" + minute : minute;//美观minute
    var s= parseInt(times % 60);//秒
    s = s < 10 ? "0" + s : s;//美观s
}

// 显示当前时间
function nowTime() {
    var nowtime =new Date();//获取当前时间总毫秒数的快速写法
    var year=nowtime.getFullYear();
    var month=nowtime.getMonth()+1;
    var day=nowtime.getDay()+2;
    day = day < 10 ? "0" + day : day;//美观day
    var hour = nowtime.getHours();//小时
    hour = hour < 10 ? "0" + hour : hour;//美观hour
    var minute= nowtime.getMinutes();//分
    minute = minute < 10 ? "0" + minute : minute;//美观minute
    var s= nowtime.getSeconds();//秒
    s = s < 10 ? "0" + s : s;//美观s
   return (''+year+'年'+month+'月'+day+'日 '+hour+':'+minute+':'+s+'')
}
