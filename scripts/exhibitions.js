// plays a slideshow for the exhibition page
// the user is able to scroll when it ends
var cards = document.querySelectorAll('.animCard');
var b = document.querySelector('.background');
var b2 = document.querySelector('.background2');
var forhain1 = document.getElementById('forhain1');
var creatives = document.getElementById('10creatives');
var presenthowfoodis = document.getElementById('presenthowfoodis');
var auniversallanguage = document.getElementById('auniversallanguage');
var universal = document.getElementById('universal');
setTimeout(function(){
  b.style.backgroundImage = `url('images/exhibitions/f1.png')`;
}, 0   );
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f1.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f2.png')`;
}, 500 );
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f2.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f3.png')`;
}, 1000);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f3.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f4.png')`;
}, 1500);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f4.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f5.png')`;
  var d = 'for HÁIN 1,';
  var s = d.split('');
  var newS = document.createElement('script');
  for(var i = 0; i < s.length; i++){
    newS.innerHTML += `setTimeout(function(){ forhain1.textContent += "${s[i]}" }, 200 * ${i});\n`;
  }
  document.body.appendChild(newS);
}, 2000);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f5.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f6.png')`;
}, 4200);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f6.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f7.png')`;
  cards.forEach(a => a.style.color = 'var(--lightCol)');
  var d = '10 creatives';
  var s = d.split('');
  var newS = document.createElement('script');
  for(var i = 0; i < s.length; i++){
    newS.innerHTML += `setTimeout(function(){ creatives.textContent += "${s[i]}" }, 200 * ${i});\n`;
  }
  document.body.appendChild(newS);
}, 5700);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f7.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f8.png')`;
  var d = 'present how food is';
  var s = d.split('');  
  var newS = document.createElement('script');
  for(var i = 0; i < s.length; i++){
    newS.innerHTML += `setTimeout(function(){ presenthowfoodis.textContent += "${s[i]}" }, 100 * ${i});\n`;
  }
  document.body.appendChild(newS);
}, 7950);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f8.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f9.png')`;
  cards.forEach(a => a.style.color = 'var(--darkCol)');
}, 8750);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f9.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f10.png')`;
  cards.forEach(a => a.style.color = 'var(--lightCol)');
  var d = 'a universal language';
  var s = d.split('');  
  var newS = document.createElement('script');
  for(var i = 0; i < s.length; i++){
    newS.innerHTML += `setTimeout(function(){ auniversallanguage.textContent += "${s[i]}" }, 100 * ${i});\n`;
  }
  document.body.appendChild(newS);
}, 10150);
setTimeout(function(){
  b2.style.backgroundImage = `url('images/exhibitions/f10.png')`;
  b.style.backgroundImage = `url('images/exhibitions/f11.png')`;
}, 11750);
setTimeout(function(){
  var texts = document.querySelectorAll('.rm');
  b2.remove();
  b.remove();
  universal.textContent = 'food is a universal language';
  texts.forEach(t => t.remove());
  document.querySelector('.mainWrapper').style.backgroundColor = 'var(--lightCol)';
  document.querySelectorAll('section')[0].style.backgroundImage = "url('images/exhibitions/f12.png')";
  document.querySelector('html').style.overflowX = 'auto';
}, 13350);

// takes the user to the start of the page
// when reloading
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
