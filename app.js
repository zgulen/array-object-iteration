//! if/else - ternary
//! kullanıcıdan yaş değeri alan ve yaş >= 18 ise "You are ... years old and eligible to vote.", aksi halde "You are ... years old and not eligible to vote." uyarısı veren kodu if/else ve ternary kullanarak yazınız

const containerVote = document.querySelector(".vote");
const paragraphVote = document.querySelector(".param");
const buttonVote = document.querySelector(".vote-btn")

containerVote.addEventListener("click", () => {
    const userData = +prompt("Enter your age")
    console.log(userData)
    paragraphVote.innerText = userData >= 18 ? `You are ${userData} years old and eligible to vote.` : `You are ${userData} years old and not eligible to vote.`
})

//! functions
//! kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız
let dayInput = document.querySelector("#date")
let monthInput = document.querySelector("#month")
let yearInput = document.querySelector("#year")
let nameInput = document.querySelector("#name")
const age = document.querySelector(".age")
const containerAge = document.querySelector(".age-counter")
const button = document.querySelector(".submit")
button.addEventListener("click", (event) => {
    // event.preventDefault()
    console.log(event.target)
    console.log(dayInput.value)
    calculateAge(nameInput.value, dayInput.value, monthInput.value, yearInput.value)
    
})
//? function declaration
function calculateAge(name, day, month, year) {
    let dayToday = new Date().getDate();
    let monthToday = new Date().getMonth() + 1;
    let yearToday = new Date().getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > dayToday) {
        dayToday = dayToday + months[new Date().getMonth()]
        monthToday = monthToday - 1
        console.log(dayToday)
    } if (month > monthToday) {
        monthToday = monthToday + 12
        yearToday = yearToday - 1
        console.log(monthToday)
        console.log(yearToday)
    }
    let newDay = dayToday - day
    let newMonth = monthToday - month
    let newYear = yearToday - year
    age.textContent = `${name} Your Age ${newYear} years ${newMonth} months and ${newDay} days`
}
