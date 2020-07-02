// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])

var myProgress = ['Done with JS', 40];
console.log(myProgress[0] + " : " + myProgress[1]);
myProgress.push(["Moving Forward to", "Lists"]);
console.log(myProgress[2][0] + " : " + myProgress[2][1]);