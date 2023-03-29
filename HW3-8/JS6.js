let number1 = prompt('Write number 1');
let number2 = prompt('Write number 2')
let number3 = prompt('Write number 3');

number1 = Number(number1)
number2 = Number(number2)
number3 = Number(number3)

if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
    alert("Error: The enter value is not a number")
} else{
    let answer = (number1 + number2 + number3) / 3
    alert(`${answer}`)
}