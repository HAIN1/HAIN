var soundbites = JSON.parse(JSON.stringify(soundbitesList));
var html = document.querySelector('html');
var backBtn = document.querySelector('.backBtn');
var image = document.querySelector('.image');
var text = document.querySelector('.text');
var play = document.querySelector('.play');

var params = new URLSearchParams(window.location.search);
var sbName = params.get('sb');

play.addEventListener('click', event =>{
  play.remove();
  for(var i = 0; i < soundbites.length; i++){
    if(sbName == soundbites[i].file){
      if(soundbites[i].type == 'full'){
        image.style.scale = '1.65';
        image.style.translate = '0px 2vw';
      }
      var sc = document.createElement('script');
      if(soundbites[i].images.length > 0){
        for(var j = 0; j < soundbites[i].images.length; j++){
          sc.innerHTML += `setTimeout(function(){ image.style.backgroundImage = "url('images/soundbites/${soundbites[i].file}/${soundbites[i].images[j].data}.png')"; }, 1000 * ${soundbites[i].images[j].time});\n`;
        }
      }
      if(soundbites[i].texts.length > 0){
        for(var j = 0; j < soundbites[i].texts.length; j++){
          sc.innerHTML += `setTimeout(function(){ text.textContent = "${soundbites[i].texts[j].data}"}, 1000 * ${soundbites[i].texts[j].time});\n`;
        }
      }
      sc.innerHTML += `var audio = new Audio('audio/soundbites/${soundbites[i].file}.ogg');audio.play();`;
      html.appendChild(sc);
    }
  }
})
backBtn.addEventListener('click', event =>{
  window.close();
})