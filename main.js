
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




//Обєкт в обєкті
// let person = {
//     userName: 'Saimon',
//     userPass: 1111,
//     'date of birth': {
//         date: '01',
//         month: 'April',
//         year: '2000'
//     }
// };

// console.log(person['date of birth'].date);





//...............................
// let user = {
//     userName: 'Admin',
//     userAge: 25
// }

// console.log(user);

// let newUser = user;
// console.log(newUser);


// newUser.userName = 'Yurii';
// console.log(user);    //Yurii
// console.log(newUser); //Yurii
//..................................


//................................
// let user = {
//     userName: 'Admin',
//     userAge: 25
// }

// let newUser = {};

// for(let key in user) {
//     newUser[key] = user[key];
// }

// console.log(user);
// console.log(newUser);

// newUser.userName = 'Yurii';
// console.log(user);      //Admin
// console.log(newUser);   //Yurii оригінал залишаєтсья без змін а копію можна змінити
//старіший метод


//.....................................

//ASSIGN
// let woman = {
//     name: 'Oksana',
//     age: 18
// }
// //метод обєкта який створює копію assign
// let newWoman = Object.assign({}, woman); //приймає два пареметри : що саме ми будемо створювати і звідки сами ми будемо брати
// //в даному випадку обєкт і з обєкта woman
// console.log(woman);
// console.log(newWoman);

// newWoman.name = 'Olena';
// console.log(woman);         //Oksana
// console.log(newWoman);      //Olena, ніяк на оригінал ми не впиливаємо

//....................................


//FREEZE
// const frozenObject = {
//     name: 'Bob'
// }
// Object.freeze(frozenObject); // метод freeze забороняє добавляти нові ключі всередині і змінювати ті які є вже 
//повинен бути const 
// frozenObject.name = 'Robert';
// console.log(frozenObject);     //виведе Bob

//.........................................

//SEAL
//метод seal дозволяє змінювати наявні ключі але не дозволяє додавати нові 
//кількість ключів всередині ніяк не змінюється тобто видаляти ключі неможна 


// const sealedObject = {
//     name: 'Robert'
// };

// Object.seal(sealedObject);

// sealedObject.name = 'Bob';
// sealedObject.country = 'USA';
// delete sealedObject.name;

// console.log(sealedObject); //Bob
//.................................................



//.................................................
// let car = {
//     mark: 'Audi',
//     country: 'Germany'
// };

// let q7 = {
//     name: 'Q7',
//     year: 2019,
//     package: 'Premium',
//     price: 12000,
//     currency: '$'
// };

// car.q7 = q7;    //зєднюємо два обєкти 
// console.log(car);

//.................................................



//функція конструктор 

// function Student() {
//     this.name = 'Kateryna';
//     this.age = '20';
// }

// let st1 = new Student();
// console.log(st1);


//функція конструктор з параметрами stName and stAge
// function Student(stName, stAge) {
//     this.name = stName; 
//     this.age = stAge;
// };

// let st1 = new Student('Yurii', 25);
// console.log(st1);
// let st2 = new Student('Oleg', 19)
// console.log(st2)


//дає можливість створювати неодноразово обєкти по певному шаблону 


//............................................



// function Student(stName, stAge) {
//     this.name = stName; 
//     this.age = stAge;
//     this.showData = function(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`)
//     }
// };

// let st1 = new Student('Yurii', 25);
// console.log(st1);
// let st2 = new Student('Oleg', 19)
// console.log(st2)

// st1.showData();
// st2.showData();

//...........................................



//...........................................

// function Student(stName, stAge) {
//     this.name = stName; 
//     this.age = stAge;
//     this.showData = show; //помістили зовнішню функцію в наш конструктор 
// };


// function show() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`)
// };

// let st3 = new Student('Natalia', 54);
// st3.showData();

//..............................................

























