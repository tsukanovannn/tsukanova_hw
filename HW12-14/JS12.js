const lenght = parseInt(prompt('Введить довжину масиву'))
const mas = []
for (let i = 0; i <lenght; i++ ){
    mas.push(parseInt(prompt(`Введить єелементи масиву ${i}`)))
}
mas.sort((a, b) => a - b )
alert(`Масив після сортування ${mas}`);
mas.splice(1,3);
alert(`Масив після виделння елементів з 2го по 4й: ${mas}`)