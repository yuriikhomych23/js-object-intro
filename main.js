
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


//Math.name

// console.log('Math.floor(5.9)', Math.floor(5.9));   // заокруглить до 5
// console.log('Math.ceil(5.2)', Math.ceil(5.2));     // заокруглить до 6

// console.log('Math.round(5.2)', Math.round(5.2));   // закруглить нормально

// let num = 5.4254223
// console.log('num.toFixed()', num.toFixed(2)); // 2 виводить дві цифри після коми i заокруглить до більшого 


//Math.sin()
//Math.cos()
//Math.tan()


// console.log('Math.sqrt(2)', Math.sqrt(15));
// console.log('Math.pow(2, 5)', Math.pow(2, 5));
// console.log('Math.abs(-5)', Math.abs(-5));



// console.log('Math.max()', Math.max(2, 24, 12, 13, 134, 1, 13, -31,222)); //повертає тільки максимальне значення 
// console.log('Math.min(2)', Math.min(2, 24, 12, 13, 134, 1, 13, -31,222)); // повертає мінімальне значення


// console.log('Math.random()', Math.random()) // генерує любе число від 0 до 1 не включаєчи 0 і 1 

// let rand = Math.round(Math.random()*10);
// console.log(rand); // генерує число від 1 до 10





// масив
// let arr = [1, 55, 'Ivan', 'Yurii'];
// console.log(arr[2]);





//виводить будь яку фразу 
// let arr = ['Просто', 'ЩОсьтам', 'LOGOS', 'IT', 'Треба вчитись'];

// let num = Math.round(Math.random() * (arr.length-1));
// console.log(arr[num]);


// function num(a, b) {

//     return Math.round(Math.random());
// }

// console.log(num)
// num(1, 100);


//обчислює площу кола 
// let radius = +prompt('Введіть радіус кругу ')
// function sq() {
//   return Math.PI * radius * radius;
// }

// console.log(sq());



// function randomizer (min, max) {
//     let rand = min + Math.round(Math.random() * (max - min));
//     return rand;
// }
// console.log(randomizer(2, 5))


// Рандомне число 
// let randomizer = (min, max) =>  min + Math.round(Math.random() * (max - min));
// console.log(randomizer(2, 10));




//квадратний корінь 
// let ask = +prompt('number');

// function n() {
//     if(ask >= 1) {
//         return Math.sqrt(ask);
//     } else if ( ask <= 0) {
//         return alert('Ведіть додатнє число');
//     }
//     else {
//         return alert('Введіть число')
//     }
// }

// console.log(n());


//іниший варіант 
// function kvadrat(num) {
//     if(num < 0) {
//         console.log('Ви ввели відємне число')
//     } else if (num != (num * 1)) {
//         console.log('Тут стрічка')
//     } else {
//         console.log(Math.sqrt(num))
//     }
// }
// let ask = prompt('введіть число');
// kvadart(ask);









// let s = 'Hello';

// console.log(s.length);
// console.log(s.charAt(1))// вказуєм індекс повертає літеру 


// console.log(s.toUpperCase());
// console.log(s.toLowerCase());




//виводить перше слово з великої літери  
// let ask = prompt('Write your name');

// let res = ask.charAt(0).toUpperCase();

// for(let i = 1; i < ask.length; i++){
//     res += ask.charAt(i).toLowerCase();
// }

// console.log(res);

 



// let s1 = 'Hello';
// console.log(s1.indexOf('l'));       //вказуєм літеру повертає індекс;
//  //2


// let s2 = 'Hello world';
// console.log(s2.indexOf('world'));   //6




let s3 = prompt('');

let res = s3.indexOf(' ');

if(s3 < 0) {
    console.log('Пробіл відсутній');
} else {
    for(let i = 1; i < s3.length; i++) {
        console.log(res)
    }
}













