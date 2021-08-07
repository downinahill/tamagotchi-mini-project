class Tamagotchi {

    constructor(name){

        this.name = name

        this.age = 0

        this.hunger = 0

        this.sleepiness = 0 

        this.boredom = 0

        

       

    }

    ageUp() {

        this.age++

        

    }

    eat = () => {

            this.hunger -= 1 
            document.querySelector("#hunger").innerHTML = `Hunger: ${this.hunger}`
            if (this.hunger >= 10) {

                alert("Your pet has died.")

                

            }

            console.log(this.hunger)

      

    }

    sleep = () => { 

         
            
            this.sleepiness -= 1
            document.querySelector("#shell").style.backgroundColor = 'black' 
            document.querySelector("#sleepiness").innerHTML = `Sleepiness: ${this.sleepiness}`
            if(this.sleepiness >= 10) {

                alert("Your pet has died.")
                
                

            }

            console.log(this.sleepiness)

       

    }

    play = () => {

            this.boredom -= 1 
            document.querySelector("#boredom").innerHTML = `Boredom: ${this.boredom}`
            if (this.boredom >= 10) {

                // alert("Your pet has died.")
                
                

            }

            console.log(this.boredom)

       

    

        

    }

 

    updateStats(){

        let age = document.querySelector('#age')

        age.textContent = `Age: ${this.age}`

        let hunger = document.querySelector('#hunger')

        hunger.textContent = `Food: ${this.hunger}`

        let sleep = document.querySelector('#sleep')

        sleep.textContent = `Sleepiness: ${this.sleepiness}`

        let boredom = document.querySelector('#boredom')

        boredom.textContent = `Play: ${this.boredom}`

      }

}


let userInput = " "

function namePet() {

    let userInput = prompt("What would you like to name your pet?")

    let h1 = document.querySelector('h1')

    h1.innerText = `${userInput}`

    console.log(userInput)

}

namePet()

 

const pet = new Tamagotchi(userInput)

 

// Intervals

let hunger = setInterval(function(){
    
    pet.hunger++;

    if (pet.hunger >= 10) {
        alert("Your pet has died.")
        document.querySelector("#pet").classList.add("rotate")

        endGame()
    }
    let hunger = document.getElementById("hunger");

    hunger.innerHTML = `Hunger: ${pet.hunger}`;

}, 2000);

 

let sleep = setInterval(function(){

    pet.sleepiness++;
    let sleep = document.getElementById("sleepiness");
    if (pet.sleepiness >= 10) {
        document.querySelector("#shell").appendChild("<p>Your pet has died</p>");
        document.querySelector("#pet").classList.add("rotate")

        endGame()
    }
    

    sleep.innerHTML = `Sleep: ${pet.sleepiness}`;

}, 4000);

 

let boredom = setInterval(function(){

   pet.boredom++;
   
   if (pet.boredom >= 10) {
    document.querySelector("#shell").appendChild("<p>Your pet has died</p>");

    document.querySelector("#pet").classList.add("rotate")
    endGame()
}
   let boredom = document.getElementById("boredom");

   boredom.innerHTML = `Boredom: ${pet.boredom}`

}, 3000);




let age = setInterval(function(){

    pet.age++;
    if (pet.age == 5) {
        alert("You win!")
 }
    let age = document.getElementById("age");
 
    age.innerHTML = `Age: ${pet.age}`
 
 }, 300000);

 
 
 
 
 let lightsOut = setInterval(function turnOffLights() {
    

 }, 1000)
 clearInterval(lightsOut)

// Animation






















 // Actions

function feed() {

pet.eat();

}

 

function play() {

pet.play();

}

 

function turnOffLights() {
    
pet.sleep();

}

function endGame() {
    clearInterval(sleep)
    clearInterval(hunger)
    clearInterval(boredom)
    clearInterval(age)
    
}

 

// Attach handlers

document.getElementById("sleep").addEventListener("click", pet.sleep);

document.getElementById("feed").addEventListener("click", pet.eat);

document.getElementById("play").addEventListener("click", pet.play);

 

// let age = document.getElementById("age");

// age.innerHTML = `Age: ${pet.age}`

// console.log(this.hunger)

// console.log(this.sleep)

// console.log(this.boredom)
      
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
         
