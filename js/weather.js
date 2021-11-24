function weather()
{
  var wea = document.getElementById('wea_text')
  fetch(weatherurl)
  .then(response => response.json())
  .then(data => {
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
  fetch(realtimerainurl)
  .then(response => response.json())
  .then(data => {
    wea.innerText += " (" + data.msg + ")"
  })
  .catch(console.error)
}

weather();
self.setInterval("weather()",300000);