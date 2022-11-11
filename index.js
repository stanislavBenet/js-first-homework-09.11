let userInput = prompt("Enter number");

function isNumberOddOrEven(val) {
  return val % 2 === 0;
}

const getNumberIsEvenOrOdd = function (val) {
  if (isNumberOddOrEven(val)) {
    return "even";
  } 
    return 'odd';
};

