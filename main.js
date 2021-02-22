const inputOne = document.querySelector("num_one");
const inputTwo = document.querySelector("num_two");
const answer = document.querySelector("#answer");

const btnContainer = document.querySelector('#btnContainer')

function calculate( numOne, numTwo, action) {
  if (action =='add') {
    answer.value = numOne + NumTwo
  } else if (action == 'subtract') {
    answer.value = numOne - NumTwo
  } else if (action == 'multiply') {
    answer.value = numOne * NumTwo
  } else if (action == 'divide') {
    answer.value = numOne / NumTwo
  }
}

btnContainer.addEventListener('click', function (e) {
  const currBtn = e.target
  if (currBtn.tagName === 'BUTTON') {
    const action = currBtn.id
    const numOne = Number(inputOne.value)
    const numTwo = Number(inputTwo.value)
    calculate(numOne, numTwo, action)    
  }
})

// const addBtn = document.querySelector("#add");
// const subtractBtn = document.querySelector("#subtract");
// const multiplyBtn = document.querySelector("#multiply");
// const divideBtn = document.querySelector("#divide");
// function add() {
//   const numOne = Number(inputOne.value);
//   const numTwo = Number(inputTwo.value);
//   answer.value = numOne + NumTwo;
// }
// function subtract() {
//   const numOne = Number(inputOne.value);
//   const numTwo = Number(inputTwo.value);
//   answer.value = numOne - NumTwo;
// }
// function multiply() {
//   const numOne = Number(inputOne.value);
//   const numTwo = Number(inputTwo.value);
//   answer.value = numOne * NumTwo;
// }
// function divide() {
//   const numOne = Number(inputOne.value);
//   const numTwo = Number(inputTwo.value);
//   answer.value = numOne / NumTwo;
// }
// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);
// console.log(inputOne)
// console.log(inputTwo)

const btns = document.querySelectorAll("button");

// btns.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// const btnContainer = document.querySelector("#btn");
document.querySelector("#calc").addEventListener("submit", function (e) {
  e.preventDefault();

  let result = 0;
  let value1 = document.querySelector("#userInput1").value;
  let value2 = document.querySelector("#userInput2").value;
  let operator = e.submitter.id;
  value1 = Number(value1);
  value2 = Number(value2);
  if (operator == "plus") {
    result = value1 + value2;
  }
  console.log(result);
  document.querySelector("#result").value = result;
  return;
  // console.log(document.querySelector("input1").value);
  // console.loga(e.submitter.id)
});

// btnContainer.addEventListener("click", function (e) {
//   const currEl = e.target;
//   console.log(currEl);
// console.log.(e.target)
// });

// const btns = document.querySelectorAll(".btn");
// console.log(btns);

// for (let btn of btns) {
//   btn.addEventListener(
//     ("click",
//     function (e) {
//       console.log(e.target);
//     })
//   );
// }

// document.querySelector('#sub').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.submitter.id)
// })
