let randomNumber = Math.floor(Math.random() * 1000) + 1;
let guessCount = 0;

document.getElementById("submitGuess").addEventListener("click", function() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const feedback = document.getElementById("feedback");
    const guessCountDisplay = document.getElementById("guessCount");

    if (isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid number!";
        return;
    }

    guessCount++; // Increment guess count
    guessCountDisplay.textContent = `Number of guesses: ${guessCount}`;

    if (userGuess === randomNumber) {
        if (guessCount <= 10) {
            feedback.textContent = guessCount === 10 ? 
                "Ahah! You know the secret!" : 
                "Either you know the secret or you got lucky!";
        } else {
            feedback.textContent = "You should be able to do better!";
        }
        document.getElementById("guessInput").value = "";
        guessCount = 0; // Reset guess count for a new game
        randomNumber = Math.floor(Math.random() * 1000) + 1; // Generate a new number
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low, try again!";
    } else {
        feedback.textContent = "Too high, try again!";
    }

    document.getElementById("guessInput").value = ""; // Clear the input field
});
