var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['music', 'movies', 'sports'],
    face: {
        hair: 'brown',
        eyes: 'blue',
        nose: 'small',
        mouth: 'medium'
    },
    getBirthYear: function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.age;
    },
    greeting: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    },
};

console.log(person.greeting());

var person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['music', 'movies', 'sports'],
    face: {
        hair: 'brown',
        eyes: 'blue',
        nose: 'small',
        mouth: 'medium'
    },
    getBirthYear: function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.age;
    },
    greeting: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
};

var person3 = new Object();
var person4 = {};

person3.firstName = 'Mike';
person3.lastName = 'Hawk';
person3.age = 40;
person3.address = {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
};
person3.hobbies = ['music', 'movies', 'sports'];
person3.face = {
    hair: 'brown',
    eyes: 'blue',
    nose: 'small',
    mouth: 'medium'
};
person3.getBirthYear = function() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.age;
};
person3.greeting = function() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
};

console.log(person3.greeting());

function Person(firstName, lastName, age, address, hobbies, face) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.hobbies = hobbies;
    this.face = face;
    this.getBirthYear = function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.age;
    };
    this.greeting = function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    };
}

class Human {
    constructor(firstName, lastName, age, address, hobbies, face) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
        this.face = face;
    }

    getBirthYear() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }

    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    sleep(hours) {
        return `I slept for ${hours} hours last night.`;
    };
        
    eat(food) {
        return `I ate ${food} for dinner last night.`;
    };
};

var person5 = new Human('John', 'Doe', 25, {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
    }, 
    ['music', 'movies', 'sports'], 
    {
    hair: 'brown',
    eyes: 'blue',
    nose: 'small',
    mouth: 'medium'
});


console.log(person5.greeting());
console.log(person5.eat('pizza'));

