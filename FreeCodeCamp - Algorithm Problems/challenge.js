/*
  Free code camp Basic Algorithm Challenges

	1 - Reverse a string
       - Reverse the provided string.
	2 - Check for palindromes 
       - Return true if the given string is a palindrome. Otherwise, return false.
	3 - Find longest word in a string
       - Return the length of the longest word in the provided sentence.
	4 - Title case a sentence
       - Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 5 - Return largest numbers in array
       - Return an array consisting of the largest number from each provided sub-array.
 6 - Confirm the ending
       - Check if a string (first argument, str) ends with the given target string (second argument, target).
*/


const reverseString = (str) => str.split('').reverse().join('');
// console.log(reverseString("hello"));
// console.log(reverseString("yey, i remebered arrow syntax"));

function palindrome(str) {
 	let charactersRemoved = str.replace(/\W|_/g, '');

 	if (str.replace(/\W|_/g, '').toLowerCase() == charactersRemoved.toLowerCase().split('').reverse().join(''))
 	{
 		return true;
 	} else {
 		return false;
 	}
}
//console.log(palindrome("My age is 0, 0 si ega ym."));
//console.log(palindrome("race car"));

function findLongestWord(str) {
  let arr = str.split(' ');
  let longestWord = 0;

  for (let i = 0; i < arr.length; i++) {
  	if (arr[i].length > longestWord) 
  	{
  		longestWord = arr[i].length;
  	}
  }
  return longestWord;
}

function titleCase(str) {
  let arr = str.split(' ');
  arr.forEach(function(word, i) {
  	let capitalised = word.toLowerCase().split('')
  	capitalised[0] = capitalised[0].toUpperCase();
  	arr[i] = capitalised.join('');
  });
  return arr.join(' ');
}
//console.log(titleCase("I'm a little tea pot"));

// Return an array consisting of the largest number from each provided sub-array. 
function largestOfFour(arr) {
  let largestNumbers = [];
  arr.forEach(function(numArray) {
    let biggestNumber = 0;
    numArray.forEach(function(num) {
      if (num > biggestNumber) {
        biggestNumber = num;
      }
    });
    largestNumbers.push(biggestNumber);
  });
  return largestNumbers;
}
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function confirmEnding(str, target) {
  return (str.substr(str.length - target.length, target.length) == target);
}
// console.log(confirmEnding("Bastian", "n"));

