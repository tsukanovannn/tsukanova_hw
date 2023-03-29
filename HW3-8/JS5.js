let hours = prompt("Enter the number of hours:");

dhouse  = Number(hours);

if (isNaN(hours)){
    alert("Error: The enter value is not a number")
}   else{
    let seconds  = hours  + 3600
    alert(`${hours} hours it ${seconds} seconds`)
}