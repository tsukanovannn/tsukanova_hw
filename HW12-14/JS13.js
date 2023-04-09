const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPositive = 0;
let countPositive = 0;
for (let i = 0; i < arr.length; i ++){
    if (arr[i] > 0){
        sumPositive += arr[i];
        countPositive ++;
    }
}
console.log(`Сумма позитивних ел-тів ${sumPositive}`);
console.log(`Кількість позтивних ел-тів ${countPositive}`)

let min = arr[0];
let minNum = 0;
for (let i = 0; i < arr.length; i ++){
    if (arr[i] < min){
        min = arr[i]
        minNum = i
    }
}
console.log(`Мінімальній ел-т массиву ${min}`)
console.log(`Порядковій номер мінімального ел-ту масива ${minNum}`)

let max =  arr[0];
let maxNum = 0;
for (let i = 0; i < arr.length; i ++){
    if (arr[i] > max){
        max = arr[i];
        maxNum = i;
    }
}
console.log(`Масимальний ел-т массиву ${max}`);
console.log(`Порядковій номер максимального ел-ту масива ${maxNum}`);

let countNegative = 0;
for (let i = 0; i < arr.length; i ++){
    if (arr[i] < 0){
        countNegative ++;
    }
}
console.log(`Кількість негативних ел-тів ${countNegative}`);

const count1 = arr.filter(item => item > 0 && item % 2 !== 0).length;
console.log(`Кількість непарних позитивних елементів ${count1}`)

const count2 = arr.filter(item => item > 0 && item % 2 === 0).length;
console.log(`Кількість парних позитивних елементів ${count2}`);

let positiveArr = arr.filter((num) => num > 0);
let evenPositiveArr = positiveArr.filter((num) => num % 2 === 0);
let evenPositiveSum = evenPositiveArr.reduce((a, b) => a + b, 0);
console.log("Сума парних позитивних елементів: " + evenPositiveSum);

let positiveArr1 = arr.filter((num) => num > 0);
let oddPositiveArr = positiveArr1.filter((num) => num %2 !== 0);
let oddPositiveSum = oddPositiveArr.reduce((a, b) => a + b, 0);
console.log("Сума непарних позитивних елементів: " + oddPositiveSum)

let positiveArr2 = arr.filter((num) => num > 0);
let product = positiveArr2.reduce((a, b) => a * b, 1);
console.log("Добуток позитивних елементів: " + product)

let maxEl =  arr[0];
let maxNumEl = 0;
for (let i = 0; i < arr.length; i ++){
    if (arr[i] > maxEl){
        maxEl = arr[i];
        maxNumEl = i;
    }
}
for (let i = maxNumEl + 1; i < arr.length; i ++){
    arr[i] = 0
}
console.log(`Масимальний ел-т массиву ${maxEl}`);
console.log(`Масив після обнулення ${maxNumEl}`)