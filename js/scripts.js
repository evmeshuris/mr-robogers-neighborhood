// Utility Logic

function noInputtedNumber(passage) {
  if (passage.trim().lenght === 0) {
    return alert("Please enter the number");
  }
}
// Business Logic

//get array from a number input// input 5 - [0,1,2,3,4,5]
function arrayOfNumbers(passage) {
const numberInput = passage;
let arrayNumber = [];
  for (var number = 0; number <= numberInput; number += 1) {
    arrayNumber.push(number.toString());
  }
  let totalMix = [];
  arrayNumber.forEach(function(digit) {
    if (String(digit).slice(-1) === '1') {
      totalMix.push("Beep!");
    }
    else if (String(digit).slice(-1) === '2') {
      totalMix.push("Boop!");
    }
    else if (String(digit).slice(-1) === '3') {
      totalMix.push("Won't you be my neighbor?");
    }
    else {
      totalMix.push(digit + "");
    }

  });
  // var mixArray = totalMix.join();
  // var mixString = mixArray[0].split(',');
  // mixString = mixString.map(i => '"' + i + '"');
  return totalMix;
}
 // loop checking 1, 2 ,3, replace with words// 
// function subNumWithWords() {
// const mixArray = arrayOfNumbers(arrayNumber);
// let totalMix = [];
// mixArray.forEach(function(digit) {
//     if ((digit.lenght -1) === 1) {
//       totalMix.push("Beep!");
//     }
//     else if ((digit.lenght -1) === 2) {
//       totalMix.push("Boop!");
//     }
//     else if ((digit.lenght -1) === 3) {
//       totalMix.push("Won't you be my neighbor?");
//     }
//     else {
//       totalMix.push(digit);
//     }
//   return totalMix;
//   });
// }

//UI Logic


$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#number-passage").val();
    const totalMix = arrayOfNumbers(passage);
    $("#total-mix").html(totalMix);
  });
});