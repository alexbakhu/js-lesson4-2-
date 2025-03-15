let button1 = document.querySelector('.bye-bye1')
let button2 = document.querySelector('.bye-bye2')
let button3 = document.querySelector('.bye-bye3')
let button4 = document.querySelector('.bye-bye4')
console.log('button1')
button1.addEventListener("click", () => {
    console.log("byee!!")
  button1.remove()
})

button2.addEventListener("click", () => {
    console.log("bye bye!")
  button2.remove()
})

button3.addEventListener("click", () => {
    console.log("goodbye!")
  button3.remove()
})

button4.addEventListener("click", () => {
    console.log("bye!")
  button4.remove()
})




let num1 = 5

console.log(num1)

num1 = num1 + 1

console.log(num1)

num1 = num1 - 1

console.log(num1)

let button5 = document.querySelector(".btn1")

let num2 = 8

button5.addEventListener("click", () => {

    num2 = num2 + 1

    button5.textContent = num2;
})