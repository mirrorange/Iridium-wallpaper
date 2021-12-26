var steplist = [
    "showtip:立论陈词",
    "showtip:正方一辩陈词",
    "tiptimer:180",
    "showtip:反方一辩陈词",
    "tiptimer:180",
    "showtip:驳论陈词",
    "showtip:正方二辩陈词",
    "tiptimer:180",
    "showtip:反方二辩陈词",
    "tiptimer:180",
    "showtip:正方质问",
    "timers:60,180",
    "showtip:反方质问",
    "timers:180,60",
    "showtip:自由辩论",
    "timers:600,600",
    "showtip:总结陈词",
    "showtip:正方四辩陈词",
    "tiptimer:180",
    "showtip:反方四辩陈词",
    "tiptimer:180",
    "showtip:比赛结束"
]

var stepdone = false;
var stepindex = 0;
var targettimer1 = true;
var counttime = -1;
var tiptime = 0;
var timer1time = 0;
var timer2time = 0;
var timersworking = false;

function tiptimer(sec) {
    $("#timer1").fadeOut();
    $("#timer2").fadeOut();
    $("#tip").fadeIn();
    tiptime = sec;
    $("#tipspan").text(tiptime);
    counttime = setInterval(() => {
        tiptime -= 1;
        if (tiptime <= 0) {
            clearInterval(counttime);
            $("#tipspan").text("时间到");
            stepdone = true;
        }
        else
        {
            $("#tipspan").text(tiptime);
        }
    }, 1000);
}

function timers(sec1, sec2) {
    timersworking = true;
    $("#tip").fadeOut();
    $("#timer1").fadeIn();
    $("#timer2").fadeIn();
    timer1time = sec1;
    timer2time = sec2;
    $("#timespan1").text(timer1time);
    $("#timespan2").text(timer2time);
    counttime = setInterval(() => {
        if (targettimer1) {
            timer1time -= 1;
            if (timer1time <= 0) {
                $("#timespan1").text("时间到");
                if (timer2time <= 0) {
                    clearInterval(counttime);
                    stepdone = true;
                    timersworking = false;
                }
            }
            else {
                $("#timespan1").text(timer1time);
            }
        }
        else {
            timer2time -= 1;
            if (timer2time <= 0) {
                $("#timespan2").text("时间到");
                if (timer2time <= 0) {
                    clearInterval(counttime);
                    stepdone = true;
                    timersworking = false;
                }
            }
            else {
                $("#timespan2").text(timer2time);
            }
        }
    }, 1000);
}

function showtip(tipstr) {
    $("#timer1").fadeOut();
    $("#timer2").fadeOut();
    $("#tip").fadeIn();
    $("#tipspan").text(tipstr);
    stepdone = true;
}

function readstep(stepstr) {
    stepdone = false;
    strs = stepstr.split(":");
    if (strs[0] == "showtip") {
        showtip(strs[1]);
    }
    else if (strs[0] == "tiptimer") {
        tiptimer(parseInt(strs[1]));
    }
    else if (strs[0] == "timers") {
        timestrs = strs[1].split(",")
        timers(parseInt(timestrs[0]), parseInt(timestrs[1]));
    }
}

function nextstep() {
    if (stepindex <= steplist.length - 1)
        readstep(steplist[stepindex]);
    stepindex++;
}

$("body").click(function () {
    if (stepdone) {
        nextstep();
    }
    else if (timersworking) {
        targettimer1 = !targettimer1;
    }
})

$("body").dblclick(function () {
    if (!stepdone) {
        clearInterval(counttime);
        $("#tipspan").text("结束");
        $("#timespan1").text("结束");
        $("#timespan2").text("结束");
        stepdone = true;
    }
})

nextstep();