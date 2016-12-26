
var secondHandNode = document.querySelector('.second-hand');
var minuteHandNode = document.querySelector('.min-hand');
var hourHandNode = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();


  const secondDegrees = (second/60)*360 +90;
  const minuteDegrees = (minute/60)*360 + 90;

  var hourDegrees;
  if (hour >= 12){
    hourDegrees = ((hour-12)/12)*360 + 90;
    console.log(hour-12);
    console.log(hourDegrees);
  } else {
    hourDegrees = (hour/12)*360 + 90;
  }


  secondHandNode.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHandNode.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHandNode.style.transform = `rotate(${hourDegrees}deg)`;


}

setInterval(setDate, 1000);
