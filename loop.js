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