import {generate} from "random-words"

import add, {subtract, multiply} from "./src/function.js"
import isPrime from "prime-number-check"
import Car, {SportsCar} from "./src/Car.js"


let c = new Car("car1")
console.log(c.name)

let sportscar = new SportsCar("sportcar")
console.log(sportscar.vroomvroom());


console.log(add(2,3))
console.log(multiply(3,4))

console.log(isPrime(2))

const array = []
for(let i =0; i < 10; i++){
    array.push(generate())
}
console.log(array)