// Presidents - Accessing values in an Array
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
for (var i = 0; i < presidents.length; i++) {
	console.log("The value if i is: " + i);
	console.log("The value at Index is: " + presidents[i]);
}

function printContent(arr,arrValue){
	for (var i = 0; i < arr.length; i++) {
	arrValue = arr[i];
	console.log("The value if i is: " + i);
	console.log("The value at Index is: " + arrValue);
}
}

// The String of Numbers
var	stringOfNumbers = "";
for (var i = 10; i < 21; i++) {
      var value = i.toString();
      stringOfNumbers += value;
	}
console.log(stringOfNumbers);

// Add only even numbrs to an array
var evenNumberArray =[];
for (var i = 0; i < 100; i++) {
	if (i%2 === 0){
		evenNumberArray.push(i);
	}
}
console.log(evenNumberArray);

// Accessing only the odd indexes of an Array - 'Not Even Brah'
var oopsArray = ["turn", "down", "for", "what"];
for (var i = 1; i < oopsArray.length; i+=2) {
	oopsArray.splice(i, 0,"none");
}
console.log(oopsArray);

// Going backwards?!
for (var i = oopsArray.length - 1; i >= 0; i--) {
	console.log(oopsArray[i]);
}

// isNapTime
var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];
function nap(schedule){
	for (var i = 0; i < schedule.length; i++) {
	if (schedule[i]){
		console.log("ZzZzZzZz");
	}
	else{
		console.log("Gotta get to work");
		isNapTime = true;
	}
}
}
nap(napSchedule);

// CopyArray - clone array values
var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 8, 76];
function copyArray(originArray,destinationArray){
	for (var i = 0; i < originArray.length; i++) {
		destinationArray.push(originArray[i]);
	}
	console.log(destinationArray);
	console.log(originArray);
}
copyArray(valuesArray,copyOfValuesArray);