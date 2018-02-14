class Person {
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

const eyup = new Person("Eyup",26);
console.log(eyup.getDescription());

const dilek = new Person("Dilek",35);
console.log(dilek.getDescription());

const kubra = new Person();
console.log(kubra.getDescription());
