var count = document.querySelectorAll('.ticketCount')[0];
var ticketCount = document.querySelectorAll('.ticketCount');
var addsubTicket = document.querySelectorAll('.addsubTicket i');
var ticketPrice = document.querySelector('.ticketPrice');
var ticketFee = document.querySelector('.ticketFee');
var ticketTotal = document.querySelector('.ticketTotal');

addsubTicket.forEach(as => {
  as.addEventListener('click', event => {
    if(as.dataset.action == 'addTicket'){
      if(count.textContent <= 3){
        ticketCount.forEach(c => c.textContent++);
        ticketPrice.textContent = parseInt(ticketPrice.textContent) + parseInt(price);
      }
    }
    else if(as.dataset.action == 'subTicket'){
      if(count.textContent > 1){
        ticketCount.forEach(c => c.textContent--);
        ticketPrice.textContent = parseInt(ticketPrice.textContent) - parseInt(price);
      }
    }
    if(count.textContent == 4){
      ticketFee.textContent = 6;
    }
    else{
      ticketFee.textContent = 4;
    }
    ticketTotal.textContent = parseInt(ticketPrice.textContent) + parseInt(ticketFee.textContent);
  });
});