// **Challenge #1.1:** Use your knowledge of HTML to create a simple calculator interface. It should contain three text inputs (`#num_one`, `#num_two`, and `#answer`) and four buttons (`#add`, `#subtract`, `#multiply`, `#divide`). Place your HMTL in a file called `index.html`, and add some CSS styling in a file called `styles.css`.
// **Goal #1.1:** A simple calculator interface for working with 2 numbers.

const inputOne = document.querySelector("num_one");
const inputTwo = document.querySelector("num_two");
const answer = document.querySelector('#answer')

const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', function () {
const NumOne = Number(inputOne.value)
const NumTwo = Number(inputTwo.value)
answer.value = NumOne + NumTwo
})

// console.log(inputOne)
// console.log(inputTwo)