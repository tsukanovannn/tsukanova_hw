let str = prompt('Select actions!')
let number1 = prompt('Write number 1');
let number2 = prompt('Write number 2');
num1 = Number(number1);
num2 = Number(number2);

if (isNaN(num1) || isNaN(num2)){
    alert("The value enter is not a number, please try again.")
}

if (str !== "add" && str !== "sub" && str !== "mult" && str !== "div") {
    alert("Incorrect operation entered. Please enter add, sub, mult or div.")
}

if (num2 === 0 && str === "div"){
    alert("Division by 0 is impossible. Please enter a different number")
}

if (str === 'add'){
    alert(num1 + num2)
}   else if (str === 'sub'){
    alert(num1 - num2)
}   else if (str === 'mult'){
    alert(num1 * num2)
}   else if (str === 'div'){
    alert(num1 / num2)
}   else{
        alert('error')
}