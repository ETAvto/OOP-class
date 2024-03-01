/*
Задание 1. Классы

class Person{
    name;
    age;
    constructor(personName, personAge){
        this.name = personName;
        this.age = personAge;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom = new Person("Tom", 37);
tom.print();    // Name: Tom  Age: 37
const bob = new Person("Bob", 41); 
bob.print()     // Name: Bob  Age: 41



Создание класса 
без описания полей в классе

class Person{
 
    constructor(personName, personAge){
        this.name = personName;
        this.age = personAge;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom = new Person("Tom", 37);
tom.print();    // Name: Tom  Age: 37
const bob = new Person("Bob", 41); 
bob.print()     // Name: Bob  Age: 41



Задание 1.
Создать класс Tiles (кафель), который будет содержать поля с открытым доступом: brand, size_h, size_w, price и метод класса getData(). В главной функции объявить пару объектов класса и внести данные в поля. Затем отобразить их, вызвав метод getData().
!!!
*/
