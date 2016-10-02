var myReavealingModule = (function () {
	var privateVar = "Ben Cherry";
	var publicVar = "Hey there!";

	function privateFunction () {
		console.log("Name: " + privateVar);
	}

	function publicSetName (strName) {
		privateVar = strName;
	}

	function publicGetName () {
		privateFunction();
	}

	// Reveal public pointers to private functions and properties
	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	};
})();

myReavealingModule.setName("Paul Kinlan");
myReavealingModule.getName();
console.log(myReavealingModule.greeting);