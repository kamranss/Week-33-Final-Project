


setTimeout(()=>{
  // Set the starting time
var startTime = "38 : 13 : 18 : 00".split(" : ");
var days = parseInt(startTime[0]);
var hours = parseInt(startTime[1]);
var minutes = parseInt(startTime[2]);
var seconds = parseInt(startTime[3]);

// Update the countdown every second
var x = setInterval(function() {

  // If all values are 0, clear the interval and display a message
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(x);
    document.querySelector(".countdown").textContent = "EXPIRED";
    return;
  }

  // Decrement the time by 1 second
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        days--;
        hours = 23;
        minutes = 59;
        seconds = 59;
      }
    }
  }

  // Format the time values to always have two digits
  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
    
  // Output the result in the elements with the corresponding classes
  document.querySelector(".days").textContent = days;
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;
}, 1000);


// Nav 
},4000)

