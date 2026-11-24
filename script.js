// Checks whether the user's quiz answer is correct.

function checkAnswer(question, answer) {

    let feedback = document.getElementById("feedback" + question);

    if (answer === "correct") {

        feedback.innerHTML = "Correct! Great job.";
        feedback.style.color = "#FFFFFF";

    } else {

        feedback.innerHTML = "Not quite! Try again.";
        feedback.style.color = "#AAAAAA";

    }

}