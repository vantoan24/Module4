class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getBirthYear() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
class Greeter {
    greeter(person) {
        return "Xin chao, " + person;
    }
    toAge(birthYear) {
        return new Date().getFullYear() - birthYear;
    }
    greeting(person) {
        document.body.textContent = this.greeter(person.getName()) + " " + this.toAge(person.getBirthYear()) + " years old!";
    }
}
const greeter = new Greeter();
let sonnb = new Person("Tuan", 1990);
greeter.greeting(sonnb);
