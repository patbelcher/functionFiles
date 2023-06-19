//more efficient than using ifs or switches
//we can use an object called a hash map for multiple conditions

const petSounds = {
    "dog":"woof",
    "cat":"meow",
    "bird":"chirp",
    "snake": "hiss",
    "cow": "moo",
    "wolf": "howl",
    "chicken": "cluck"
}

const pet = "cat";
if(pet in petSounds) {
    console.log(petSounds[pet]);
} else {
    console.log("Unknown pet sound")
}



//order doesnt matter in an object
//not good for inequalities
/* another example using a hash Map
const produce = {
    "apple":{price: 0.79, color: "red", sku:"4056"},
    "orange":{price: 0.99, color: "orange", sku:"3022"},
    "onion":{price: 0.49, color: "yellow", sku:"7163"},
}

const product = "orange"
const {price,color, sku} = produce[product]
console.log(`${product} is ${color} and costs $${price}.') 

*/