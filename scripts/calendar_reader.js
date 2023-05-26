var calendar = JSON.parse(JSON.stringify(calendarList));
var mainCalendar = document.querySelector('.mainCalendar');

// will display the data from calendar_json.js
for(var i = 0; i < calendar.length; i++){
  
  // creates a new month row
  var newCalRow = document.createElement('div');
  newCalRow.classList.add('calRow');
  mainCalendar.appendChild(newCalRow);
  
  var calRow = mainCalendar.getElementsByClassName('calRow');
  
  var newCalMonth = document.createElement('div');
  newCalMonth.classList.add('calMonth');
  calRow[i].appendChild(newCalMonth);
  
  // adds the name of the month
  var calMonth = document.getElementsByClassName('calMonth');
  var newP = document.createElement('p');
  newP.textContent = calendar[i].month;
  calMonth[i].appendChild(newP);
  
  // creates a group of cells for the days of
  // the month's events
  var newCalCellWrapper = document.createElement('div');
  newCalCellWrapper.classList.add('calCellWrapper');
  calRow[i].appendChild(newCalCellWrapper);
  
  // creates the cells with an event's details
  for(var j = 0; j < calendar[i].events.length; j++){
    var src = calendar[i].events[j].name.replaceAll(' ', '_').replaceAll(',', '');
    var title = src.split('<br>');
    
    // a cell with the appropriate data is created
    var calCellWrapper = document.getElementsByClassName('calCellWrapper');
    var newCalCell = document.createElement('div');
    newCalCell.classList.add('calCell', title[0]);
    newCalCell.dataset.month = calendar[i].month;
    newCalCell.dataset.date = calendar[i].events[j].date;
    newCalCell.dataset.title = title[0].replaceAll('_', ' ');
    calCellWrapper[i].appendChild(newCalCell);
    
    var calCell = calCellWrapper[i].getElementsByClassName('calCell');
    var newCalHeader = document.createElement('p');
    newCalHeader.classList.add('calHeader');
    newCalHeader.textContent = calendar[i].events[j].date;
    calCell[j].appendChild(newCalHeader);
    
    var newCalText = document.createElement('p');
    newCalText.classList.add('calText');
    newCalText.innerHTML = `${calendar[i].events[j].name}<br>${calendar[i].events[j].time}`;
    calCell[j].appendChild(newCalText);
  }
}

// dynamically generates the marquee based
// on the number of events in a month
const marqueeP = document.querySelectorAll('.marqueeList p');
var overlay = document.querySelector('.foregroundOverlay');
var cells = document.querySelectorAll('.calCell');

// removes the marquee if the amount of events is less than 7
if(cells.length < 7){
  marqueeP.forEach(p => p.remove());
}
else{
  // creates the marquee with 7 of the month's events
  for(var i = 0; i < 7; i++){
    marqueeP[i].innerHTML = `${cells[i].dataset.month} ${cells[i].dataset.date}<br>${cells[i].dataset.title}`;
    marqueeP[i + 7].innerHTML = `${cells[i].dataset.month} ${cells[i].dataset.date}<br>${cells[i].dataset.title}`;
  }
}

// hovering over an event will display
// a foreground for the marquee based
// on the event
cells.forEach(c => {
  c.addEventListener("mouseover", event =>{
    var img = c.classList.toString()
    var ref = img.split(' ');
    overlay.style.backgroundImage = `url('images/calendar_page/${ref[1]}.png')`;
  });
  
  // clicking on an event will take the user
  // to that event's page
  c.addEventListener("click", event =>{
    var img = c.classList.toString()
    var ref = img.split(' ');
    window.location.href = `event.html?event=${ref[1]}`
  });
})
