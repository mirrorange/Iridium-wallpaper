function weather()
{
  fetch(weatherurl)
  .then(response => response.json())
  .then(data => {
    wea = document.getElementById("wea_text");
    wea.innerText = data.wea + " " + data.win + data.win_speed + " " + data.tem + "℃"
    if((data.tem <= snowtmp && !snow.isstarted && allowsnow) || forcerain)
    {
      var img = document.getElementById("backgroundimg");
      img.setAttribute("src","./image/background-snow.jpg")
      startSnow()
    }
    else if(data.tem > snowtmp && snow.isstarted && !forcerain)
    {
      var img = document.getElementById("backgroundimg");
      img.setAttribute("src","./image/background-normal.jpg")
      stopSnow()
    }
    if((data.wea.img == "yu" && !rainstarted && allowrain) || forcerain)
    {
      startRain();
    }
    else if(data.wea.img != "yu" && rainstarted && !forcerain)
    {
      stopRain();
    }
  })
  .catch(console.error);
}

function realtimerain()
{
  fetch(realtimerainurl)
  .then(response => response.json())
  .then(data => {
    rai = document.getElementById("rai_text");
    rai.innerText = " (" + data.msg + ")"
  })
  .catch(console.error);
}

realtimerain();
weather();
self.setInterval("realtimerain()",900000);
self.setInterval("weather()",300000);