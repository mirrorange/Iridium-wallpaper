function hitokoto() {
  fetch(hitokotourl)
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.innerText = data.hitokoto
      const author = document.getElementById('hitokoto_author')
      var authortext = !!data.from ? data.from : "无名氏";
      author.innerText = "—— " + (data.from_who || '') + "「" + authortext + "」"
    })
    .catch(console.error);
}

function hitokotoinit()
{
  if (hitokotoenabled) {
    document.getElementsByClassName("page-content")[0].innerHTML += hitikotohtml;
    hitokoto()
    self.setInterval("hitokoto()", hitokototime);
  }
}