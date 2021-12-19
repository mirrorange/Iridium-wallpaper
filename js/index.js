function setbackground(backgroundurl) {
    ext = backgroundurl.substr(backgroundurl.lastIndexOf("."));
    background = document.getElementById("background");
    background.innerHTML = "";
    if (ext == ".png" || ext == ".jpg" || ext == ".gif") {
        var backgroundimg = document.createElement("img");
        backgroundimg.style.cssText = picturecsstext
        backgroundimg.setAttribute("src", backgroundurl);
        background.appendChild(backgroundimg);
    }
    else if (ext == ".html") {
        var backgroundiframe = document.createElement("iframe");
        backgroundiframe.style.cssText = iframecsstext;
        backgroundiframe.setAttribute("src", backgroundurl);
        background.appendChild(backgroundiframe);
    }
    else if (ext == ".mp4"){
        var backgroundvideo = document.createElement("video");
        backgroundvideo.style.cssText = videocsstext;
        backgroundvideo.setAttribute("src", backgroundurl);
        backgroundvideo.setAttribute("type","video/mp4");
        backgroundvideo.muted = true;
        backgroundvideo.autoplay = true;
        backgroundvideo.loop = true;
        background.appendChild(backgroundvideo);
    }
}

function loadplugin(plugin)
{
    plugin["css"].forEach(element => {
        cssele = document.createElement("link");
        cssele.setAttribute("rel","stylesheet");
        cssele.setAttribute("href",element);
        document.getElementsByTagName("head")[0].appendChild(cssele)
    });
    plugin["js"].forEach(element => {
        jsele = document.createElement("script");
        jsele.setAttribute("src",element);
        document.getElementsByTagName("body")[0].appendChild(jsele)
    });
}

//title
document.title = wallpapertitle;
document.getElementsByClassName("mdl-layout-title")[0].innerHTML = wallpapertitle;
//background
setbackground(normalbackground);
//plugins
pluginlist.forEach(element => {
    loadplugin(element);
});