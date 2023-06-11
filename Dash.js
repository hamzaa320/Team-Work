// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the number
const guess = prompt('Guess a number between 1 and 10');

// Check if the guess is correct
if (guess == randomNumber) {
  alert('Congratulations! You guessed the number.');
} else {
  alert(`Sorry, the number was ${randomNumber}. Try again.`);
}