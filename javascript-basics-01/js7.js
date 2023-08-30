var shoeSize = parseFloat(prompt("Enter your shoe size:"));
var birthYear = parseInt(prompt("Enter your birth year:"));
var result = ((shoeSize * 2 + 5) * 50 - birthYear) + 1766;
alert(result);