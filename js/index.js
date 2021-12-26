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
    else if (ext == ".mp4") {
        var backgroundvideo = document.createElement("video");
        backgroundvideo.style.cssText = videocsstext;
        backgroundvideo.setAttribute("src", backgroundurl);
        backgroundvideo.setAttribute("type", "video/mp4");
        backgroundvideo.muted = true;
        backgroundvideo.autoplay = true;
        backgroundvideo.loop = true;
        background.appendChild(backgroundvideo);
    }
}

function loadplugin(plugin) {
    plugin["css"].forEach(element => {
        cssele = document.createElement("link");
        cssele.setAttribute("rel", "stylesheet");
        cssele.setAttribute("href", element);
        document.getElementsByTagName("head")[0].appendChild(cssele)
    });
    plugin["js"].forEach(element => {
        jsele = document.createElement("script");
        jsele.setAttribute("src", element);
        document.getElementsByTagName("body")[0].appendChild(jsele)
    });
}

function loadapp(app) {
    var appli = document.createElement("li");
    appli.className = "mdl-menu__item";
    appli.innerText = app["name"];
    appli.setAttribute("appurl",app["url"]);
    appli.onclick = openapp;
    document.getElementById("applist").appendChild(appli);
}

function openapp() {
    var coverdiv = document.createElement("div");
    coverdiv.id = "coverdiv";
    coverdiv.ondblclick = closeapp;
    var appiframe = document.createElement("iframe");
    appiframe.id = "appiframe";
    appiframe.allowtransparency = true;
    appiframe.setAttribute("src",this.getAttribute("appurl"));
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(coverdiv);
    body.appendChild(appiframe);
}

function closeapp()
{
    document.getElementById("appiframe").remove();
    document.getElementById("coverdiv").remove();
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
//apps
if (applist.length != 0) {
    var appbutton = document.createElement("button");
    appbutton.className = "mdl-button mdl-js-button";
    appbutton.id = "menu-lower-right";
    appbutton.innerText = "APPS";
    document.getElementsByClassName("mdl-layout__header-row")[0].appendChild(appbutton);
    var appul = document.createElement("ul");
    appul.id = "applist";
    appul.className = "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect";
    appul.setAttribute("for", "menu-lower-right");
    document.getElementsByClassName("mdl-layout__header-row")[0].appendChild(appul);
    applist.forEach(element => {
        loadapp(element);
    });
}