//Method Invocation Pattern
var newObject = {value: 1};

newObject.a = function () {
	print(this.value);
}

newObject.a();

//Function Invocation Pattern
// var value = 2;

newObject.b = function () {
	var c = function () {
		print(this.value);
	};

	c();
};

newObject.b();

newObject.d = function () {
	return function () {
		print(this.value);
	};
}();

newObject.d();

newObject.e = function () {
	var that = this;

	var f = function () {
		print(that.value);
	};

	f();
};

//Constructor Invocation Pattern
var aObject = function(status) {
	this.status = status;
};
var thatObject = new aObject(2);
aObject.prototype.g = function () {
	print(this.status)
}

//Apply Invovation Pattern
var newValue = 5;
var h = function (value, value2) {
	print(this.newValue);
	print(value);
	print(value2);
};
h.apply({newValue:7}, [8, 9]);