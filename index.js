let userInput = prompt("Enter number");
if (chekInputIsNumber(Number(userInput))) {
  if (isNumberOddOrEven(Number(userInput))) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

function isNumberOddOrEven(val) {
  return val% 2 === 0;
}

function chekInputIsNumber(val) {
  if (isNaN(val) || val === null || val === "") {
    return console.log('ONLY NUMBER!!!');
  }
   return true;
}
