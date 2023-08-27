/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here


// constructor = special method for assigning properties. Automatically called when creating an object

class BaseSignal {
    constructor(type) {
        this.type = type;
    }
    send() {
        console.log("Sending " + this.type + " signal");
    }
}

class TvSignal extends BaseSignal {
    constructor(type){
        // Add code here 
        type = "tv";
        super(type);
    }
}

class AirconSignal extends BaseSignal {
    constructor(type){
        // Add code here
        type = "aircon";
        super(type);
    }
}

class DoorSignal extends BaseSignal {
    constructor(type){
        // Add code here
        type = "door";
        super(type);
    }
}

const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"