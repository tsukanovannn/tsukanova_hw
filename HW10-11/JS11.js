// let message = "";
// for (let i = 20; i < 30; i++) {
//     let result = i + 0.5;
//     message += result + "\n";
// }
// alert(message)

// let message = "";
// for (let i = 10; i <= 100; i = i +10) {
//     let result = i * 27
//     message += result + "\n"
// }
// alert(message)

// let n = 10;
// let num = [];
// for (let i = 1; i <=100; i ++){
//     if (i * i<= n){
//         num.push(i)
//     }
// }
// console.log(num)

// let n = 17;
// let variable = true;
// if (n <=1 ){
//     variable = false
// } else {
//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if (n % i === 0){
//             variable = false
//             break
//         }
//     }
// }
// if (variable){
//     console.log(`${n} is prime`)
// }   else {
//     console.log(`${n} is not prime`)
// }

let n = 9;
let numStore = 0;
let result = 1
while (result < n){
    result *= 3;
    numStore++;
}
if (result === n){
    console.log(n + " є степенем числа 3 з показником " + numStore)
} else {
    console.log(n + "не є показником числа 3")
}