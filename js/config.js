var snowtmp = 16;
var allowrain = true;
var allowsnow = true;
var forcerain = false;
var forcesnow = false;
var rainopt = {
    "blurIntensity":0.5,
    "blurQuality":16,
    "rainIntensity":0.4,
    "rainSpeed":0.25,
    "brightness":0.8,
    "rainNormal":0.5,
    "rainZoom":2.6,
    "overlayColor":"#C0C0C0",
    "imgSelect":"./image/background-rain.jpg",
    "animateChk":0.0,
    "lightningChk":0.0,
    "postProcessingChk":1.0,
    "fpsLock":33
};
var hitokotourl = "https://v1.hitokoto.cn?&c=d&c=i";
var weatherurl = "https://www.tianqiapi.com/free/day?appid=82111384&appsecret=WdtA5PiQ&unescape=1";
var realtimerainurl = "https://v0.yiketianqi.com/api?version=v11&appid=82111384&appsecret=WdtA5PiQ&lng=114.488074&lat=23.107702&unescape=1";