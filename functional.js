var pen = function (spec) {
	var that = {};

	that.get_color = function () {
		return spec.color;
	}

	return that;
}

var blue_pen = pen({color: "blue"});

print(blue_pen.get_color());
print(blue_pen.color);

var yellow_pen = function (spec) {
	spec.color = "yellow";
	var that = pen(spec);

	that.get_size = function () {
		return spec.size;
	}

	return that;
}

var pen2 = yellow_pen({size:1});

print(pen2.prototype);
print(pen2.__proto__ === pen)
print(pen2.__proto__ === pen.prototype)
print(pen2.get_size());
print(pen2.get_color());
print(pen2.size);
//属性私有化
//可以写成function a(){}; that.a = a;的形式，如果that.a的值被改变也不会影响到其他方法调用a()