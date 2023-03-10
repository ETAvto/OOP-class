class Student {
    constructor(name){
        this.name = name;
    }
    getOutput(){
        alert(`${this.name}`)
    }
}

class Group extends Student{
    groupNumber;
    constructor(name, groupNumber) {
        super(name);
        this.groupNumber = groupNumber;
    }
    getOutput(){
        if(this.name == "Sam"){
            alert(`${this.name} ${this.groupNumber}`)
        }
        else{
            alert(`В группе такого имени нет`)
        }
        
    }
}

//let bob = new Student("Bob")
//bob.getOutput();
let sam = new Group(prompt(), 333)
sam.getOutput()