// reverse a string challenge
const reverseString = (str) => str.split('').reverse().join('');

// console.log(reverseString("hello"));
// console.log(reverseString("yey, i remebered arrow syntax"));

// check for palindrome after removing non-alphanumeric characters incl '_'
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

// Return the length of the longest word in the provided sentence.
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

//console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));