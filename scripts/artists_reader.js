var listEvents = JSON.parse(JSON.stringify(eventsList));
var calendar = JSON.parse(JSON.stringify(calendarList));
var artists = JSON.parse(JSON.stringify(artistsList));

const home = document.getElementById('home');
const artWrapper = document.querySelector('.artWrapper');

artWrapper.style.width = `calc(100vw * ${artists.length + 1})`;
// will extend the width of the page based
// on the number of artists on artist_json.js
for(var i = 0, j = 1; i < artists.length; i++, j++){
  // artist navbar
  // creates the first section
  var newA = document.createElement('a');
  newA.href = `#${artists[i].name.replaceAll(' ', '_')}`;
  home.appendChild(newA);
  
  var a = document.querySelectorAll('#home a');
  var newSup = document.createElement('sup');
  var numCheck = j.toString().split('');
  numCheck.length == 1 ? newSup.textContent = `0${j}.` : newSup.textContent = `${j}.`;
  var nt = document.createTextNode(artists[i].name);
  a[i].appendChild(newSup);
  a[i].appendChild(nt);
  // creates a numbered list
  
  // artist sections
  var newSection = document.createElement('section');
  newSection.id = artists[i].name.replaceAll(' ', '_');
  artWrapper.appendChild(newSection);
  
  var sections = document.querySelectorAll('.artWrapper section:not(:first-child)');
  var newDiv = document.createElement('div');
  newDiv.classList.add('artistWrapper');
  sections[i].appendChild(newDiv);
  
  // creates invisible navigation buttons at the side of each panel
  var newNav = document.createElement('a');
  newNav.classList.add('navigator', 'toLeft', 'cusCur');
  newNav.href = i == 0 ? '#home' : `#${artists[i - 1].name.replaceAll(' ', '_')}`;;
  sections[i].appendChild(newNav);
  var newNav = document.createElement('a');
  newNav.classList.add('navigator', 'toRight', 'cusCur');
  newNav.href = i != artists.length - 1 ? `#${artists[i + 1].name.replaceAll(' ', '_')}` : null;;
  i != artists.length - 1 ? sections[i].appendChild(newNav) : null;
  
  // adds the page number of the artist
  var aws = document.querySelectorAll('section .artistWrapper');
  var newP = document.createElement('p');
  newP.classList.add('number');
  newP.textContent = j;
  aws[i].appendChild(newP);
  
  // adds separate divs to segregate different details
  var newDiv = document.createElement('div');
  newDiv.classList.add('artistLeft');
  aws[i].appendChild(newDiv);
  var newDiv = document.createElement('div');
  newDiv.classList.add('artistRight');
  aws[i].appendChild(newDiv);
  
  var al = document.querySelectorAll('.artistLeft');
  var ar = document.querySelectorAll('.artistRight');
  
  // adds the artist's details
  var newP = document.createElement('p');
  newP.classList.add('title');
  newP.textContent = artists[i].title;
  al[i].appendChild(newP);
  
  var newP = document.createElement('p');
  newP.classList.add('description');
  newP.textContent = artists[i].description;
  al[i].appendChild(newP);
  
  // adds the name of the artist
  var newP = document.createElement('p');
  newP.classList.add('name');
  newP.textContent = artists[i].name;
  aws[i].appendChild(newP);
  
  // adds the image of the artist
  var newImg = document.createElement('img');
  newImg.src = `images/artists/${artists[i].name.replaceAll(' ', '_')}.png`;
  ar[i].appendChild(newImg);
  
  // adds a horizontal line to separate the artist from
  // their events
  var newHr = document.createElement('hr');
  newHr.classList.add('artistDivider');
  sections[i].appendChild(newHr);
  
  // main event calendar for each artist page
  var newDiv = document.createElement('div');
  newDiv.classList.add('eventsCalendar');
  sections[i].appendChild(newDiv);
  
  var ec = document.querySelectorAll('.eventsCalendar');
  var newDiv = document.createElement('div');
  newDiv.classList.add('calendarTitle');
  ec[i].appendChild(newDiv);
  
  var et = document.querySelectorAll('.calendarTitle');
  var newP = document.createElement('p');
  newP.textContent = 'CALENDAR 2023';
  et[i].appendChild(newP);
  
  // adds the main list of events
  var newDiv = document.createElement('div');
  newDiv.classList.add('calendarList', 'cusCur');
  ec[i].appendChild(newDiv);
  
  var cl = document.querySelectorAll('.calendarList');
  var artistEvents = [];
  var eventTimes = [];
  var artistName = artists[i].name.split(' ');
  
  // used to find the events based on the artist's name from calendar_json.js
  // and adding those event details in separate arrays
  for(var k = 0; k < calendar.length; k++){
    for(var l = 0; l < calendar[k].events.length; l++){
      if(calendar[k].events[l].name.search(artistName[0]) >= 0){
        artistEvents.push(calendar[k].events[l].name.replaceAll('<br>', ' '));
        eventTimes.push(`${calendar[k].month.substr(0, 3)} ${calendar[k].events[l].date}, ${calendar[k].events[l].time}`);
      }
    }
  }
  
  // adds the events based on the previous array's values
  for(var k = 0; k < artistEvents.length; k++){
    var newHr = document.createElement('hr');
    var newDiv = document.createElement('div');
    cl[i].appendChild(newHr);
    newDiv.classList.add('eventLink');
    cl[i].appendChild(newDiv);
    
    var clDiv = cl[i].querySelectorAll('div');
    var newP = document.createElement('p');
    newP.textContent = artistEvents[k];
    clDiv[k].appendChild(newP);
    var newP = document.createElement('p');
    newP.textContent = eventTimes[k];
    clDiv[k].appendChild(newP);
  }
}

// removes the first horizontal line of every calendar
var firstHr = document.querySelectorAll('.calendarList hr:first-child');
firstHr.forEach(hr => hr.remove());

// allows a custom cursor to follow the user's cursor
const hov = document.getElementById('customCursor');
const hovContent = document.querySelectorAll('#customCursor span');
document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  // adding the user's scroll values to the cursor's coordinates fixes
  // a bug where the custom cursor doesn't follow the user when scrolling away
  hov.style.transform = `translate(calc(${clientX + window.scrollX}px - 50%), calc(${clientY + window.scrollY}px - 50%))`;
};

// customizes the cursor's appearance when
// hovering over navigation buttons and
// calendar events
var cc = document.querySelectorAll('.cusCur');
cc.forEach(cc =>{
  cc.addEventListener('mouseenter', event =>{
    hov.style.display = 'block';
    if(cc.classList.contains('toLeft')){
      // the custom cursor displays a left arrow
      hovContent[0].textContent = '⟵';
      hovContent[1].textContent = '';
    }
    if(cc.classList.contains('toRight')){
      // the custom cursor displays a right arrow
      hovContent[0].textContent = '⟶';
      hovContent[1].textContent = '';
    }
    if(cc.classList.contains('calendarList')){
      // the custom cursor displays a message
      hovContent[0].textContent = '';
      hovContent[1].textContent = 'Check Event';
    }
  });
  // whent the mouse leaves those elements
  // the custom displays are removed
  cc.addEventListener('mouseleave', event =>{
    hov.style.display = 'none';
  });
});

var eventLink = document.querySelectorAll('.eventLink');
var links = document.querySelectorAll('.artistsNav a');
var lm = document.querySelectorAll('.navigator');
var homeLink = document.querySelector('a[href="#home"]');
var background = document.querySelector('.background');
var sections = document.querySelectorAll('section');

// clicking navigation elements will play
// an animation for the section
lm.forEach(lm => {
  lm.addEventListener('click', event =>{
    document.body.style.overflowY = 'auto';
    sections.forEach(s => {
      s.style.animation = 'shift 1s ease';
    })
  });
});
links.forEach(lnk => {
  lnk.addEventListener('click', event =>{
    document.body.style.overflowY = 'auto';
    sections.forEach(s => {
      s.style.animation = 'shift 1s ease';
    })
  });
  
  // hovering over an artist name in the first section will
  // change the background to a random art by the artist
  lnk.addEventListener('mouseenter', event =>{
    var artAmt;
    var cut = lnk.textContent.replaceAll(' ', '_').replaceAll('.', '').replaceAll(/[0-9]/g, '');
    for(var m = 0; m < artists.length; m++){
      if(cut.replaceAll('_', ' ') == artists[m].name){
        artAmt = artists[m].art;
      }
    }
    background.style.backgroundImage = `url('images/artists/${cut.replaceAll('_', ' ')}/${Math.floor(Math.random() * artAmt)}.png')`;
  });
  
  // removes the art when the cursor stops hovering
  // over the artist link
  lnk.addEventListener('mouseleave', event =>{
    background.style.backgroundImage = '';
  });
});

// removes the animation for all the sections when
// the animation ends
sections.forEach(s => {
  s.addEventListener('animationend', event =>{
    s.style.animation = null;
  });
});

// clicking the home link will stop
// the useer from scrolling in the Y axis
homeLink.addEventListener('click', event =>{
  document.body.style.overflowY = 'hidden';
});

// clicking an event below an artist section will
// take the user to that event's page
eventLink.forEach(l => {
  l.addEventListener('click', event =>{
    for(var i = 0; i < listEvents.length; i++){
      if(l.textContent.search(listEvents[i].title.replaceAll('\n', ' ')) >= 0){
        window.location.href = `event.html?event=${listEvents[i].title.replaceAll(' ', '_').replaceAll('\n', '_')}`;
      }
    }
  });
});
