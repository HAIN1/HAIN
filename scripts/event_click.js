const card = document.querySelector('.topCard');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const date = document.querySelector('.dateDetails');
const ticket = document.querySelector('.ticketLink');
const modal = document.querySelector('.modalWrapper');
const closeModal = document.querySelector('.closeModal');

var form1 = document.querySelectorAll('.form1 input');
var form2 = document.querySelectorAll('.form2 input');
var form3 = document.querySelectorAll('.form3 input');
var formB = document.querySelectorAll('form button');

// the top card's details will play an
// animation based on a state's value
var cardStatus = 0;

// clicking the top card will change the
// state variable's value and play
// an animation
card.addEventListener("click", event =>{
  if(event.target === ticket) return;
  if(cardStatus == 0){
    cardStatus++;
    document.body.style.overflowY = 'auto';
    card.style.animation = 'card linear 300ms';
    card.style.animationFillMode = 'forwards';
    title.style.animation = 'title linear 300ms';
    title.style.animationFillMode = 'forwards';
    subtitle.style.animation = 'subtitle linear 300ms';
    subtitle.style.animationFillMode = 'forwards';
    date.style.animation = 'date linear 300ms';
    date.style.animationFillMode = 'forwards';
  }
  else{
    cardStatus--;
    card.style.animation = 'cardRev linear 300ms';
    card.style.animationFillMode = 'forwards';
    title.style.animation = 'titleRev linear 300ms';
    title.style.animationFillMode = 'forwards';
    subtitle.style.animation = 'subtitleRev linear 300ms';
    subtitle.style.animationFillMode = 'forwards';
    date.style.animation = 'dateRev linear 300ms';
    date.style.animationFillMode = 'forwards';
    document.body.style.overflowY = 'hidden';
    window.scrollTo(0, 0);
  }
});

// immediately takes the user to
// the top of the page when the
// site reloads
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var paym = document.querySelectorAll('.paym');
var hide = document.querySelectorAll('.hide');
var methods = document.querySelectorAll('.method div');
var err = 'Fields with ✦ must be filled';
var page = 1;

// this is the page system for the ticketing system
formB.forEach(formB => {
  formB.addEventListener('click', event => {
    var noVal = false;
    var noCard = true;
    var curPage = `form${page}`;
    eval(curPage).forEach(i => { if(i.value == ''){ noVal = true }});
    methods.forEach(c => { if(c.classList.contains('chosen')){ noCard = false }});
    if(formB.classList.contains('next')){
      if(!noVal && !noCard && page == 2){
        // if all details are filled, the page will reload
        // after creating a window with the user's ticket
        modal.style.display = 'none';
        var dTicket = document.getElementById('ticketSend').innerHTML;
        var w = window.open('', '_blank', 'width=482, height=1000');
        w.document.write(document.head.innerHTML);
        w.document.write(dTicket);
        w.document.write(
        `<script>
          if(document.querySelector('.topCard')){
            document.querySelector('.ticketMainWrapper').style.display = 'none';
          }
          else{
            document.querySelector('.ticketMainWrapper').style.display = 'flex';
          }
        </script>`
        );
        window.location.reload();
      }
      if(page == 1 && !noVal || (!noVal && !noCard && page == 2)){
        // flips to the next page based on the
        // state variable's value
        document.querySelector(`.form${page}`).style.display = 'none';
        page++;
        document.querySelector(`.form${page}`).style.display = 'block';
      }
      else{
        // alerts the user when important fields
        // doesn't have values
        window.alert(err);
      }
    }
    else{
      // flips to the next page based on the
      // state variable's value
      document.querySelector(`.form${page}`).style.display = 'none';
      page--;
      document.querySelector(`.form${page}`).style.display = 'block';
    }
  });
});

// choosing googlepay or apple pay will
// display an error message to the user
methods.forEach(m => {
  m.addEventListener('click', event => {
    if(m.dataset.method == 'googlepay' || m.dataset.method == 'applepay'){
      window.alert('This payment method is not available on your country, please choose another payment method');
    }
    else{
      methods.forEach(e => e.classList.remove('chosen'));
      hide.forEach(e => e.classList.remove('hide'));
      paym.forEach(e => e.classList.add('hide'));
      m.classList.add('chosen');
    }
  });
});

// clicking "get tickets" will display the ticketing modal
ticket.addEventListener('click', event => {
  modal.style.display = 'grid';
});
closeModal.addEventListener('click', event => {
  modal.style.display = 'none';
});

// hides the ticket element
if(document.querySelector('.topCard')){
  document.querySelector('.ticketMainWrapper').style.display = 'none';
}
else{
  document.querySelector('.ticketMainWrapper').style.display = 'flex';
}
