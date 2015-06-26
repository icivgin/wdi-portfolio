// REVERSE-----------
var string = 'String';
function reverse(input) {
    var newString = '';
    for (i = (input.length - 1); i >= 0; i--) {
        newString += input[i];
    }
    return newString;
}

var hold = null;
function swap(x, y) {
    hold = x;
    x = y;
    y = hold;
    console.log('x = ' + x + ', y = ' + y);
}

var y = 3;
var x = function() {
	y * 2;
}

function greet() {
	var inputName = prompt("What is your name?");
	console.log('Hello there, ' + inputName + '.');
}

function multiply(x, y) {
	return x * y;
}

function isEven(x) {
	if ((x % 2) === 0) {
		return true;
	}
	else {
		return false;
	}
}

var array = ['moe', 'john', 'sam', 'dan', 'molly'];
function swapAr (inputArray, first, last) {
	var hold = inputArray[first];
	inputArray[first] = inputArray[last];
	inputArray[last] = hold;
	return inputArray;
}

function getRandomNum(x, y) {
	return Math.random(x) * (y-x) + x;
}

function ranAr(inputLength) {
	var newAr = [];
	for (i = 0; i < inputLength; i++) {
		newAr.push(getRandomNum(1, 100))
	}
	return newAr;
}

var newAr = ranAr(10);
function getMax() {
	console.log(newAr);
    return Math.max.apply(Math, newAr);
}

function add(x, y) {
	return x + y;
}

function explainMather(x, y, mather) {
	console.log(x + ', ' + y + ', ' + mather(x,y));
	return 'Done.';
}

function vowels(inputString) {
	var j = 0;
	for (i = 0; i < inputString.length; i++) {
		if ((inputString[i] == 'a') || (inputString[i] == 'e') || (inputString[i] == 'i') || (inputString[i] == 'o') || (inputString[i] == 'u')) {
			j++;
		}
	}
	return j;
}

var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9]
function merge(arr1, arr2) {
	newArr = arr1;
	for (i = 0; i < arr2.length; i++) {
		newArr.push(arr2[i]);
	}
	
	return newArr.sort(function(a, b){return a-b});
}

var la = document.querySelector('#logo a');
var allA = document.querySelectorAll('a');
var colors = ['red', 'green', 'blue', 'yellow'];

la.innerText = "CL Disco";

// la.onclick = function(href){
//     href.preventDefault(); // SUPER IMPORTANT PART
//     console.log('good');
//     for (i = 0; i < allA.length; i++) {
//         allA[i].style.color = "green";
//     }
//     la.style.color = colors[Math.floor(Math.random()*colors.length)];
// };

// var x = allA[4].innerText;

for (i = 0; i < allA.length; i++) {
    allA[i].onclick = function(href) {
        href.preventDefault();
//         allA[i].style.color = "red";
        alert(this.innerText);
    }
    allA[i].addEventListener('mouseover', function() {
        this.style.color = "red";
    });
}