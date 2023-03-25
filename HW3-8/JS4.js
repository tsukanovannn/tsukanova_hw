let str = prompt('Select actions!')
let number1 = prompt('Write number 1');
let number2 = prompt('Write number 1');
num1 = Number(number1);
num2 = Number(number2);

// if (str === 'add'){
//     alert(num1 + num2)
// }   else if (str === 'sub'){
//     alert(num1 - num2)
// }   else if (str === 'mult'){
//     alert(num1 * num2)
// }   else if (str === 'div'){
//     alert(num1 / num2)
// }   else{
//         alert('error')
// }

switch (str) {
    case 'add':
        alert(num1 + num2)
        break
    case 'sub':
        alert(num1 - num2)
        break
    case 'mult':
        alert(num1 * num2)
        break
    case 'div':
        alert(num1 / num2)
        break
    default:
        alert(`error`)
}