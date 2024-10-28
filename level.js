class Animal {
    constructor(name, legCount, speaks){
        this.name = name
        this.legCount = legCount
        this.speaks = speaks
    }
    speak(){
        console.log("I bark" + this.speaks);
    }
    legs(){
        console.log("I walk on four" + this.legCount);
        
    }
    static myType(){
        console.log("Here I'm a Animal");
        
    }
}
console.log(Animal.myType())

let dog = new Animal("dog", 4, " bow bow")
let walk = new Animal("walk", " legs")
dog.speak()
walk.legs()