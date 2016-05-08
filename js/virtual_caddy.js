// Written by Iain Gay
// Copyright 2016
// This project is not finished. It only gets the average of the three shots,
// pushes them into an array, and then displays it back to the user.

//This function pushes the average into a pre-assigned array in the main program
function whatClub(canArray,averageValue){
  var club = document.getElementById('clubs');
  var output = "";

  if (club.value === 'sand wedge'){
    canArray[0] = averageValue;
  } else if(club.value === 'pitching wedge'){
    canArray[1] = averageValue;
  } else if(club.value === '9 iron'){
    canArray[2] = averageValue;
  } else if(club.value === '8 iron'){
    canArray[3] = averageValue;
  } else if(club.value === '7 iron'){
    canArray[4] = averageValue;
  } else if(club.value === '6 iron'){
    canArray[5] = averageValue;
  } else if(club.value === '5 iron'){
    canArray[6] = averageValue;
  } else if(club.value === '4 iron'){
    canArray[7] = averageValue;
  } else if(club.value === '3 iron'){
    canArray[8] = averageValue;
  } else if(club.value==='5 wood') {
    canArray[9] = averageValue;
  } else if(club.value==='5 wood') {
    canArray[10] = averageValue;
  } else if(club.value==='3 wood') {
    canArray[11] = averageValue;
  } else if(club.value==='driver') {
    canArray[12] = averageValue;
  }

  return canArray;
}

// This function gets the average of the values entered by the user in the DOM
function theAverage(){
  var average = 0;
  var number1 = Number(document.getElementById('shot1').value);
  var number2 = Number(document.getElementById('shot2').value);
  var number3 = Number(document.getElementById('shot3').value);

  average = (number1 + number2 + number3) / 3;

  average = average.toFixed(2)

  return average;

}

// This is the main function. I will add more to it as the picker is implemented
function main(){
  var systemClub = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var userClub  = document.getElementById('clubForm');
  var userOutput = 0;
  var output = document.getElementById('output');

  // This function causes the page to listen for the value of the input boxes
  // to be submitted.
  userClub.addEventListener('submit', function(event){
    var clubInput = document.getElementById('clubs').value;
    event.preventDefault();

    if (clubInput === 'null'){
      alert('Please select a club!');
    } else {
      systemClub = whatClub(systemClub,theAverage());
      alert('The average distance of your ' + clubInput + ' is: ' + theAverage() + ' yards.');
    }
  });

}

main();
