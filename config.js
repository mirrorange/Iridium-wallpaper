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
        ]
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
        ]
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
        ]
    }
];
var applist = [
    {
        "name":"辩论赛计时器",
        "url":"./apps/debatetimer/debatetimer.html"
    },
    {
        "name":"天气",
        "url":"https://tianqi.qq.com/index.htm"
    }
]