//apis
var weatherurl = "https://www.yiketianqi.com/free/day?appid=82111384&appsecret=WdtA5PiQ&unescape=1";
var realtimerainurl = "https://v0.yiketianqi.com/api?version=v11&appid=49218426&appsecret=wrBXcZw8&lng=114.488074&lat=23.107702&unescape=1";
//backgrounds
var snowbackground = "./backgrounds/background-snow.jpg";
var rainbackground = "../../backgrounds/background-rain.jpg"; //pictures only
//effects
var snowtmp = 16;
var allowrain = false;
var allowsnow = false;
var forcerain = true;
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
    "animateChk":0.0,
    "lightningChk":0.0,
    "postProcessingChk":1.0,
    "fpsLock":33
};