function noInputtedNumber(passage) {
  if (passage.trim().lenght === 0) {
    return alert("Please enter the number");
  }
}

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
    return totalMix;
}

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#number-passage").val();
    const totalMix = arrayOfNumbers(passage);
    $("#total-mix").html(totalMix);
  });
});
