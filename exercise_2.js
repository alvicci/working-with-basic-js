const userName = prompt("What's your name? ");
const userAge = parseInt(prompt("What's your age? "));

const currentYear = new Date().getFullYear();

const yearOfBirth = currentYear - userAge;

alert(`Hello ${userName}, your year of birth is - ${yearOfBirth}`);
