var soundbites = JSON.parse(JSON.stringify(soundbitesList));
const mainWrapper = document.querySelector('.mainWrapper');

for(var i = 0; i < soundbites.length; i++){
  var newSection = document.createElement('section');
  newSection.classList.add('soundbiteWrapper');
  mainWrapper.appendChild(newSection);
  
  var sections = document.querySelectorAll('.soundbiteWrapper');
  var newDiv = document.createElement('div');
  newDiv.classList.add('detailLeft');
  sections[i].appendChild(newDiv);
  var newDiv = document.createElement('div');
  newDiv.classList.add('detailRight');
  sections[i].appendChild(newDiv);
  
  var detailLeft = document.querySelectorAll('.detailLeft');
  var detailRight = document.querySelectorAll('.detailRight');
  var newP = document.createElement('p');
  newP.classList.add('time');
  newP.textContent = soundbites[i].time;
  detailLeft[i].appendChild(newP);
  var newImg = document.createElement('img');
  newImg.src = `images/soundbites/${soundbites[i].file}/icon.png`;
  detailLeft[i].appendChild(newImg);
  var newP = document.createElement('p');
  newP.classList.add('title');
  newP.textContent = soundbites[i].title;
  detailRight[i].appendChild(newP);
  var newP = document.createElement('p');
  newP.classList.add('description');
  newP.innerHTML = soundbites[i].description;
  detailRight[i].appendChild(newP);
  var newA = document.createElement('a');
  newA.classList.add('listen');
  newA.textContent = 'LISTEN';
  newA.target = '_blank';
  newA.href = `listen.html?sb=${soundbites[i].file}`;
  detailRight[i].appendChild(newA);
}