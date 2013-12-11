var blue_pen = {
	size : 1,
	color : "blue",
	get_size : function () {
		return this.size;
	},
	get_color : function () {
		return this.color;
	}
}

// print(blue_pen.get_size());

var yellow_pen = Object.create(blue_pen);
// green_pen = new blue_pen();
yellow_pen.color = "yellow";

// print(yellow_pen.prototype)
print(yellow_pen.__proto__ === blue_pen);
print(yellow_pen.__proto__ === blue_pen.prototype);
print(yellow_pen.get_color());
//特点：可以基于已创建了的对象进行集成
3->1->2
var green_pen = {};
green_pen.__proto__ = blue_pen;
green_pen.color = "green";

print(green_pen.get_color());