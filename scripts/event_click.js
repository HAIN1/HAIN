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

var cardStatus = 0;
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

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.body.addEventListener('keyup', event => {
  if(event.keyCode === 13){
    document.querySelector('.emEn').value = '';
  }
});

var paym = document.querySelectorAll('.paym');
var hide = document.querySelectorAll('.hide');
var methods = document.querySelectorAll('.method div');
var err = 'Fields with ✦ must be filled';
var page = 1;
formB.forEach(formB => {
  formB.addEventListener('click', event => {
    var noVal = false;
    var noCard = true;
    var curPage = `form${page}`;
    eval(curPage).forEach(i => { if(i.value == ''){ noVal = true }});
    methods.forEach(c => { if(c.classList.contains('chosen')){ noCard = false }});
    if(formB.classList.contains('next')){
      if(!noVal && !noCard && page == 2){
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
        document.querySelector(`.form${page}`).style.display = 'none';
        page++;
        document.querySelector(`.form${page}`).style.display = 'block';
      }
      else{
        window.alert(err);
      }
    }
    else{
      document.querySelector(`.form${page}`).style.display = 'none';
      page--;
      document.querySelector(`.form${page}`).style.display = 'block';
    }
  });
});

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

ticket.addEventListener('click', event => {
  modal.style.display = 'grid';
});
closeModal.addEventListener('click', event => {
  modal.style.display = 'none';
});

if(document.querySelector('.topCard')){
  document.querySelector('.ticketMainWrapper').style.display = 'none';
}
else{
  document.querySelector('.ticketMainWrapper').style.display = 'flex';
}