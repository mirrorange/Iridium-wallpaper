hitokoto()
function hitokoto()
{
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
self.setInterval("hitokoto()",20000);