// let cat = {
//     nickname:'Матвей',
//     age:'3',
//     name:'Ольга',
//     contacts:'79211234567',
//     food:'Комбинированный корм',

//     showAll() {
//         console.log(`${this.nickname}  ${this.age} года от  ${this.name} ${this.contacts} ест ${this.food}`);
//     }
// }

class Cat {
    constructor(nickname, age, name, contacts, food ) {
        this.nickname = nickname;
        this.age = age;
        this.name = name;
        this.contacts = contacts;
        this.food = food;
    }
     getSalary() {
        return this.rate * this.days;
    }
}

let nickname = document.getElementById('name')