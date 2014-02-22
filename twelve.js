/* 
 * The sequence of triangle numbers is generated by adding the natural numbers. 
 * So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 *
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *
 * Let us list the factors of the first seven triangle numbers:
 *
 *    1: 1
 *    3: 1,3
 *    6: 1,2,3,6
 *   10: 1,2,5,10
 *   15: 1,3,5,15
 *   21: 1,3,7,21
 *   28: 1,2,4,7,14,28
 *
 * We can see that 28 is the first triangle number to have over five divisors.
 *
 * What is the value of the first triangle number to have over five hundred divisors?
 *
 */

window.onload = function () {

	var start = new Date().getMilliseconds();
	var answer = calculate();
	var end = new Date().getMilliseconds();
	var elapsed = end - start;

	console.log("The answer is " + answer + " and it took " + elapsed + "milliseconds");

	function getAmountOfDivisors(triangle) {
		var sum = 0;
		for (var i = 1; i <= triangle ; i++) {
			if (triangle % i == 0) {
				sum++;
			}
		}
		return sum;
	};

	function calculate() {
		var triangleNumber;
		var previousValue = 0;
		var isFound = false;
		var i = 0;
		while (!isFound) {
			value = previousValue + i;
			previousValue = value;
            if (getAmountOfDivisors(value) > 500) {
            	triangleNumber = value;
            	isFound = true;
            }
            i++;
		}
		return triangleNumber;
	};


};

