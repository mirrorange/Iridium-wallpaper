function countdown () {
    var nowtime = new Date(),  //获取当前时间
        endtime = new Date(endtimestr);  //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
        lefts = Math.floor(lefttime/1000%60);  //计算秒数
        var countdown = document.getElementById("countdown");
        countdown.innerText = countdownstr + leftd + "天" + lefth + "小时" + leftm + "分" + lefts + "秒";  //返回倒计时的字符串
}

if(countdownenabled)
{
    var countdownele = document.createElement("span");
    countdownele.id = "countdown";
    if (countdownposition == "header") {
        countdownele.className = "mdl-layout-title";
        document.getElementsByClassName("mdl-layout-spacer")[0].after(countdownele);
    }
    if (countdownposition == "page") {
        document.getElementsByClassName("page-content")[0].appendChild(countdownele);
    }
    self.setInterval("countdown()",1000);
}