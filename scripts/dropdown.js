const logo = document.querySelector('div.logo');
const dropdown = document.querySelector('div.dropdown');
const letters = logo.getElementsByTagName('div');

let state = 0;

logo.addEventListener('click', event => {
  event.stopPropagation();
  if(state == 0){
    state++;
    dropdown.style.animation = 'dropping-in ease 0.5s';
    dropdown.style.animationFillMode = 'forwards';
    letters[0].style.animation = 'Hain-in ease 0.5s';
    letters[1].style.animation = 'hAin-in ease 0.5s';
    letters[2].style.animation = 'haIn-in ease 0.5s';
    letters[3].style.animation = 'haiN-in ease 0.5s';
    for(var i = 0; i < letters.length; i++){
      letters[i].style.animationFillMode = 'forwards';
    }
  }
  else{
    state--;
    dropdown.style.animation = 'dropping-out ease 0.5s';
    letters[0].style.animation = 'Hain-out ease 0.5s';
    letters[1].style.animation = 'hAin-out ease 0.5s';
    letters[2].style.animation = 'haIn-out ease 0.5s';
    letters[3].style.animation = 'haiN-out ease 0.5s';
    for(var i = 0; i < letters.length; i++){
      letters[i].style.animationFillMode = 'forwards';
    }
  }
});