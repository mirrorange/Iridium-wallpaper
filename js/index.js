function setbackground(backgroundurl){
    ext = backgroundurl.substr(backgroundurl.lastIndexOf("."));
    background = document.getElementById("background");
    background.innerHTML = "";
    if(ext == ".png" || ext == ".jpg" || ext == ".gif")
    {
        var backgroundimg = document.createElement("img");
        backgroundimg.className = "backgroundimg";
        backgroundimg.setAttribute("src", backgroundurl);
        background.appendChild(backgroundimg);
    }
    else if(ext == ".html")
    {
        var backgroundiframe = document.createElement("iframe");
        backgroundiframe.className = "backgroundimg";
        backgroundiframe.setAttribute("src", backgroundurl);
        background.appendChild(backgroundiframe);
    }
}

//title
document.title = wallpapertitle;
document.getElementsByClassName("mdl-layout-title")[0].innerHTML = wallpapertitle;
//background
setbackground(normalpic)
//countdown
var countdownele = document.createElement("span");
countdownele.id = "countdown";
if(countdownposition == "header"){
    countdownele.className = "mdl-layout-title";
    document.getElementsByClassName("mdl-layout-spacer")[0].after(countdownele);
}
if(countdownposition == "page")
{
    countdownele.style.cssText = countcsstext;
    document.getElementsByClassName("page-content")[0].appendChild(countdownele);
}