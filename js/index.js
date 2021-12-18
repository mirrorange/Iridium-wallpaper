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

//title
document.title = wallpapertitle;
document.getElementsByClassName("mdl-layout-title")[0].innerHTML = wallpapertitle;
//background
setbackground(normalbackground);
//countdown
if (countdownenabled) {
    var countdownele = document.createElement("span");
    countdownele.id = "countdown";
    if (countdownposition == "header") {
        countdownele.className = "mdl-layout-title";
        document.getElementsByClassName("mdl-layout-spacer")[0].after(countdownele);
    }
    if (countdownposition == "page") {
        countdownele.style.cssText = countcsstext;
        document.getElementsByClassName("page-content")[0].appendChild(countdownele);
    }
}