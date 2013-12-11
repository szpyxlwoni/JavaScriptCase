//closure
var f = function () {
	var a = {
		password : 1
	}

	return function () {
		print(a.password)
	}
}();

f();

//curry
var add = function (x) {
	x = x + 1;
	return function(y) {
		print(x + y);
	}
}
var add3 = add(3);
add3(4);