var soundbites = JSON.parse(JSON.stringify(soundbitesList));
var html = document.querySelector('html');
var backBtn = document.querySelector('.backBtn');
var image = document.querySelector('.image');
var text = document.querySelector('.text');
var play = document.querySelector('.play');

var params = new URLSearchParams(window.location.search);
var sbName = params.get('sb');

// playing the soundbite will generate a new script tag
// with frame and data values from soundbites_json.js
play.addEventListener('click', event =>{
  // removes the "play" element
  play.remove();
  
  // it will verify the soundbite based on the URL value
  for(var i = 0; i < soundbites.length; i++){
    if(sbName == soundbites[i].file){
      
      // increases the size of the images if specified
      if(soundbites[i].type == 'full'){
        image.style.scale = '1.65';
        image.style.translate = '0px 2vw';
      }
      
      // a new script tag is generated with a
      // list of timeout functions based on the
      // amount of data inside its array
      
      // the timeout functions will display data
      // in time
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

// clicking the "back" button will
// return the user
backBtn.addEventListener('click', event =>{
  window.close();
})
