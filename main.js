
// let obj1 = {};
// console.log(obj1);


// //створення обекта через конструктор
// let obj2 = new Object();
// console.log(obj2);


// let obj3 = {
//     name: 'Yurii',
//     age: 25
// };
// console.log(obj3);
// console.log(obj3.name); //для доступу  за ключем ставим крапку 
//ключі не можна називати number: 2, 3 ,4 


// let obj4 = {
//     '0': 'Ivan',
//     '1': 24,
//     '2': 'ii@gmail.com'
// }

// console.log(obj4['2']);


//...................

// let obj5 = {
//     name: 'Oleg',
//     age: 33,
//     email: 'oleg@gmail.com'
// };
// console.log(obj5);

// //переприсвоюємо значення ключа
// obj5.email = 'oleg33@gmail.com';
// console.log(obj5);

// //додаємо ключ
// obj5.city = 'Lviv';
// console.log(obj5);

// //видаляємо ключ 
// delete obj5.age;
// console.log(obj5);

// //для перевірки того чи є ключ в обєкті
// if('city' in obj5) {
//     console.log('Yes');
// } else {
//     console.log('No')
// }


//....................


// let obj6 = {
//     name: 'Yurii',
//     age: 44,
//     email: 'ii@gmail.com',
//     city: 'Lviv'
// };

// for(let key in obj6) {
//     // console.log(key);          // виводимо всі ключі
//     console.log(obj6[key]);       // виводимо значення в ключах
// }

//....................



//спочатку створюємо пустий обєкт а потім наповнює тому що стрічку розбиває
// let obj7 = new Object('Yurii') // не ок

// let obj7 = new Object();
// obj7.name = 'Yurii'
// console.log(obj7);

//.....................


// Старіший варіант написання методу в наш обєкт
// let check1 = {
//     name: 'Pavlo',
//     age: 36,
//     showData: function() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// check1.showData();




//новіший варіант 

// let check1 = {
//     name: 'Pavlo',
//     age: 36,
//     showData() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`)
//     }
// }
// check1.showData();

//..................



let person = {
    userName: 'Saimon',
    userPass: 1111,
    'date of birth': '01.01.2000'
};

console.log(person['date of birth']);