//! if/else - ternary
//! kullanıcıdan yaş değeri alan ve yaş >= 18 ise "You are ... years old and eligible to vote.", aksi halde "You are ... years old and not eligible to vote." uyarısı veren kodu if/else ve ternary kullanarak yazınız

// const containerVote = document.querySelector(".vote");
// const paragraphVote = document.querySelector(".param");
// const buttonVote = document.querySelector(".vote-btn")

// containerVote.addEventListener("click", () => {
//     const userData = +prompt("Enter your age")
//     console.log(userData)
//     paragraphVote.innerText = userData >= 18 ? `You are ${userData} years old and eligible to vote.` : `You are ${userData} years old and not eligible to vote.`
// })

//! functions
//! kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız
// let dayInput = document.querySelector("#date")
// let monthInput = document.querySelector("#month")
// let yearInput = document.querySelector("#year")
// let nameInput = document.querySelector("#name")
// const age = document.querySelector(".age")
// const containerAge = document.querySelector(".age-counter")
// const button = document.querySelector(".submit")
// button.addEventListener("click", (event) => {
//     // event.preventDefault()
//     console.log(event.target)
//     console.log(dayInput.value)
//     // calculateAge(nameInput.value, dayInput.value, monthInput.value, yearInput.value)
//     calculateYourAge()

// })
//? function declaration
// function calculateAge(name, day, month, year) {
//     let dayToday = new Date().getDate();
//     let monthToday = new Date().getMonth() + 1;
//     let yearToday = new Date().getFullYear();
//     let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (day > dayToday) {
//         dayToday = dayToday + months[new Date().getMonth()]
//         monthToday = monthToday - 1
//         console.log(dayToday)
//     } if (month > monthToday) {
//         monthToday = monthToday + 12
//         yearToday = yearToday - 1
//         console.log(monthToday)
//         console.log(yearToday)
//     }
//     let newDay = dayToday - day
//     let newMonth = monthToday - month
//     let newYear = yearToday - year
//     age.textContent = `${name} Your Age ${newYear} years ${newMonth} months and ${newDay} days`
//* Hesaplama için kaynak  
// https://yas.hesaplama.tv/#:~:text=Ya%C5%9F%20Nas%C4%B1l%20Hesaplan%C4%B1r%3F,y%C4%B1l%20de%C4%9Feri%20sizin%20ya%C5%9F%C4%B1n%C4%B1z%C4%B1%20verir.
// Yaşınızı hesaplamak için tarihleri alt alta "Yıl.Ay.Gün" şeklinde yazıp çıkarma işlemi yapmak daha kolay olacaktır.
//      2018.10.07
// _    2012.11.11
// ____________________
//      0005.10.26
//   Hesaplamayı şöyle yaptık 7 günden 11 gün çıkmaz ay hanesinden 1 ay aldık gün 37 oldu 37'den 11 çıktı 26 kaldı yani gün farkı 26 oldu. Ay 9 a düşmüştü 9'dan 11 çıkmaz yıldan bir yıl alırız 12 ay eder 9'a eklersek 21 ay olur 21'den 11 çıktı 10 kaldı yani ay farkımız 10 oldu. Yıldan 1 borç almıştık 2017 olmuştu 2017'den 2012 çıktı 5 kaldı yani yılımız 5 oldu.
// }

//? Arrow Function
// const calculateYourAge = (name = nameInput.value, day = dayInput.value, month = monthInput.value, year = yearInput.value) => {
//     let dayToday = new Date().getDate();
//     let monthToday = new Date().getMonth() + 1;
//     let yearToday = new Date().getFullYear();
//     let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (day > dayToday) {
//         dayToday = dayToday + months[new Date().getMonth()]
//         monthToday = monthToday - 1
//         console.log(dayToday)
//     } if (month > monthToday) {
//         monthToday = monthToday + 12
//         yearToday = yearToday - 1
//         console.log(monthToday)
//         console.log(yearToday)
//     }
//     let newDay = dayToday - day
//     let newMonth = monthToday - month
//     let newYear = yearToday - year
//     age.textContent = `${name} Your Age ${newYear} years ${newMonth} months and ${newDay} days`
// }


//!  Array iterators
//!  isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
const newArr = []
const isimler = [
    'Ahmet',
    'mehmet',
    'ismet',
    'SAFFET',
    'Can',
    'Canan',
    'Cavidan',
];
for (const i of isimler) {
    newArr.push(i.toLocaleLowerCase())
}
// console.log(newArr)

//* fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.
const fiyatlar = [100, 250, 50, 89];
// fiyatlar.filter((e) => e < 250 ? console.log(e) : null)

//  Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeleyiniz.
const kisiler = [
    {
        name: 'Ahmet',
        surname: 'Can',
        job: 'developer',
        age: 30,
    },
    {
        name: 'Mehmet',
        surname: 'Baki',
        job: 'tester',
        age: 35,
    },
    {
        name: 'Nur',
        surname: 'Ersan',
        job: 'team lead',
        age: 40,
    },
    {
        name: 'Merve',
        surname: 'Veli',
        job: 'developer',
        age: 26,
    }
];

// kisiler.filter((e) => e.age < 33 ? console.log(e.name) : null)

//! Objects
//! calisan objesinde … değerlerini consola yazdırınız  

const calisan = {
    ad: 'Ahmet',
    soyad: 'Yilmaz',
    yas: 30,
    is: 'developer',
    lokasyon: { sehir: "Ankara", ilce: "Kızılay" },
    diller: ['C', 'C++', 'Pyhton', 'JS'],
    maas: 120000,
};
// console.log(JSON.stringify(calisan))

for (const obj in calisan) {
    if (obj !== "lokasyon") {
        console.log(`${obj} : ${calisan[obj]}`)
    } else {
        console.log(`${obj} : ${calisan[obj].sehir}, ${calisan[obj].ilce}`)
    }
}
//! calısan objesine ait değerleri yas değerini güncelleyerek yeni bir obje içinde biriktiriniz

let newCalisan = { ...calisan }
newCalisan.yas = 15
// console.log(calisan)
console.log(newCalisan)

//! Destructuring
//! car objesinden brand, model,name,surname propertilerini destruct ediniz

const car = {
    brand: 'BMW',
    model: 1990,
    engine: 1.6,
    owner: {
        name: 'Ahmet',
        surname: 'Can',
    },
};
let {
    brand,
    model,
    owner:
    {
        name,
        surname
    }
} = car
console.log(brand, model, name,surname)

//! Spread
//! araclar ve otomobiller dizilerini başka bir dizide birleştiriniz

const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];

let arr = araclar.concat(otomobiller)
console.log(arr)
