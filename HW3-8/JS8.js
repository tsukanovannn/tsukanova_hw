let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr){
    case numOrStr === null:
        console.log(`ви скасували`)
        break
    case numOrStr.trim() === ``:
        console.log(`e=Empty String`)
        break
    case isNaN( +numOrStr ):
        console.log(`number is Ba_NanN`)
        break
    default:
        console.log(`OK`)
}