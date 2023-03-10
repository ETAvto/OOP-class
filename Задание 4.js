/*
Задание 4.
Создать базовый класс Student и задать ему свойство name с публичным уровнем доступа. В классе Student, требуется создать метод GetOutput, в данном методе требуется вывести свойство name. Создать класс-наследник group и задать ему поле groupNumber с публичным уровнем доступа.
Вам необходимо:

1. В классе-наследнике переопределить метод GetOutput, и переопределить свойство name. 

2. Создать два объекта Bob и Sam. Объект Bob создаётся из базового класса Student, соответственно у него будет только имя "Bob". А объект Sam создаётся из класса-наследника. У объекта Sam Должно быть имя и группа "333". Имя пользователь вводит сам, и если имя объекта совпадает с именем, которое ввел пользователь, то вывести имя и группу, в противном случае вывести сообщение, "В группе №333 такого имени не существует".





*/

class Student {
    constructor(name){
        name;
    }
    getOutput(){
        console.log(`${this.name}`)
    }
}

class Group extends Student{
    groupNumber;
    super(name);
    constructor(name, groupNumber){
        name
        groupNumber
    }
    getOutput(){
        if(this.name == "Sam"){
            console.log(`${this.name} ${this.groupNumber}`)
        }
        else{
            console.log(`В группе такого имени нет`)
        }
        
    }
}

//let bob = new Student("Bob")
let sam = new Group(prompt(), 233)