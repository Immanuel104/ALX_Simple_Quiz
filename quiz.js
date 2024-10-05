function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user has selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That is incorrect. Try again.";
        }
    } else {
        // If no answer is selected, provide feedback
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
