
var myNamespace = (function () {
	var myPrivateVar, myPrivateMethod;

	// A private counter var
	myPrivateVar = 0;

	// A private function which logs any arguments
	myPrivateMethod = function (foo) {
		console.log (foo);
	};

	return {
		// A public var
		myPublicVar: "foo",

		// a public function utilizing privates
		myPublicFunction: function (bar) {
			// increment our private counter
			myPrivateVar++;

			// call private method using bar
			myPrivateMethod (bar);
		}
	};
})();