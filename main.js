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
