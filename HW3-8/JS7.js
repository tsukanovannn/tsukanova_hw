function getInfo() {
    let year = prompt('Enter your year of birth:');
    year = Number(year)
    if (isNaN(year)) {
        alert('It is a pity that you did not want to enter year of birth.');
        return;
    }

    let city = prompt('Enter where are you live:');
    if (!city) { //что тут значит '!'?
        alert('It`s a same you didn`t want to enter the city');
        return;
    }

    let sport = prompt('Enter your favorite sport');
    if (!sport) {
        alert('It`s a shame you didn` want to introduce a sport');
        return;
    }

    let today = new Date();
    let age = today.getFullYear() - year;

    let massage = "Your age:" + age + "\n"
    if (city === "kyiv" || city === "Washington" || city === "London") {
        massage += "You live in the capital:" + getCountry(city) + "."
    } else {
        massage += "You live in the city:" + city + "."
    }

    if (sport === "football"){
        massage += "\nCool! Do you want to be like lionel Messi?"
    } else if (sport === "basketball") {
        massage += "\nCool! Do you want to be like Jeffrey Jordan?"
    } else if (sport === "bodybuilding"){
        massage += "\Cool! Do you want to be like Arnold Schwarzenegger?"
    }
    alert(massage)
}

function getCountry(city){
    switch (city){
        case "Kyiv":
            return "Ukraine"
        case "Washington":
            return "USA"
        case "London":
            return "Great Britain"
        default:
            return "unknown country"
    }
}