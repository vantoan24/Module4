class Person {
 
    private name: string;
    private age: number;

    public getBirthYear(): number {
        return this.age;
    }

    public getName(): string {
        return this.name;
    }

    constructor(name: string, age:number) {
       this.name = name;
       this.age = age;
    }
}

class Greeter {
    private greeter(person: string): string {
        return "Xin chao, " + person;
    }

    private toAge(birthYear: number): number {
        return new Date().getFullYear() - birthYear;
    }

    public greeting(person: Person): void {
        document.body.textContent = this.greeter(person.getName()) + " " + this.toAge(person.getBirthYear()) + " years old!";
    }
}

const greeter = new Greeter();

let sonnb = new Person("Tuan", 1990);
greeter.greeting(sonnb);
