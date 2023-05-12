// declarando una clase
class User{
    // métodos
    greeting(){
        return "Hello";
    }
};


// instancia de una clase
const newUser = new User();
console.log(newUser.greeting());

const dev = new User();
console.log(dev.greeting());

class User2{
    // constructor
    constructor(){
        console.log("Nuevo usuario");
    }

    greeting(){
        return "Hello";
    }

}

const david = new User2();

class User3 {
    constructor(name){
        this.name = name;
    }
    //m/etodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()}  ${this.name}`;
    }
}

const ana = new User3('Ana');
console.log(ana.greeting());

// getters & setters
class User4{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //métodos
    #speak(){
        return "Hello";
    }
    greeting(){
        return `${this.speak()}  ${this.name}`;
    }

    get #age(){
        return this.age;
    }

    set #age(newAge){
         this.age = newAge;
    }
}

const dev2 = new User4('Torcuato', 38);
console.log(dev2.age);
console.log(dev2.age = 25);