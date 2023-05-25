var params = new URLSearchParams(window.location.search);
var eventName = params.get('event');
var eventList = JSON.parse(JSON.stringify(eventsList));

// collects all the titles of the events
var titles = [];
var dow = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
for(var i = 0; i < eventList.length; i++){
  titles.push(eventList[i].title.replaceAll('\n', ' ').replaceAll(' ', '_'));
}

if(titles.includes(eventName)){
  // finds the proper name of the day based on a 3-character string
  var dayName;
  for(var i = 0; i < eventList.length; i++){
    if(eventList[i].title.replaceAll('\n', ' ').replaceAll(' ', '_') == eventName){
      var ar = eventList[i].day.split(' ');
      const dayCount = eventList[i].day_count;
      for(var j = 0; j < dow.length; j++){
        console.log()
        if(dow[j].toUpperCase().search(ar[0]) >= 0){
          dayName = dow[j];
        }
      }
      // generates a QR code using the qrcodejs library
      // the QR code's value is a 12-digit random number
      var rng = Math.floor(100000000000 + Math.random() * 899999999999);
      var col = eventList[i].color;
      var qr = document.querySelector('.ticketQR');
      var qrcode = new QRCode(qr, {
        text:`${rng}`,
        width:250,
        height:250,
        colorLight:`${col}`,
        colorDark:"#D9D9D9",
        correctLevel:QRCode.CorrectLevel.H
      });
      
      // removes the image element from the generated QR code
      // and uses its image source as a background image
      qr.querySelector('img').onload = function(){
        qr.style.backgroundImage = `url(${document.querySelector('.ticketQR img').src})`;
        qr.querySelector('img').remove();
      };
      
      // changes relevant details for the page
      // this may look like spaghetti code
      // but assigning them as variables will
      // only increase space
      var price = eventList[i].price;
      document.querySelector('.nav p').textContent = eventList[i].type;
      document.querySelector('.title').textContent = eventList[i].title;
      document.querySelector('.ticketTitle').textContent = eventList[i].title;
      document.querySelector('.ticketTiming').textContent = `${eventList[i].day} | ${eventList[i].time}`;
      document.querySelector('.day').textContent = `#${eventList[i].number} ${eventList[i].day}`;
      document.querySelector('.time').textContent = eventList[i].time;
      document.querySelector('.ticketDescription').textContent = eventList[i].subtitle;
      document.querySelector('.subtitle').textContent = eventList[i].subtitle;
      document.querySelector('.ticketMainWrapper').style.backgroundColor = eventList[i].color;
      document.querySelector('.topCard').style.backgroundColor = eventList[i].color;
      document.querySelector('.ticketBackground').style.backgroundImage = `url('images/events/${eventName}.png')`;
      document.querySelector('.topCard').style.backgroundImage = `url('images/events/${eventName}.png')`;
      document.querySelector('.botCard').style.backgroundColor = eventList[i].color;
      document.querySelector('.botLeftCard p:first-child').textContent = eventList[i].description;
      document.querySelector('.dateTimeTitle').textContent = `${eventList[i].day}\t${eventList[i].title.replaceAll('\n', ' ')}`;;
      document.querySelector('.price').textContent = `${eventList[i].price} AED`;
      document.querySelector('.header1').textContent = eventList[i].header1;
      document.querySelector('.header2').textContent = eventList[i].header2;
      document.querySelector('.paragr1').textContent = eventList[i].paragr1;
      document.querySelector('.paragr2').textContent = eventList[i].paragr2;
      document.querySelector('.modalDay').textContent = dayName;
      document.querySelector('.modalTime').textContent = ar[1];
      document.querySelector('.modalRight').style.backgroundColor = eventList[i].color;
      document.querySelector('.modalPoster').style.backgroundImage = `url('images/events/${eventName}.png')`;
      document.querySelector('.modalDescription').textContent = eventList[i].title;
    }
  }
}
else{
  // if the event doesn't exist, the user is
  // redirected to a 404 page
  window.location.href = '404.html';
}
