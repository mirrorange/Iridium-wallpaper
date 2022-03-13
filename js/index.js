var backgroundsetted = false;

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
    backgroundsetted = true;
}

function parallelLoadScripts(scripts,callbacks) {
    if(typeof(scripts) != "object") var scripts = [scripts];
    var HEAD = document.getElementsByTagName("head").item(0) || document.documentElement, s = new Array(), loaded = 0;
    for(var i=0; i<scripts.length; i++) {
        s[i] = document.createElement("script");
        s[i].setAttribute("type","text/javascript");
        s[i].onload = s[i].onreadystatechange = function() { //Attach handlers for all browsers
            if(!/*@cc_on!@*/0 || this.readyState == "loaded" || this.readyState == "complete") {
                loaded++;
                this.onload = this.onreadystatechange = null; this.parentNode.removeChild(this); 
                if(loaded == scripts.length)
                {
                    loadopts();
                    callbacks.forEach(element => {
                        window[element]();
                    });
                }
            }
        };
        s[i].setAttribute("src",scripts[i]);
        HEAD.appendChild(s[i]);
    }
 }

function seriesLoadScripts(scripts,callbacks) {
    if (typeof (scripts) !== 'object') {
        var scripts = [scripts];
    }
    var BODY = document.getElementsByTagName('body')[0] || document.documentElement;
    var s = [];
    var last = scripts.length - 1;
    //递归
    var recursiveLoad = function (i) {
        s[i] = document.createElement('script');
        s[i].setAttribute('type', 'text/javascript');
        // 异步
        s[i].onload = s[i].onreadystatechange = function () {
            if (!/*@cc_on!@*/0 || this.readyState === 'loaded' || this.readyState === 'complete') {
                this.onload = this.onreadystatechange = null;
                this.parentNode.removeChild(this);
                if (i !== last) {
                    recursiveLoad(i + 1);
                }
                else
                {
                    loadopts();
                    callbacks.forEach(element => {
                        window[element]();
                    });
                }
            }
        }
        // 同步
        s[i].setAttribute('src', scripts[i]);
        BODY.appendChild(s[i]);
    };
    recursiveLoad(0);
}

function loadplugin(plugin) {
    plugin["css"].forEach(element => {
        cssele = document.createElement("link");
        cssele.setAttribute("rel", "stylesheet");
        cssele.setAttribute("href", element);
        document.getElementsByTagName("head")[0].appendChild(cssele)
    });
    if(plugin["loadmode"] == "parallel")
    {
        parallelLoadScripts(plugin["js"],plugin["initcallbacks"]);
    }
    else if(plugin["loadmode"] == "series")
    {
        seriesLoadScripts(plugin["js"],plugin["initcallbacks"]);
    }
}

function loadapp(app) {
    var appli = document.createElement("li");
    appli.className = "mdl-menu__item";
    appli.innerText = app["name"];
    appli.setAttribute("appurl", app["url"]);
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
    appiframe.setAttribute("src", this.getAttribute("appurl"));
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(coverdiv);
    body.appendChild(appiframe);
}

function closeapp() {
    document.getElementById("appiframe").remove();
    document.getElementById("coverdiv").remove();
}

function loadopts() {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(/^-?\\d+$/.test(pair[1]))
        {
            window[pair[0]] = parseInt(pair[1]);
        }
        else if(/^(-?\\d+)(\\.\\d+)?$/.test(pair[1]))
        {
            window[pair[0]] = parseFloat(pair[1]);
        }
        else if(pair[1] == "false")
        {
            window[pair[0]] = false;
        }
        else if(pair[1] == "true")
        {
            window[pair[0]] = true;
        }
        else
        {
            window[pair[0]] = pair[1];
        }
    }
}
//opts
loadopts();
//title
document.title = wallpapertitle;
var titleele = document.getElementsByClassName("mdl-layout-title")[0];
titleele.innerHTML = wallpapertitle;
titleele.ondblclick = ()=>{location.reload()};
//plugins
pluginlist.forEach(element => {
    loadplugin(element);
});
//background
if(!backgroundsetted)
{
    setbackground(normalbackground);
}
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