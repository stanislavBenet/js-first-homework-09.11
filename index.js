let userInput = prompt("Enter number");

function isNumberOddOrEven(val) {
  return val % 2 === 0;
}

const showNumberIsEvenOrOdd = function (val) {
  if (isNumberOddOrEven(val)) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

