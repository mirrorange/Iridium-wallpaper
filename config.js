//page
var wallpapertitle = "Iridium ~ wallpaper for class18";
var normalbackground = "./backgrounds/25th-hour.mp4";
var picturecsstext = "filter:brightness(0.6);position:absolute;width:100%;height:100%;z-index:-1;object-fit:cover";
var iframecsstext = "position:absolute;width:100%;height:100%;z-index:-1;object-fit:cover";
var videocsstext = "position:absolute;width:100%;height:100%;z-index:-1;object-fit:cover";
var canvascsstext = "position:absolute;width:100%;height:100%";
//plugins
var pluginlist = [
    {
        "name": "weatherbackground",
        "js": [
            "./plugins/weatherbackground/config.js",
            "./plugins/weatherbackground/glsl-canvas.min.js",
            "./plugins/weatherbackground/rain.js",
            "./plugins/weatherbackground/snow.js",
            "./plugins/weatherbackground/weather.js"],
        "css":[],
        "initcallbacks":[
            "weatherinit"
        ],
        "loadmode":"parallel"
    },
    {
        "name": "countdown",
        "js": [
            "./plugins/countdown/config.js",
            "./plugins/countdown/countdown.js"
        ],
        "css":[
            "./plugins/countdown/countdown.css"
        ],
        "initcallbacks":[
            "countdowninit"
        ],
        "loadmode":"parallel"
    },
    {
        "name": "hitikoto",
        "js": [
            "./plugins/hitokoto/config.js",
            "./plugins/hitokoto/hitokoto.js"
        ],
        "css":[
            "./plugins/hitokoto/hitokoto.css"
        ],
        "initcallbacks":[
            "hitokotoinit"
        ],
        "loadmode":"parallel"
    },
    {
        "name": "firework",
        "js": [
            "./js/jquery.min.js",
            "./plugins/firework/firework.js"
        ],
        "css":[
            "./plugins/firework/firework.css"
        ],
        "initcallbacks":[
            "fireworkinit"
        ],
        "loadmode":"parallel"
    }
];
var applist = [
    {
        "name":"辩论赛计时器",
        "url":"./apps/debatetimer/debatetimer.html"
    }
]