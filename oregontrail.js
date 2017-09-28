(function () {
    var yummyFoo = function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    };
    var Traveler = /** @class */ (function () {
        function Traveler(name, isHealthy, food) {
            this.name = name;
            this.isHealthy = true;
            this.food = food;
        }
        Traveler.prototype.hunt = function () {
            if ((Math.floor((Math.random()) * 10)) == 0) {
                return this.food += 100;
            }
            else {
                return this.food;
            }
        };
        Traveler.prototype.eat = function () {
            //requirements were 20 but I changed it to 50 because not enough people were getting sick
            if (this.food > 50) {
                this.food -= 20;
                return true;
            }
            else {
                this.isHealthy = false;
                return false;
            }
        };
        return Traveler;
    }());
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            if (passengerArray === void 0) { passengerArray = []; }
            this.passengerArray = [];
            this.capacity = capacity;
            this.passengerArray = [];
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.capacity > this.passengerArray.length) {
                this.passengerArray.push(traveler);
                return "" + traveler.name;
            }
            else {
                return "not added";
            }
        };
        Wagon.prototype.getFood = function () {
            var totalFood = 0;
            //because the wagon starts as being empty
            for (var i = 0; i < this.passengerArray.length; i++) {
                totalFood = totalFood + this.passengerArray[i].food;
            }
            return totalFood;
        };
        Wagon.prototype.isQuarantined = function () {
            // console.log("passed array" + JSON.stringify(this.passengerArray))
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy === false) {
                    //someone is sick so - it is true that they are sick
                    return true;
                }
            }
            return false;
        };
        return Wagon;
    }());
    var lady = new Traveler("Agatha", true, yummyFoo());
    var tramp = new Traveler("Georgia", true, yummyFoo());
    var maiden = new Traveler("Kimberly", true, yummyFoo());
    var wench = new Traveler("Chloe", true, yummyFoo());
    var stranger = new Traveler("Vicky", true, yummyFoo());
    var cadillac = new Wagon(4, []);
    var happyTravelers = [lady, tramp, maiden, wench, stranger];
    console.log();
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log();
    console.log("Welcome to the Oregon Trail!");
    console.log();
    console.log();
    console.log("Five healthy women travel from their homes for a new adventure. They have a bit of a walk to get to the meeting point for the cadillac and there is limited space... They each are starting out with a different amount of bananas:");
    console.log();
    happyTravelers.forEach(function (arrayItem) {
        var x = arrayItem.name;
        var y = arrayItem.food;
        console.log("       " + x + " has " + y + " bananas");
    });
    console.log();
    console.log("On their way to to the meeting point " + maiden.name + ", " + wench.name + " and " + stranger.name + " decided to eat some of their provisions. They all look sick by the time they show up to the meeting point. For " + maiden.name + " it's " + maiden.eat() + ", for " + wench.name + " it's " + wench.eat() + ", and for For " + stranger.name + " it's " + stranger.eat() + ".");
    console.log();
    console.log("The other two went foraging. " + tramp.name + " now has " + tramp.hunt() + " bananas while " + lady.name + " now has " + lady.hunt() + " bananas.");
    // console.log(happyTravelers);
    console.log();
    console.log();
    console.log("This cadillac is super dope. Too bad only " + cadillac.capacity + " people will fit.");
    console.log();
    console.log("I'm pretty choosy about who I ride with... I have decided to bring:");
    happyTravelers.forEach(function (traveler, index) {
        if (Math.random() > .5) {
            console.log("   " + cadillac.addPassenger(traveler));
        }
    });
    // console.log(`I am going to bring ${cadillac.passengerArray }`);
    console.log();
    console.log("Total bananas onboard: " + cadillac.getFood());
    console.log();
    console.log();
    console.log("Finally, before they leave to get the go ahead that everyone is healthy... If they are they can leave. ");
    console.log();
    console.log();
    console.log("They just got the results back. So are they going are they all healthy???  " + cadillac.isQuarantined() + "!");
    console.log();
    console.log();
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    // console.log(happyTravelers, cadillac);
})();
