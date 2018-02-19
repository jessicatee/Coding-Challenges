function calculateScore(height, age) {
	return height + (age * 5);
};

var johnHeight = 150;
var johnAge = 30;
var friendHeight = 105;
var friendAge = 30;

var johnScore = calculateScore(johnHeight, johnAge);
var friendScore = calculateScore(friendHeight, friendAge);

if (johnScore > friendScore) {
	console.log("John wins with a score of : " + johnScore);
} else if (friendScore > johnScore) {
	console.log("Friend wins with a score of : " + friendScore);
} else {
	console.log("Its a draw! The score is : " + johnScore + ":" + friendScore);
};

