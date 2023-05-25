var count = document.querySelectorAll('.ticketCount')[0];
var ticketCount = document.querySelectorAll('.ticketCount');
var addsubTicket = document.querySelectorAll('.addsubTicket i');
var ticketPrice = document.querySelector('.ticketPrice');
var ticketFee = document.querySelector('.ticketFee');
var ticketTotal = document.querySelector('.ticketTotal');

// the main ticketing system's pricing and coutner
addsubTicket.forEach(as => {
  as.addEventListener('click', event => {
    if(as.dataset.action == 'addTicket'){
      if(count.textContent <= 3){
        // adds tickets when it's lower than 4
        ticketCount.forEach(c => c.textContent++);
        ticketPrice.textContent = parseInt(ticketPrice.textContent) + parseInt(price);
      }
    }
    else if(as.dataset.action == 'subTicket'){
      if(count.textContent > 1){
        // subtracts tickets when it's not less than 1
        ticketCount.forEach(c => c.textContent--);
        ticketPrice.textContent = parseInt(ticketPrice.textContent) - parseInt(price);
      }
    }
    if(count.textContent == 4){
      // the fee increases when reaching max tickets
      ticketFee.textContent = 6;
    }
    else{
      // defaults to regular fee if the tickets are less than 4
      ticketFee.textContent = 4;
    }
    // the total price is the sum of the amount of tickets and its fee
    ticketTotal.textContent = parseInt(ticketPrice.textContent) + parseInt(ticketFee.textContent);
  });
});
