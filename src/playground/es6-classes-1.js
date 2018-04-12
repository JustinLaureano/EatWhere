class Person {
    constructor(name = 'Dude', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${ this.name }`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            return description + ` and a ${this.major} major.`;
        }
        else {
            return description;
        }
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    };
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            return greeting + ` abd I am from ${this.location}`;
        }
        else {
            return greeting;
        }
    }
};

const me = new Student('Justin', 30, 'CS');
const traveler = new Traveler('Bob', 99, 'Hell');


console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());
console.log(traveler.getGreeting());