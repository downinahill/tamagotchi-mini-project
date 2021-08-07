class Tamagotchi {

    constructor(name){

        this.name = name

        this.age = 0

        this.hunger = 0

        this.sleepiness = 0 

        this.boredom = 0

        

       

    }

    ageUp =() => {

        this.age += 1

        

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

                alert("Your pet has died.")
                
                

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
    if (pet.sleepiness > 5) {
        document.querySelector("#shell").style.backgroundColor = "black"
    } 
    else if (pet.sleepiness < 5) {
        document.querySelector("#shell").style.backgroundColor = "gray"
    }

    let sleep = document.getElementById("sleepiness");
    if (pet.sleepiness >= 10) {
        alert("Your pet has died.")

        document.querySelector("#pet").classList.add("rotate")

        endGame()
    }
    

    sleep.innerHTML = `Sleep: ${pet.sleepiness}`;

}, 2000);

 

let boredom = setInterval(function(){

   pet.boredom++;
   
   if (pet.boredom >= 10) {
    
    alert("Your pet has died.")
    document.querySelector("#pet").classList.add("rotate")
    endGame()
}
   let boredom = document.getElementById("boredom");

   boredom.innerHTML = `Boredom: ${pet.boredom}`

}, 2000);




let age = setInterval(function(){

    pet.age++;
    if (pet.age == 5) {
        alert("You win!")
        document.querySelector("#pet").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABvFBMVEX////u7u7t7e3/fwAAAAD+/v719fXz8/Px8fH6+vr8/PwAAA4AAA8NDQ3UaQD/gQD/hQAACQ0AAAj/ewAABQ3abAD/hwD+eADZ2dmwWQjGxsb8gATExMTm5ubY2Njg4OBsbGyhoaG5ubk6OjqwsLC+AABYWFhjY2N9fX1ISEh0dHSNjY3Ozs6qqqqDg4OVlZUqKiocHBzjcAE9PT2lVQnyegOKRwm6XwhvOgtSUlIuLi5PKwwVFRV9QQlcMA0vGw06IQ3HZQiaTwjRYAAkFgxTLQthNAlDJgwRAAA/HAAxHwzBWgAfFQ1lLgDOaQR3PQrobAAdAAAmAAD+kTryzbT9xZ398unwrXkAFBeWQwD/jib969z6o2L/z67/38hbZmzFoYQkLzVRIAA1EADeeSKJPADezsCUhXihgWqwe07Kdy6rmofEi2PZl2pqQiR7NADouJudYi5nJwA8DQA2AADFej58VkQdAA5pAACcAAdVSDtIAADu1tWnQgDioJ+hNjHEYF1hSEnZeC1vTT24d0UwJxtOFQDfw7D+mE3tpXOJbVjMr5n/7tLxmlfDhVOdc01NNxr9s3aTXjTdqYCO6h4gAAAgAElEQVR4nO29iWPbyJUnDIrFswoogESJhqBbWt2HBREAbYoHIB6WTIPdsSR3WrYm3Un3zpXtnuxmdje72f2++WaSzs46M739D3/vFUgdtmyLstt2soPJuCGJYKF+eMfvvXr1oCjySOAxlpfnGXmek+c5+YeMPM+PyR/iC+R5Vtm8R4i6NJ85vyAtL07HFw8+hEdKno+9zWhjKXmevXTBjzOa8hZ3mdlQyfr85PwsGfs3TOK7zM6Q5fgKsp77N0zkXaYXVuMbUBbJk2zi3zAZS2TmyZSSSiEmymc//fwo9dJd5hMv3mVWSaffOSaJ9KWL3yUmY3gMrpPng+vk+fA6PIZ3OZZeXj6/fJPYpcfHp3DTuWw2kc3klezY1BR8Jp3JDu8SjvT0KiFztxoNj/g8e+mCtDxPX7r40mjDC0YeLUYxkcIjRjGRk+eDRyDPh49Afiq+AKSDbF5gSixeLJWSj58+OX52drr5F18QPNS7y9sTiIu8WDn5GVm6s0gmsrcYDf8gJSSRf8UFGfzQuWzKP9x2bombiOU1qgqYTF5gsv0pT8JRhKP08GGpaLVUSlW1gMiszs1kx05Oj7/7LVmHj67dT48+2sXje+cq99Jor8Fk7E13eVlOpoiQoMDh2HpoVg9ZrUwZpaZBa5+ACJVKRY8s4kenyYxyi9GuwySRu3TBKJi8drTbY5JS1pbOIUkpX5QHmNich5ZbY6E+bgdhv96glFbLjs67ZAPNsTJDpv98MZkkuQtBme1zmzu2RMXVazTSw07FE7ptaW7gNWnbDQATPCbRXX3cmIxq0i8uyA8mKY/tL3XuN3WAhCc5rzvcdivlvs5dr9sLxnWnzpyQyG9YXR7ak5FGU27mQFJv466GF+TxSIHLhCOXwvO0PE+/eJ7PyfOsPE/hp+/OXWCy/gi0g3LbTqIOuQCM53q8VtF1XaV9zvU2dX++AgKyAeYke4vR4HjtrQ4uyMjz/OWLR51bXnmFWI5dEsuxV/DY5dkLTP6irzuUOTzpRk5S1wGT6njDpVYUBrUmtTi3aDMCrcnvrd1utJvx2LFR3NWrRnsTJolXq2p6a8jt4SjU9IDRiLsH6H77kS48p6nv1XhNdcetqs7LlHpfbikraurPmNsnMpt7Eg/k99vE5T41Q4csrExuLC6TgzIPHb3Z5k7QcOyarnv9JusTZXVbSf0ZY5LdIIMf7qwSTwet6ez9ZC3+TXYWmC23Kw+FpgnXdrkj3PHyHrmztPWng8ktIpBEgsxLQdkkhLoc7Gi9QOa2VndWt9fm4ZeW7mrycLh7CIy2G5XJ3PoSYjLyaPKKm7urt4x3MvLI5fLwv/RL52l5nnvpPIPWOXsPjKYCnuTujmdHjqN3YOar6ztZMkfIzCIBhywkKLxqksU7hH5KViZI+hajxR96+VbTr7gYPpS79oIbjfZ6zvZKk55QMvPLhKwgsrtknQTA4+vjXWN6ZmbyfmZ5cpeQ6aUOuGXXQVCoSmbnVvfWyf002ciOPNptHchrOdtr5vZaTF7F9bIb6xD1L82g00mR3bmDiqlSTSOzysT2HXJv7h4GxfMEaS23AZUDkJPZ+YX1PJm+O5e5VXR1HSYfF7dPKFuYCMFge4qszX3ZUI2m3iBb8NOGAl8wdZeQWRbIGIiDAv0TIbvKHkmvLW3dS/+ZYjIG4e1azEymyewG6anMr30xu6IAVndnF9bht6phWnFc6Grl5XskvXl/dW4RTE0i8bFjElvoESOQRHYKIZFXbZB7yixRzQ6ZWSfzOWVxdWFbmVeICjANYmUekMTklAqW5w7ZJpPZHzHeuSY9N/po0kLn0vK4fJ5+6fziQ+lcmiwrA0wWCdDZWULuTyvgbsgK/m6bbCEmQPVj7eEP1pWddWVleYOs3Z1LjTbaDW/vrS6+8iFlKJajPIKUsnxXGWKyjZhMkm0pMnAs4k8qUXe+qIIlEe5AUO7MzyljZIMsgYKNNpoy5CfKQAluwk8uXTDyaOeYJK53c4lrVDWlTGCu7E6MyTKKTIJMonXZ2UlsbwA0Khx3C44jHEDFcbTIqR2cJkCkpsnC9sKfCo8d7bqFraltdT4WlLtSRHYm5MfxGybJDnhilfocZIQPuKyoRdN3l8kM2Z0kg2n9eWEyA7ohkVBmlAyRqaXlxcE3ja2R2Xub00Yh4jK9pNsxKNr+8RqZ3yDLd0jmTxCTsUvXXUsRVxbWCQZ7mZUVwGcH/7hNNnJTi2u7C4RsTazMk7aL1pXXzLbgSGWFE/1i/i4a3wSZyo402ouYXLpgdPp7k9GU9C2OGWV1F83KAtkcWFdlnQyP9ZWFXTJgJtxiJi3rtg0SE3x1h0zvgAkG9G4z6NUj9w6+41XHVc52w0eQW1ZzaFL3SAL8L+arFWDzO8BdydLUIiEdl9uDJH6HqawMMXPSrpD5FYKKNlwDGf2BZ7OZdPxclZmpk/RAUUAJxt6leN2Kx6ZBczAg3iRLoDRrKDHTZH4gd8oq8fXk+cGrVKWITpPWZpf3EMWFbeWGo6WkGGOkGk/x68X1f/+Xf/XXwvntA0I+/Up8ufyzo9OPgttnJ/ekNUG6AZjgQ0zI5Sz5JQufOgMhiTFJ9lnBSeodWinvKquTQHSX1268lpFYXFlauH93dXnrb/7212J/f//hIxC1Xt93NKvDqHdAfvJb/5fPptBqf9h4J7O6MDW5PaMsIjL4W+BqA/GGcMflySsH92kwHlLTDUCzZuEj66s3kROc4l+Q9n/o9+vN2FBVvUAIEVSYodKu74igzZpNk1Z//o3441Eig8u/7zDeSdwkJji/Lr2KrnhC2cDVX7yPLbjh+IPgmf0XIEkmda1pMVXwwEzNrcq1svwbRkO7MXX2wy99TchDs2qH1DRxQRF+slS1atIO/C1kva5Bq10v+mnwy7OBnOCtXop3RpnbMN4ZmvGbhxITc1tkN6Ok0rEKJO4CQRvKyTR5CRIwtEGtbHNe/mxrHjOPY+Tr/OtHOP32D6go+xIPyfiE8CsGRNq0AahoddbvMjOEX5oqgFKvR83W/ld/9yydfydh0kDkRwo5N+NAbyAZKuaPyNYQE/syGkP1Ab+T5BX4oPzYF3+XxnjkutESmbHTX4a/+vKg2Wj09nqNas3ShrBoYbWpUtYsCydknsdYWxO+oXZMVvM88zBo/cfoh+n4Qb1lPnZw3WVec0nzruN6d7BkYggmOuGJBQAlTtinL3SHu8EVmdG/XL8zJ2V0/T8dZ64fLZteL/zqIUhFJI8gKPcp7Tuu4/gSGq/e71LatByfen6LtQLhs55HmVU3u02v1Xu4/+/zsYJfduEjzO22mChL6+m14bLoDLk7oeTQBN6fQeOy8sDWOS6RJgNnYG1tLj2RSxbl+nIahOmTZ5lENifDJRwNdFuqYe7bXzwM/LJXC8GaOq6NoQEPKQvhK0MInxwnqFasmsG6mtYKRZ3uRSKk3Rqrdw3m9ao9Guw/+j3c6XvHZIwAgR8mGdKZfC6tpBfvAyrIxXL3GxUvSsJc9GIR/rXhCJmlJ3mZxjHjxLzyRVg8Tm8PC+Cy2WwiN/PFvdXdnzxotL0ItKTcMjqeFTmua+u6U6Vdh+v9rgPQwNfUNI+ZgdbyRZ82NNFhYdOEOJwG6mFLjcR/+vXp0OO8Q0xejAmuXJfN3iWrd2cvLp0HBgtB8TywWCRyeUILrNcPvUf//Pu/P2g0fv7zn/znT4HfJx8sxatBOTKz/cAtffe/1sHMJ9KJqZnpjWnl5G8BVGlFzb7m2jxkFEt6mNq1uA4/BDqvUIDW1qNCK4p6DRGoEGyzihOB3WWAielZrN1sCY3s35vKvAqT185tiElscAcrIXKRY7D68dJ5/KHctjqfuVRlAeqCQQ4KwLpMKmLyBKZGyVzqv/y74fFf/0tlZ2LgnGYJhIh6MiBHvzkPkna+LGveA2AezZ5JW5Fu6wHzohpDD9xwxiPGyuO8y/q263Jcq7cNz/E6QlSpLzxq9XDMltNhfrPuhI1HZCadxUWoEec2uGD0nOWdNMCiTF1gMo++GMsoYt2QCSU4yL2N9X93cfy31YWBc1oDDB7Y3GW/Cujgs6pp0J4Ps6HUqjIDw0bdYXWu+21qGszX3SYYFdegjUDTHI02dI26rhFoEa0LYXgVqTx+RCtCDZ1mrXAg2cqocxu6q5F5LPxyZ25q60J5JhEFkJQ47XaOiUo2Nh5cYPLfZ4nMKtyZmSUF0gAtaDK3aww+2zJVg5WReTR5GUCpQSAt6J7QdVGhJvV1u8pC8DaGaYH/8Wikt71xq+IKjwXCa3sILvWcTktEZhT2+oXfHiETuiWPHRmTsewGmbhcojRNJChzMYWDGHCISRrU6r8OIPkfUjxmZsbG4D/tSkG4OtgHEQuKYbRrDB+0lmyzcNypMlZ1OdfAyYKtFm1GNQ4Rduh4EGV7QhOtsu5Tl5tu0lVDLeqWGWiPURcQRoiwLqhF2/vfDj3y+8AkvbazQwYRnzw2dyRtG2Tats8xWZxbI8Z//J8Iyf+jKDtkYW09TQCTQsElfsP1WGdcPmC1YTALpmt2i9w+ZG4SjCo7tLluUYYCo/vMsBEU36maHQbaEnqOC+B5Zc6tvhB9i/aaqnEoRA9krRtVvQ6NHm6/Gzl5Mcdwve4AAsDQckNQ0JBMYQy0Jm1oDgVFEpa7e2tr4KR2C//vWgKIDFkG2rwLYW27EDhhvwFGQOdN0B6j2zVVUaMqizg8+Lq0sPTQTuo1yto2EBy3W+HcbfREQA8Coy2Ch5rTpbpoga/v667vU4qCBo6oAiTXq/XLzKqR+fSocxtgck2pWP7Fyq8rpWLpRbJMJtJLF1YWDEnqrnQfq1uL05i1XliZm5ya2iXrs/MbU1P3ltC2EHJvbBqXmYldDnXdYqZKde5IN1oxemAMqFnF4kkK/BdEhHZBNrombWKCireF7T6kFcejXkQ9rGrpg5VhgnOh87pPWblCaST8Zlj162EfeK5QyWlmxLnFYAzmlbhkod8UE6zObpBNcvfCoICkzKkLaxObMS649rWI0fLqzPADU3fV2cTO/cQYSBNoDreF64DWMJAIqT2tKvCKTyDwFwBHRG3M5EIUzAEg1ey5suiW24CaL0AayhS8jyjTznjFgs+HhZ5PzZrTwl8bwOkqIShTxamR8shzu3zcnOtlZ5YkI7nkeNDjgNpM7dzd2cIljXXQm03lztxwVUyR+YS11PymAsZEFALuRBoHT9PWbW6rqD0t1kEJoX3dBpg8DBmb4H107jPV2AMQbdeBAAoIrUdDp1sHQQmombQqHPTLNFqq2YG/BJpoBh2zH5YrrCIC9ujJaHO7NSagHGQ5QSbO4UDd2Z5UJmS26M66ktkjaxsp5YUjsQEOahPcsNsrcyxe6kMcwx3HLffQIVdBY7AOEJeE+B5KBmgV9XHKABpETjbYXuDxZc1sC4v5ICh7LBLVcV/Sm5ZRFRH8VnTCiHl9yzSB0DWb+6e3qRQbGRO47s6isnGef5WTn9tNLxGQntl7wF4hGiLLEy9Akp6ZUZYwWVYImYOYaBYDTxtEjgPBjQre04CJtwAmAMWrYKofGDt8lDdM1WzAj70Kd33aBAXSRKMKDrlKy3bboYio2TSbQlMtTXgVpx7WaqaJ7qgpfq3k3x0mryljQBTWz+kIxH8b82T1YikDF3h2Jy7wio+57aVF/HPULFCR9GXxEivrZT/ilgsep9yPNaWA5cYW2BVpYI2WnUTDY7ZRiDQOguKHQGtqKBI1uKLvFZDfdD3aEqILjjg8dLxQAxErC1Frioen18jJm0o04n0rw60xyqWdLvIvw10deH6+NSZe2ZmO55xaw6VQOBb2CJm7H8c+kzDqxEU1PuYQFuBTB5VCFFGYm4VJoi7MqVz29Q4PmFGBKEZwvcs8QCNiEA8hkTULNbCujJkMDA2t6+h6LGBtFgXVKNO+HbYlqwc/owrQG00rM6fy0ALLbAUCYuyv/qCMNjeJxsjxDtpnIBv3l5VJdMf3JCD3iXpXXcwDid0ld8n9vfm1JZJaPnfXyHXhCPVCFMLc7RATRDVq6L5V01XBe2Z3vF1och5BfJd0NSZLnOw+VZHBVoM6g5jHomBk6mqNguKohUjzWc2poCtHVk+pIypgei3qka//mrBa1QlMrV7Zv1E+9oX6kyuc7ZJkvW7fT2bxHnAvBW3KNgHisTOzCE42gWm2qXvnWrQsEyrzILSpDTQlpMF1z2oZ1HElwQCLGjhWN2JlDnYUKC2YVAiCKjov182GTEOB0+nqSVEbB1lx9UYEFgVjAIyHQ+BvNRHGmGhJWrBBowJhFZpk6sQVzXJoWnXa2f99drS5JW5Zu5VeG7u/DDZkHUBA/7qHzB1DoLGZ9IDEbi3DP/cmVibJ9tYG/KaFvwd34vZU6jiICTrT9njEnH7IQf/1tmEccl5joELIv3A/EJIX6XscPaRVPRJJ7gDlZT7YkqYQzIsKMlxqcNz/AL/0IOLp7o1lzkp1yqoN06yJH7LvI96Bj2zk7oFJWVpV5h5k0yuYTNpCxpJC44uYzKWlk7k4gJWoJpiKpN4wKESzMu/cM9qOQx2dJ1WDIstnke43GJiNRsswgdNLQTmEELqv621mYabbLQNMIcgH9R3mWQ9kZFWweZ9yiBArgEn7fjaRefYViB58Yaj9Q+Y91fhl4Ye1lWmiLGylsxNYmzRNMA5WJhCSvSlcI4RfLC/jv812iwV6pQdPHFhnFzDRJCZgZKMyh6km+YFB7Qgm29c1j1GhV+omCwEUHWtMkbgIIHQ9RIkLgKsGUwcbonqdAuYYWh34BOO2RzEyPvj/QDWUf5SpLRpp2lR+ZEwuZ/1HqrqbyKfJJJnIjmX/CdeNV7GULY0ysZbHjXFwMg3CAg/x1yDYAbgU6sntTqbpBtLGij7TXN7uAMHvmGAuImb0uF1WaUfXml2DgTcGj9TDIMjug/uR6pR0PQr8DPXO6XkHpLLXDFvw14DiJ7qYx/9HuHXliCAkltAe/vdbzE0eN4kJXthCBRK6sEDw/C8xZY11Oss7MtxJydwbWBpZxEX+yBswHb1NKxjMdWhLt8oSk5BJ7gp8zEMCq9dM6vAyBDqu3gTlCNEf91oqA9djCe4yKlcBAmr0hKBGw2l6fsFxHEEIMBeKtAbBIn+Nt3fyK5M1A2B2v/s6O+rchpi8yGtuUjmUXotXdb4l6IFkBDi7IdkIFvmhAZaYfFtEiwlyAuw0CdB0x8uWXMbygYjaLoskqQe4AgbyZIE7DsetTp+aGAp69JBVOFoUOMWqFu60DfBXYC1E1wtZo1bzGsQH1UJH3gFMCn8tkzzlQhedm0WOMqPO7W0wyWzGDP/sK7KL9RZz83hRKiWNC8SISxKShdNPKBgNu4cBXlKvgrMNg7icC8I5Dago5xDrJ3nSRW+sRVWzB6eOdD2gE23QqyQP0aJ0sYjDAYZTdhqGCpyspvYYbfYPQIpATkShIiKjUIZbGEv/LQHg4ccvn71XTLLTcSY+4VJyOb4Zi8nsnEy4ka3UbynIggPKgH4HzIoeux0NDILt6W4Ls4xUBz2iIAl2GABBG69bFu2h+SjUmxgEuR2dN6mDv4lYoeaAlxIdz2oKiJi8B66UE9esIJsL84BJ5gcSCOG36MNv3ysmibG7MsmWftzHGlkMkeXfVuXyF2oO0Dkyo/zOBAYKngK4qc0bEPn147o/Ue/rAIilwVPujYeBruLGwQqw2uq41R3vMh/3Vpoh7YEZ7gu9DKiC63GqrO10wah0al4Bl9nL7UAPGCZbgPGrtHKCSeNvyV6lTWnlk9tjIm3MqGXbmbgKK/29QwGFQbIEDQtmsBcJMJg72/fA+rIaB6+KT5m74B/1Co8xaVfGeyAeDtjPru4e6j3EpBxAxAy8xXboIa77MctAkyMqugDqAmbH8QpNBxRMVCp+wfdqZe1BAMQfNJB1hegV6hKT3xPVBEfd/emz7Mg1wxKf2/RwuNQk4VmxbQ52mcNB7uEnlY30JlibjRllFneB2RDjSguJXqUWY+JUK+PtiqxqUiuc90UDrajT1YFr2QCdRyN8+GENvbjedXUKhDWJGQNDAPsXtbpotSil3QOihQxgB18suoXqCdKNrwkzmtRg3xwp762Hw6UL8qdFIFxob/FrNs4r2+JjGmM/VB2ZGvFpAzzIAJNWf7xG5Xb+FsS/TqWL9gRiQp8dcjh1wVMlOW1qVAUoypZex5QThIgFGlSA3IfdiMjsSYf4NVDPllmF4Jj+/ASVYIOEQgRN+s3Xyohze5seDsqFGUryQ/PulXTk8MC0wu53SF9xRwL4D9AjO4ztCZBziGMiZLcN4P16FTHh3KuPt5nTAH3zQMD0KnUbEB0n3TaEibJ6X3SZVQEuYvWchkwVeBXSZK5LjbqAoOfTKcRkDrdnapHx1en7279zBZPvkl5hYQmrl85zsMMDAqGpZyVBTelI4VFb3PHjgvMAaFmZ1UB39EaZ27wmbSzQFLAm5WoF9QZ4jceA3CEFrto+c6X+dVi5w9rARSILgkBa1cSnKgWVon2hlSmRmPywL02W93fXdRZ5H5g8KWpgZe8SckcZ7mwfSMk8BkN5vY90DCZvY+YociQmoszKwD0bGlDYFkY9NSpZmUv74/1upQ3iUz1ErbMEbQJk5UADBUHlqbEysGKhsUA0DHTAIixQ16KFEIF+MJUFTH4Ri+JXP7tFDHjreEdiMnBXZ6XkXuuzGZUMFwOHxwaR28F+IEYXIYEJ9sA/2E68LYFGMBGI04DC+zBpcE2IiQ6qIqi3B7YkpAJYuzduIG0ToWPIKh8bQp8mrQEXgQAZ+KCmWX6jULGoTF2rD1BOjvaF0AKrQ75OjD632/dwuLScdFLSK43OSu4eGWw5VmIlukPIQkoqULw3EEJ6MKZlLjmbaDIH+D21IBJUYyoSs3eP4q5+5trAYkPOWWW8j9yG19yGjsA6FrUwYSCayNHMjuN0WkEPfG8Vt8bUPj3Jp059r9PtUVp4oLzXHg6XVC4DIk7+CGQ2Mbk8DCvxQyA4+ASyhNa5rOKiaFLLsduBwIb7wOpD4XLDB01pGjEmEaVe2GnVcJWwyXmvA2wNDUroVuMUis9AJsrA+faE8CirAYhCqxdIqx8E4GuU1KlT7rKCIWtA3msPh8uYPC265Ic5WaiUObexeQiTZ+JEU8HhcfmwaiddK3Y7Zdq1Q0yEaK5tgu7oRoxJkrcM2tnzwFHZlAq93dYh6gFN8kUNIQusyEBWrIkKBWAOTNOkvoggAmqRAnng/8OzP+xr4Ier4JOw59PIc3s3mGSPi3rvr5QVcpGVTkmOL9sEJQi2M8DJYmzMgyg2sTXmOR5iIlwb800ubSEpAWkKqdHsWpiZhUBwvFLRI2QoSRHJBULPivohVeU3tMFogNL0hcCynFYQ1rxHv/lGumEhWiCm+fe05nUNJkcl3ft7RZm8f16XImu64p+WyRe2tLABxYxJLd6b7hwy3/fAxoYaUAtwwoL14T+R9DxGLwiBoemHYEwqZaxEQUx9pH16x3LdegG0BfTGxH8bNHCCgiRvDihTwaQHPuYJWoYk17fGZOR450pXhcRJyQ0+w/Ppc80BLzw5SKaQr+Oa0K7ZA7NwqMcmllKnFoa0YGm2xMQH1lG2A6QrXVO1NYsFeoc1dM/FuBkXTUNQLVvHqr8GhHuYlEINqqsFWm/JiifwYVizIWuenH4hfibvrYfD1a4KufznoQ1++BJfmyGDvRpwsvK/SwgJ2lOgZP3YxPqM6o3Qowb4YknOwMM6lm7h5GuFHtcYKwOTZZic03DZB7yWL121D2qG9RYgJ4gJGORHvbgIjHlC9E15Vq+ST7/Ovc8eDi+VWT7tuw2ZRBmiskC25YphBgxt+kkRMQHTaaPoJ6XqeLTDaVihYBKAgwAmddyjzctSIMAb2yYLdQDOwYVBKSd6FeUEfVTEKGaMPJATCI484ZMYE1w578VVUpRUTjNys9N76uHwMibHP7VAVlcXh5Bs4w5bgCR3Hxc5Ppf74Ch6VJc60u24FRpGzGrQMmCC6168hdUn4HAlJnU7Al0CgQALdI7JHmLiUh98M4sAEyB5AQhLWDuMiNrCRH3TqUsxMchP/urkvfcreAGTs4dqALEx2Ysb0k0Ndq+ksBR/5rSE5sQ0YGKATNwqRgfl95hlgv8IdB/kxGXSZtQkJswLyjoYV96OF5AxX5vUZeYeMenQQ7DTomrKJUHLY67TJcBHjAYYVoMQQOQMM5AfFpOTT6hfletdMm+/jHuwQXWwzG1POS5ydLAUp9es63IfaRKm2TI8pOigImBjA2pIr+LKyMcKQ90WyGRbXOYm+QUmAZjYmpCLZqqIDBaEmGwxqi3VaNV6hcPf/K9/PpW3d1tMxsYuO5BbxjtwfF5t2Gtkd2JvD77rDpFZSeUeFmFsKbiZwFbBl2CtQCgxcSGuc2ijip6iqlvw7MMCRM7gm9CY1qno46ohML0WMl8Iq1HSJCYO00Cj0NlGFNh8mRoC62WB4vms1640Hz3PDTdS3nZut+xz8OJ57juLffO/t8lWDt3Nchz2LJM58MgbECHiFgQ0oXofpoiPmAMl8yk+b1GvJMvgdtusBpjYBlb4NZjdrmAqJQDTAdTNhdAxKb0T+iARgOWNq7f6TkXWcwV6XR3vmk0HCMrzVC6XGXFn09v3cFBe6qqQyD5J9iAEXiIz8/dxb3pOkrZN5S6ozmPwOrxB6zpWClAuK7d04OX9glqIRIVZLsS/Nq5dYIkWzNtlrfFqC+NiiKJlMop2JRqIic/g4ypyHOR7olXwQE4CboTgoGtOTdOef4geDtepavZZMWBkdY6sKgtjE2RBwbWMbXA/ZPukJOM6UzY8BGTQ7dhcLQS9hvEInjFFv2yDyUC3I1gFVaU23mU6XuUDRfEgZK6im6bSWVNeoTVQQFFmLABqbIk+JhccoD92jdbF8w/Yn+2q+TotccXc51cAABoGSURBVK+Ayxd3phbncQF5hszKsvPcMWLiYbIA/CiIgY3dyTSm+qwLZsHEJGqfAmMz4nxtFZfALF0u5tggH+iPeNjmWDsgwNBW1PEDdNBYdt9zQqaC9lEnNMCi+KBNzH9+7nE+NCaJYlK3ZCmOkppCOVm4Lxe/JpSnqDpqiGV7fYaKgGICjC00TVzzBtkXnc44Ot244gTMCHyqgYk53oGYpw44OqB4ekOmlNT6ON0DLXNFh1XAnED812T2YW280wHIa9pXPwoml6qwb9xVYSzzeZInjzfW5M6mifupOTIDxgQXv9Cc2BVZoMaMLsa3LudNZnVMirsKMN5vWxzL3DBfawImbUMHBudJ4xGBle3p3Ee2h6kCiBTH8U8yj2mJBohawEwHJCe0D7FSx3qt7txkbrfq4XDdkXuaTBafghvem5VumKyDwV0AsqI8xhSqbEvWNlnc3IE7dM/pAWsTdQMmJqpOQBv4F52aXc7Vvg6uu6pj0aPLHRQuwMdhrkzClZNwYstlEREhCiGthpjhrzCMgvw/5t9yKrfq4XDtIzguwrzzwObvYjQ6TSAw3pJx8dO4TVtSLzPViLfX8jIQVWa2BdBO8B2ahXX0sSQxT3fBa7umAZ+Ve09d9EigeHH2xKSRq2HmAchsWViAgmjSWrWuy0IvCAnL/5L+AD0crsfk7LdOsnSGK2u7gMzcnDLcNPizYowDmFVZEoziUKVaWChg+RluuwGS0qKaxKoAZkTAQ8eaWWz7jeWPhlwuSzo2l8vO7mCvLhAX8MKyVjBk/rjH+k3V1cSjV2By47m9Q0xOfufz4vey9h7Cv7n81HDf0+ZXsiWzRg2wFbGcuLTjVEyI4/qmETKNRgGTqsM7pmHbflXHzQd00PYbMEEJsTlmDZqYhYx/7etJtwIWtgGYMdtjDZd13Mghf//xYJImcOefy0BjY07JKYvD/bZjpOLoWJunDhv7AYn1nZ7ZFH3DrEe03K2F0qLC9M2Ozi0La7Eg8B+0vKNDdGTZDuiRrkt84IsqAYiJ0a3UPTA6gpZdrUx+89aYSP42ap+DxMvxjpJ+0NTBz+JXK1hkvX53mEvZKbAeBVuCO2rlE9Y7vSSQLc8HbbI00+u36pK+ABK4eBHg1hTcwmIP7DENhnvbm8Bqdds7qIVxbyJfk2LS6FOgNGXm2qJa+Nfs++/h8Irz/G+IF7j7R9KubuaVtbjNSUrumjQKFJyCM3jcOgSCmDesmAaY2Ua5zExVoNnss8O+g/u0dawZZ5qcNwAlhmJCzY4juzuTppdEw+uEEAhqvR4mtJtt3Ua+c/IBejhcQvTSI1D+hVB49v8waKKgLE0OttduEZU1w3I5ElFsHuHJC4h3WsKQjqId+czoCBfmuEfDVsMCQZKbJ1k4WDukw03+h4bRIWRpfmZj7j6pIWR206BBYJiHWKUvkOSF+yfvv4fDK1Q19TysMoN9gzt7sbBjJS8xkfV+vo7xSaA5MSZYQKPSfsQQEy3UNJOFwpF5fR8Mhs3LuNFJNaoSkzIbmFVcHlKxsDKzMTGT3iTElYoVgkfGtaC9DghOxRe4aefj4PZjqadJPTik5C+HXzn4731C/hFuFn0mrgzj3CpdEARqASenAEikAcPwAS9g8WGd9XUETVV7qkolsxkUxtpJ+4GBhXIb8caYpXukr2PMqIkuE7grGymdo2n7Zx8PJk+KNraxJ8O9O/EfIeaZPSslXczTlzWpPHqjMl7GRSstbH4pl6eqIC9YwWVoBdk4040TzZLu8xqVdgi3DpKlqeldEm/WJcvbBFcPdTdQHd0ygOgBhIDJT4/eQ8+6N2IiL8hj6ghExYzfmzJc1piHAOikmHSiPaOlxcpjM2+8jrUikXDCuNiPapoLoZ/vsaYsLAYv1Yx9N+eHTSlcbocSdXM5RgQbkOaVWSINMtD/KsUQEmyuW26R4xHinXfSwyFz+fzyBbm05KtuGDf2Gx7bGCM/TkIAa+IylaypKYQcnApu9rLi5a8qg1jZZp0kleVabsU0G1W0wABQJGMkPSoUyO78cE/DvTmccI48wNYquk9Nhu8w4XrUpfTLJ6krLRl+/B4OqVfxk0z2qeRjkUlmL2Gyhn3+nhSRimCVPTItYGyCtsb9mtB6kVz/6tFAcK8KDAN9jd1gaiEEZywrJQ8N/FaP7JIduLOZ6cmN6alYOXFxvoybaZkp85ZYwMQ6gXievWVP3Vv3cHilWGbmvrFx02vbwNKkISZLaF/Oii1DxYoZzQXu0aFuiKlq4PZmGWQH165wAZTj/llMpXUNWvNM3AWICRULHv+nny2D+1raWpldXt6eGSCC/cFbtg5EFhthoDE2sZuB9jzzsXD7TGKGtIRMDqqX6guWSUJJnfgF1ezKpS7QDNodrzPcnOMJtSJEp8VUE0tgMUrEvW52lTZcasjNBxHrjrseWVHurxH1XHMms0p2ci2LS9GhoKwX6SAkTYgnOzr4sUdTQ1r6wTEZS8tyJBtCWvKvxyeDh7lC8D8Nw2hF8TsRgKwGnOG7JGjVaVUdXPM2K3KZGPcrOTL15ELgzyx4+L2GWyafTc/sYsMiecQWVvZM2CTqDjnERWhbj6gpO2A72gGZeZeYvJhjGA2TxMl/w3yr7oE52C99n0/hH6YXYt7G5P4UzQVR78CsXVyaoE63KyQ76yFxwR3FJhoPYduYWNWTutbxSGETDPXaPBlTZia3l+8OhWVlYhckZ6HQd4HR6bhPUMWGD05Eydh1mNx4brfo4fByVdv5BennLZNVXN7GHh2lx7GoYMZgl7DOYN9BjfZcbsULNVTrPLJwMghlEttYGLjgAewMphiNc6f8JfliU0msYdXGwqApXHZ6cXNuc31tV9bzby2FceEBfAkN4cyuFf41nXnlq4x+pB4O8SN4Kd7BC45KTUqN0PFrZZcX+amUFCz1KxzETtczqeHIhgyYa6WOZ2FpBPNscMU6mhMZHuvjXsMCPMhn69hlk5CN9Fh2kQxahcIxP9idujatrP4lXGAzg6KZRhrDCn933WLlj9nD4XUmPZUv8grcHusA73B4sXgWhzwr6uRTLKYKGqzQwzu38R1XHuiOI5pAQzwuQ1xmmJ1xzp0gxO6fX6zPzyhTqRz285K3hGsCMk21FduV2fmNuXSKzH9f1NFx2eiNwWeZ5BcfDbeXFzwv6v4eNQza8wCUZOkYWzykl7PK0UMt9BsGa8cPE6l63WSubOZRjSO8BqATfnNACFvdwldATeEa0dQqljvhaOkV1BWIALMbd2ZmpnL5zfsE37cwc1K0aUUijaEUNSvOx4RJSjkuwSMPKQNH2rAcO1l6fJbC92fA7FoM1y3iRBtWTXPVKGD3Ldmogetun+F2n+W5SbyN1QVleg9LnHbJ3OpgB9VE7HLWpL5PY78RsDBzO5nMk4dxCSF8W5saZu2THwmTW72KIqWclnCVAVBBWalgeFN6fCS/iECQVok7EIMd5LI3g+yTQ8vjPPKaFCCZjc3bujJHFjbwf2tL5M7sneFbtXcGjvje2pJ0x9hf8d5aOnG6L3tsyi10h1XW2x9W49xybrfp4fDi602z5xco+TgHrTthg5mmEWIgXEw+AWFZIodCG+SUAk/u9DOq45FDq0DJKIMp7m0qyh0lNTW/t0hmCfKR9fzKvLI2LF1Mby0sX6Inq1h6myPzmUTuadEWbhSqdd/Vx2v04dng9pRbze12PRxencLKPI8XLlxNWHXKWKveDy1fK+lPf1PwhTZArOPLGh0IZSsuDeC53yXbi7jtZ5NklsHHksVtMr+5egfbSW7MJIajTZCs7CuJ+K3FbTXmsT9v7qiEyeuaq4PTGq/Qb55cudX308Ph1WKZPS7KrrE2tsHFd2pi00ZK626xVQgHabakjXkR3HHg2yYPeoV7IBbruySNbyKRG3Lv5Nc2conBXWbPR8PmCMrU/OLi5Ewc7mwos8vSMMDX2UDd0C5ZtHHwD4P9KS8var/HPU0Xqnr6UEjlFrJqV0RW6IVW5HK7TyrCHlhY2UQKAj1hs6BAdlZmQEC2dldVdWp1Nr2bTmcTY9lrRktv3R88zhivbbKiyl6k2T9gC1Jugxdvsa5G90+Hn7vN3N45JmOENnGPRZ3VtWHbZPk+PLfQGfST5Y0ql66X2bxJv5RvQc4ncnfUrTSS3jzYu7FrR8tMk8Xp6TsT2wQNY2aJqNsyf5XLHpX8ToOhSLKOLdhP//BRYQJxsAGoAGOnTe3yoTfrgwWvQK6Q6obZ1kXjq+OhNGNj7tePlk0PWhTFpge43DQBAoQ9/0u6HXntRq/u43b0tnPyVphcT9JHsrFXaPPRT4CF4TuuVbNnDVpso7A4UTfOvuvNOM2KRdWu+CZ/PlrijaNlZEumZbC9iaWF9e07YGI/jy/YadXDgI9jE1+MGfb/9qWL30sPh1cMd1KqDQwrNWnTwzxSAEal3+kQGd5hiQQKjKA0gl/8VW6k0cD14s8bQPh3FkFYHhSPJJT/TBh4uaqF/ZrL1Gx/it5qhHjnnfVwuFYss4/h6QvHAb5Qh3iXATIAEcQjfRI7nb2431iZGnbgFL9Pj40yWrzgukVkJe5qZvNT/l0GleD0m2rU6dFmwGXPFIP8TeYj4fYSk+NSkjvYqBt79ffx1d8gNa2y4xcwu6p35Bt9k3qXtcdbYfJJeqTRpsi0ko6bbML/q8sHeulraRhkCS6MCqDjehn5P+mPCJPEFDAUi7a8yL3wxr4jwkYTS+bLDDPztu0UWHncpA+fjCYnyupadg+D4tUF2QGtZxefZhETWTTnCq6PhxBWqOavTj8mTDLPIeZ1uhAH9n0x9MahysxCGdOrmF2USs/AFZnkh9xoo8kXY+3Eu1NnVojBk0WJyTPcDQMy2akzs9U0jJ8fZT/Ee2lfYdITRyUMA30VLEnbl/QkbMnWuVUdo+BavPfaNLA5OVl5lY191WhkaXnQWz83PbPQ1O3SKWJysi+4awnXKbOq7TD1099nb7+GLvG5bQ+HQXh16QK4GONA28aWT9Rkdc+rGww03GSkwbvUbMVFJS0sHnYpmVVGGy29tbOwc/fe1voKcJXUPWInS6d4QfYxMfDVANxuyu2pnx4pqVvPLfFKJZDXDRCNr8PjjakJTKLItW8d1/5MkxomK5i9jv+ggMl4WVOSlMXDSb0yeKXEzUfDLl/DQ13ZLVi8dILTynxvdWu+HRf02Mz75lvldQr+utHeOY/Fi1PDqiJd1LEVe6ccaA5oUE816OAdTq5JI4yKyM9SI46WIHMz83NbS7sLuyszhcBNluQFQO+RFHV8F3hbzZe1QR8Lt5cXH5diGm9z168c+MIpVxtm2CkwNRoW6PUYypJ+8EN+xNHS9y7aZ9zBFyA9HpR2JqvVtgqwNOuVQHc+NkxSCvbVjhOk0sZWGFbVe83QPn/pSr0hiyH943xqREy2d88xWXwAbudJfHHmu7DqcnxtQN+PbGf/7C0weauY4FUm/ajk+lhBDqothN/AvpWBpuFrFAeQ8LAma0pKz/IjjpadJ+eYrD3Sk6Wz+OLsscsgWtB1UWOspcl0wW3n9k56OLx4ce47rGvselYQhF0KFAprCvxCePGSIi2uHi6djToaMJQBIillAVPeicHFZyUspbSx+5+wov2x84s/UA+HxFWTPpY+K2ENDcNAxwDLWkf2FhQeXbwkb/DCotLpyKNtkOHe1BwBwXueHT7wErcDXwCbtcqu2L9BvPOq0d6EifzD6JiknhZlj3oAxDD34sqbgByc6w6ERPKkdDLyaBe6s0HA6xwNMck/Rk+n2wFGWNYvPqYYMMZEOS1BROZ6DdrqduMcSiAq9RdfgMaTqZFH29wb3vT2z+H7ztMu+SfFpFsDZ4zHw19/hJgoT2X+iLs8SMaQ1EVvuH3g4ng8+mgr94b12aseLz7JnGMCIU8kDbvrJPd/+Q4wGTneudLD4RqTLvdZx7Ig9xNXGk6z0NFlUl+XL/zC47vRR1OHHdPRnJROEwMHksqdleIXzLmUNgCTNzrHH7mHw4sXwHn6afFcQ4QmLNp0+oUDaVnddjTYn1H8Pj3iaOmJ+J2vCjYKtJPfpS4uzoBdd7ncHMYe/SF17e291x4OL5v0c0HBFTCtxzrC6uhlFBC9hS9QwSqc4nF2xNFyS8vDYrblPi+dXVyQyRf1Dus6chfhwR9i8brN3H4cbi8vyHyXvHhVYNdklvAKgXTGQK6qkuVy91l2tNGyM4NdQRDokoDbly7IpLgFMWcP09RdwCT1UXF7ZRiVDSkatjGpCL9KKtKeJLECB82K9bujxGijpdcHXielzBG9dHwVEx7VKcONce7DJ2+Ukw+BSSLzeWxRZDOYmhDNRr9+6c3GuIr+4HRETDJk+LJG5bOQF0+uYJKUr3RCk+Xs//A2chJT/He1hn7ZpGeflQYmljaicaC1aqEp5UTX49ZzPYPMJEYaLTtJhtVm88QtPs1fugDsCaijbmkSk28vLv5gPRyuvQDlxMbVC3/crVC11yw4SGE7DQvlxaUGORltNGVlNX6g4IhDcMRXLoi7rEiPBpiMeKuXz5WhWN6KnygDsbz+EeTjlkFVqjIVrB+z+jIyxk5JciWwXHhwMuJoe5sDTFY+5cXnVx/40bmj42L/99nzEo2R53aOyQuG4a15LF6MVUvYiMDEt2TWI5cSGQ1zIesbk3ahdaPR8rJgFc+zw72o85KvXRlNPoHBIfanXmP0Phi3x4uzj7GFC212auXI1fW6WfDiBJyLPQh0rdB942ip1Nlj+/PHT4/PTsdOzn6BHYlSSNfKevG7q6OlHl9gokWvcwQfFpPjEo8EvnAXq2VCprZqg3ILDj90TWyn/SZMTkow1WKxBP8pllxZWzGzTCzdRr52ebSTC46Y1H6deceYjF267kb5k0sXXKWIJ8V4s1vseVWVxQEPOs0QX/XunbxxtGFuNyY6dbo2+xk5ELrsjXAxWgp7A5xDYu//kH0FJjeZ2zvr4XDtkfnFBRuJ8B0pnXOColdNlf709E3fkPv+YqqY9S4/+sZydHQu5y5rcPCizMvEmBzlrv+6Gx3vrofDdY9g49Lrv8GcUL98/jOWyLOfniXeMFr2+WVMMPUtk9+gOdnLo41lnn6CFYQublNOuvvX1OTceG4/Jo8FVV23LjDhgnUfEM7PZwe68/CN8U72yRVMhgem1xKXSvYyT0q4N8jFdjOAiZN/GZMbz+1HxmTJu5RZ452o1xzqjuxIQLUnb8Ikcdl0niOin6UTF5jksmPPS7gPhmPfN6Sxv1A+Xkw+61/ONvKo4J3bE35osF7y+Rvj4uxZEmuzk3HwCP8HLuhJ7mI0XP49TsrWgK472Jjq/OEVtaAjxDvvpIfDyxQxnSDtK5i0ybkuYclw20k+zr5xtOzY8eclcMVFdMhwPD3OXR4tlT92P4kzvo7QsOrUTn5ydPlWP2APh5cvyE2SuKtJcuCAG0Rc2NgkLuzqmZvEIbn02bNjOJ6dnZ7k8he/z6TzJ99/sj+sJNTiTagCl9VvHOlcMzflJg98pPqTi0eALzyLfWOcfrXVlm5fEhtwz6XczUaT5P7l0XJPSqAvlUbgy73bWgFfdgTSd/Pg/X3HO8pujIleq8X5tUJ4ZTED9OeT07ca7QkQuvIj0vIbLZSVg6bchVk6/oj277yAyRgxUHdsF1v02TYPCuKK+9A77JOzEevZrox2WtKtB6RatnuFyHW0g0IZnU+y9Ia9Kh8SkzWC7X94MmJGA7THLlSuigk3jdJbYXJc9AudiOsdgrvegi8jFxeQsKnTO8fkRUJ6sx4OL1LE/A+4gVbuR6DUw1c1F8r2FUwi1i1exWTE0Y6LB2WIL10w3dzmHu72wMWAk9f08bvJaO+wh8Pl85Nn37lfUtOQ6y02xUqzGmlcgSRpHzK/ePQWo6We7Rcc0MlQrrkiMshjSscvtGT4kD0cLi5OfV8qOlrY7eB7yx2bd7GhTaHpXl0u5pHPS0dvMVri5MsmbhatY2TJ/UIEelosPUFZGIjXbeb2Tns4yB9kndJz7HeiiSFvcH14fJ2ObmMVsSNFR4Y98M8FJrcZLf03n2CF5ZcREjXx1TiQOjt+HeA1Knfjuf0o3P64xG3HdUQ03KeCvcUKgTv80XHPa7hKZ6PWs10xlqljZLa/xk2HxeOT/MnZWS77ZtP83jFJYe17rBvuEBWQiILqXN7NIxxXpjpKp281Wlo5OTs6AWSKT4ZZ2Rs5x1EwedGBjNjDIb74IpLVbUAlQsrgk6+E9sLhAHbFtx4NL8ieJLIjO8f31MMBL8jnT4YZD14GF+wCZ7D1eu1FRDA8cW37rUeT55lrL/44ejhIk575DgwetrtxYpJmc9cqCKweci5FatLO3Lj+5AbR1Sib0V4/2hCTl8zXW/DY0xL3HekdXdlDICAk5E7ZAaaC/U4Bmki+hNXlxSfvcJXg5qb5A3D7zHHpUQEoQ1Rw5PJwte/q/KBg8yiMdUrv1F0HWw+Xnv3fggmA8hXBFGB9XPJVpN5+IbD1r0g5brVWGOSWSm9c3/mYMLlVD4fhXSbykw+L+J6HR3K56o92Uq/hK9uafZlI4Q6JK6qLj4cXvNVob5kgfRmTd9rD4eKCk8elJP/dvzx9/Pnz0yM4rWHbhge+hELvDZa+sD3KOxkNz4eP/VWbjD5YD4eLkDN79F1SdmJOYWUbL2PLk0cxJphbkpgUxxLvZrTXuqsP3cMhcaGq4PTju0xkvy/x4Ct899TP494tD4iMYGVx64+pBC+p3Ifp4XDtXWafFEvfgbBEcXE5fxj7n+LYxV2+w9Feg8nHsL4zvMvs2GnqWbG4/384Vgfop6dgS0rFo+yPM9qfBiby4pPjx/nT70qPj8fApp2cnJ1kf7TR/jQwScSvkAeJyWbHUvL8Rx3tbTD5/wHmmtj8ZVcI6gAAAABJRU5ErkJggg=="
        endGame()
 }
    let age = document.getElementById("age");
 
    age.innerHTML = `Age: ${pet.age}`
 
 }, 5000);

 
 
 
 
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

 

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
         
