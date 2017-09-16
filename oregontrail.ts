(function () {

    const yummyFoo = function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }

    interface ITraveler {
        name: string;
        isHealthy: boolean;
        food: number;
        hunt(): number;
        eat(): boolean;

    }
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];
        addPassenger(traveler: Traveler): string;
        isQuarantined(): boolean;
        getFood(): number;
    }

    class Traveler implements ITraveler {
        name: string;
        isHealthy: boolean;
        food: number;

        constructor(name: string, isHealthy: boolean, food: number) {
            this.name = name;
            this.isHealthy = true;
            this.food = food;
        }

        hunt() {
            if ((Math.floor((Math.random()) * 2)) == 0) {
                return this.food += 100
            } else {
                return this.food
            }
        }

        eat() {
            //requirements were 20 but I changed it to 50 because not enough people were getting sick
            if (this.food > 50) {
                this.food -= 20
                return this.isHealthy
            } else {

            return false
            }
        }

    }



    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[] = [];
       
        constructor(capacity: number, passengerArray = []) {
            this.capacity = capacity;
            this.passengerArray = [];

        }

        addPassenger(traveler: Traveler): string {
            if (this.capacity > this.passengerArray.length) {
                this.passengerArray.push(traveler);
                return `${traveler.name}`;
            } else {
                return "not added";
            }
        }

        isQuarantined(): boolean {
            for (let i=0; i < this.passengerArray.length; i++) {
                if(this.passengerArray[i].isHealthy == false) {
                    //someone is sick so - it is true that they are sick
                    return true;
                }
            }
            return false;
     
        }

        getFood(): number {
            let totalFood = 0;
            //because the wagon starts as being empty
            for (let i = 0; i < this.passengerArray.length; i ++) {
                totalFood = totalFood + this.passengerArray[i].food;
                
            }
           return totalFood
        }

        // lottery(passengerArray, wagon) {
        //     passengerArray.forEach(function () {
        //         if (Math.floor(Math.random() * 2) == 0) {
        //             wagon.addPassenger;
        //         } else {
        //             return "better luck next time BITCH";
        //         }
        //     })
        // }
}


let lady = new Traveler("Agatha", true, yummyFoo());
let tramp = new Traveler("Georgia", true, yummyFoo());
let maiden = new Traveler("Kimberly", true, yummyFoo());
let wench = new Traveler("Chloe", true, yummyFoo());
let stranger = new Traveler("Vicky", true, yummyFoo());

let cadillac = new Wagon(4, []);

let happyTravelers = [lady, tramp, maiden, wench, stranger];





console.log()
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log()
console.log("Welcome to the Oregon Trail!")
console.log()
console.log()


console.log("Five healthy women travel from their homes for a new adventure. They have a bit of a walk to get to the meeting point for the cadillac and there is limited space... They each are starting out with a different amount of bananas:")

console.log()
happyTravelers.forEach(function (arrayItem) {
    var x = arrayItem.name;
    var y = arrayItem.food;

    console.log("       " + x + " has " + y + " bananas");

});

console.log()
console.log(`On their way to to the meeting point ${maiden.name}, ${wench.name} and ${stranger.name} decided to eat some of their provisions. They all look sick by the time they show up to the meeting point. For ${maiden.name} it's ${maiden.eat()}, for ${wench.name} it's ${wench.eat()}, and for For ${stranger.name} it's ${stranger.eat()}.`);
console.log()
console.log(`The other two went foraging. ${tramp.name} now has ${tramp.hunt()} bananas while ${lady.name} now has ${lady.hunt()} bananas.`);


// console.log(happyTravelers);
console.log()
console.log()
console.log(`This cadillac is super dope. Too bad only ${cadillac.capacity} people will fit.`)



console.log()

console.log("I'm pretty choosy about who I ride with... I have decided to bring:")

happyTravelers.forEach(function (traveler, index) {
    if (Math.random() > .5) {
        console.log(`   ${cadillac.addPassenger(traveler)}`)
    }
});

// console.log(`I am going to bring ${cadillac.passengerArray }`);

console.log();

console.log(`Total bananas onboard: ${cadillac.getFood()}`);
console.log();
console.log();
console.log("Finally, before they leave to get the go ahead that everyone is healthy... If they are they can leave. ");
console.log();
console.log();
console.log(`They just got the results back. So are they going are they all healthy???  ${cadillac.isQuarantined()}!`);




console.log();
console.log();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    // console.log(happyTravelers, cadillac);
       

    
    })();
