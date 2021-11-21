var snowtmp = 25;

function weather()
{
  fetch('https://www.tianqiapi.com/free/day?appid=82111384&appsecret=WdtA5PiQ&unescape=1')
  .then(response => response.json())
  .then(data => {
    const wea = document.getElementById('wea_text')
    wea.innerText = data.wea + " " + data.tem + "℃"
    if(data.tem <= snowtmp && !snow.isstarted)
    {
      var img = document.getElementById("backgroundimg");
      img.setAttribute("src","./image/background-snow.jpg")
      startSnow()
    }
    else if(data.tem > snowtmp && snow.isstarted)
    {
      var img = document.getElementById("backgroundimg");
      img.setAttribute("src","./image/background-normal.jpg")
      stopSnow()
    }
    if((data.wea.img == "yu") && !rainstarted)
    {
      startRain();
    }
    else if((data.wea.img != "yu") && rainstarted)
    {
      stopRain();
    }
  })
  .catch(console.error);
}

weather();
self.setInterval("weather()",60000);