function PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

function countdown () {
    var nowtime = new Date(),  //获取当前时间
        endtime = new Date("2022/6/7 08:00:00");  //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
        lefts = Math.floor(lefttime/1000%60);  //计算秒数
        var countdown = document.getElementById("countdown")
        countdown.innerText = "距离高考还有：" + leftd + "天" + lefth + "小时" + leftm + "分" + lefts + "秒";  //返回倒计时的字符串
}

self.setInterval("countdown()",1000);