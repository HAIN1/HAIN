var b = document.querySelector('.background');
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP1.png')`; }, 1250 * 0);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP2.png')`; }, 1250 * 1);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP3.png')`; }, 1250 * 2);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP4.png')`; }, 1250 * 3);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP5.png')`; }, 1250 * 4);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP6.png')`; }, 1250 * 5);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP7.png')`; }, 1250 * 6);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP8.png')`; }, 1250 * 7);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP9.png')`; }, 1250 * 8);
setTimeout(function(){ b.style.backgroundImage = `url('images/loading/LP10.png')`; }, 1250 * 9);
setTimeout(function(){ window.location.href = 'landing.html'; }, 1250 * 10);

document.body.addEventListener('click', event =>{
  window.location.href = 'landing.html';
});