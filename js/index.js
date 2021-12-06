//title
document.title = wallpapertitle;
document.getElementsByClassName("mdl-layout-title")[0].innerHTML = wallpapertitle;
//background
document.getElementById("backgroundimg").setAttribute("src", normalpic);
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