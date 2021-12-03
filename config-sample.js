//page
var wallpapertitle = "Iridium ~ wallpaper for class18";
//backgrounds
var normalpic = "./image/background-normal.jpg";
var snowpic = "./image/background-snow.jpg";
var rainpic = "./image/background-rain.jpg";
//apis
var hitokotourl = "https://v1.hitokoto.cn?&c=d&c=i";
var weatherurl = "";
var realtimerainurl = "";
//effects
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