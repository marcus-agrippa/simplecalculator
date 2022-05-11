// DOM Elements
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const operator = document.querySelector("#operator");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", calculateResults);


function calculateResults() {
  if (operator.value == '+') {
    const sum = Number(number1.value) + Number(number2.value);
    result.innerHTML = `${number1.value} + ${number2.value} = ${sum}`;
    console.log('hi');
  } else if (operator.value == '-') {
    const sum = number1.value - number2.value;
    result.innerHTML = `${number1.value} - ${number2.value} = ${sum}`;
  } else if (operator.value == 'x') {
    const sum = number1.value * number2.value;
    result.innerHTML = `${number1.value} x ${number2.value} = ${sum}`;
  } else {
    const sum = number1.value / number2.value;
    result.innerHTML = `${number1.value} / ${number2.value} = ${sum}`;
  }
}
