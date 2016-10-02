// Each of the following options will create a new empty object
var newObject = {};
var newObject = Object.create (Object.prototype);
var newObject = new Object ();

// ECMAScript 3 compatible approaches

// Dot syntax
// set
newObject.someKey = "Hello World";
// get
var value = newObject.someKey;

// Square bracket syntax
// set
newObject["someKey"] = "Hello World";
// get
var value = newObject["someKey"];

// ECMAScript 5 only compatible approaches

// Object.defineProperty syntax
// set
Object.defineProperty(newObject, "someKey", {
	value: "for more control of the property's behavior",
	writable: true,
	enumerable: true,
	configurable: true
});
// short-hand set
var defineProp = function (obj, key, value){
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	};
	Object.defineProperty (obj, key, config);
}
// to use, we then create a new empty "person object"
var person = Object.create (Object.prototype);
// populate the object with properties
defineProp (person, "car", "Delorean");
defineProp (person, "dateOfBirth", "1981");
defineProp (person, "hasBeard", false);
console.log (person);
// Outputs: { car: 'Delorean', dateOfBirth: '1981', hasBeard: false }

// Object.defineProperties syntax
// set
Object.defineProperties (newObject, {
	"someKey": {
		value: "Hello World",
		writable: true
	},
	"anotherKey": {
		value: "Foo bar",
		writable: false
	}
});

// defined properties can be get'd using the bracket or dot syntaxes

function Car (model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function () {
		return this.model + " has done " + this.miles + " miles";
	};
}

// Usage:

// We can create new instances of the car
var civic = new Car ('Honda Civic', 2009, 20000);
var mondeo = new Car ('Ford Mondeo', 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());


// Constructors with Prototypes

function Boat (model, year, leagues) {
	this.model = model;
	this.year = year;
	this.leagues = leagues;
}

Boat.prototype.toString = function () {
	return this.model + " has done " + this.leagues + " leagues";
};

var sailBoat = new Boat ("sail boat", 1995, 14000);
var cruiseShip = new Boat ("cruise ship", 2014, 2098);

console.log (sailBoat.toString());
console.log(cruiseShip.toString());

