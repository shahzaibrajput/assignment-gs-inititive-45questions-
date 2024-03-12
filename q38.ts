import { describe } from "node:test"

 function describe_city(nameofcity:string,nameofcountry:string="Pakistan"){
    return `${nameofcity} is in ${nameofcountry}`

}
let city1=describe_city("Karachi")
let city2=describe_city("Hyderbad")
let city3=describe_city("Moro")
let city4=describe_city("Moskow","japan")

console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)