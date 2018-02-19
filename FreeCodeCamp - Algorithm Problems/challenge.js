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


