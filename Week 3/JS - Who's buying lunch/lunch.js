function whoIsPaying(names) {
    var numberofPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberofPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today";

}

console.log(whoIsPaying(["Paddy", "Olga", "Alex", "Colin", "Layla", "Jenni"]));
