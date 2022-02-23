function weather() {
  fetch(weatherurl)
    .then(response => response.json())
    .then(data => {
      wea = document.getElementById("wea_text");
      wea.innerText = data.wea + " " + data.win + data.win_speed + " " + data.tem + "℃"
      if ((data.wea_img == "yu" && !rainstarted && allowrain) || forcerain) {
        startRain();
      }
      else if (data.wea_img != "yu" && rainstarted && !forcerain || (!allowrain && !forcerain)) {
        stopRain();
      }
      if ((data.tem <= snowtmp && !snow.isstarted && allowsnow && !rainstarted) || forcesnow) {
        setbackground(snowbackground);
        startSnow()
      }
      else if (data.tem > snowtmp && snow.isstarted && !forcesnow || (!allowsnow && !forcesnow) || rainstarted) {
        setbackground(normalbackground);
        stopSnow()
      }
    })
    .catch(console.error);
}

function realtimerain() {
  fetch(realtimerainurl)
    .then(response => response.json())
    .then(data => {
      rai = document.getElementById("rai_text");
      rai.innerText = " (" + data.msg + ")"
    })
    .catch(console.error);
}

function weatherinit()
{
  if (weatherurl != "") {
    var wea_text = document.createElement("p");
    wea_text.id = "wea_text";
    wea_text.className = "mdl-navigation__link";
    var navigation = document.getElementsByClassName("mdl-navigation")[0];
    navigation.appendChild(wea_text);
    weather();
    self.setInterval("weather()", weatherupdatetime);
  }
  if (realtimerainurl != "") {
    var rai_text = document.createElement("p");
    rai_text.id = "rai_text";
    rai_text.className = "mdl-navigation__link";
    var navigation = document.getElementsByClassName("mdl-navigation")[0];
    navigation.appendChild(rai_text);
    realtimerain();
    self.setInterval("realtimerain()", realtimerainupdatetime);
  }
}