class Car{
    constructor(name){
        this.name = name
    }
}

class SportsCar extends Car{
    constructor(name){
        super(name)
    }
    vroomvroom(){
        return "vroom vroom"
    }
}

export default Car
export {SportsCar}