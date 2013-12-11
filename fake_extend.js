// var AObject = function(){}
// AObject.prototype = {
	//...
	// constructor: this // this is function(){}
	//...
// }

//new AObject(); 一般返回that
// Function.method("new", function () {
// 	var that = Object.create(AObject.prototype);
// 	var other = AObject.apply(that, arguments);
// 	return (typeof other === "object" && other) || that;
// });

var Pen = function (color) {
	this.color = color;
}

Pen.prototype.get_color = function () {
	return this.color;
}
//总之有两个特点：1.如果在prototpye里增加函数，所有new出的对象都可以使用
//2.在构造函数里可以写this.xxx = xxx;然后可以在其他prototype里的函数里使用

var bluePen = new Pen("blue");//创建一个对象,该对象隐式链接到Pen.prototype
bluePen.get_blue_color = function () {
	if (this.hasOwnProperty(this.color)) {
		return this.color;
	}
	return undefined;
}

// print(bluePen.prototype)
print(bluePen.__proto__ === Pen);
print(bluePen.__proto__ === Pen.prototype);
print(bluePen.color);
print(bluePen.get_color());
print(bluePen.get_blue_color());
//缺点：1.没有私有变量 2.如果忘记写new将会发生错误