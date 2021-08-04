class Tamagotchi {
    constructor(name, age){
        this.name = name
        this.age = age
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        
    }
    eat() {
       const eat = document.getElementById("feed").addEventListener("click", function() {
            this.hunger -= 1
            console.log(this.hunger)
       })
    }
    sleep() {
        const sleep = document.getElementById("sleep").addEventListener("click", function() {
            this.sleepiness -= 1
            console.log(this.sleepiness)
        })
    }
    play() {
        const play = document.getElementById("play").addEventListener("click", function () {
            this.boredom -= 1
            console.log(this.boredom)
        })
        
    }
 
}
 
 


const pet = new Tamagotchi("Aiko", 3)

pet.eat()
pet.sleep()
pet.play()

console.log(pet.hunger)
console.log(pet.sleepiness)
console.log(pet.boredom)

namePet = () => {
    let userInput = prompt("What would you like to name your pet?")
    userInput = pet.name
    console.log(userInput)
 }

namePet()
const playGame = () => {
    for (i = 0; i < 10; i++){
        pet.hunger++
    }
}

