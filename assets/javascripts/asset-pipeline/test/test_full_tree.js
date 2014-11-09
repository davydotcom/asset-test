//=require_self
//=require_full_tree libs

console.log("Initial Testing Stack for dependency load order");

var test = function() {
	var myVar = 0
	var myArr = [];
	for(myVar = 0; myVar < 1000; myVar++) {
		if(myVar %2) {
			myArr.push(myVar);
		}
	}
}
test();

alert("This is me changing a js file in my asset pipeline app");
