function arrayOfNumbers(passage) {
  const numberInput = passage;
  let arrayNumber = [];
  for (var number = 0; number <= numberInput; number += 1) {
    arrayNumber.push(number.toString());
  }
  let totalMix = [];
  arrayNumber.forEach(function (digit) {
    if (digit.includes("3")) {
      totalMix.push("Won't you be my neighbor?, ");
    } else if (digit.includes("2")) {
      totalMix.push("Boop!, ");
    } else if (digit.includes("1")) {
      totalMix.push("Beep!, ");
    } else {
      totalMix.push(digit + ", ");
    }
  });
  return totalMix;
}

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    if ($("#number-passage").val() == "") {
      alert("Please enter the number");
      return false;
    }
    const passage = $("#number-passage").val();
    const totalMix = arrayOfNumbers(passage);
    $("#total-mix").html(totalMix);
  });
});
