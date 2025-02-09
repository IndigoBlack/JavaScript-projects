// 6. Flashcards App
//     Description: A study app where users can create flashcards for learning.
//     Features:
//     Create flashcards with a question and answer.
//     Shuffle and display flashcards randomly.
//     Track progress and mark cards as "known" or "unknown."

// Function for creating a flashcard With a question. Function will be placed on the submit button.
// Function for displaying the answer when the button is clicked.
// Function for marking the card as known or unkown (option: You can make it 1 function or 2).
// Function for next card.
// Function to shuffle and display the cards.
// Function to show the number of known and unknown cards.
const cardContainer = document.getElementById("card-container");
const cardTitleHeading = document.getElementById("card-title-displayed");
const displayQuestion = document.getElementById("display-question");
const displayAnswer = document.getElementById("display-answer");
const answerInput = document.getElementById("answer");
const answerButton = document.getElementById("answer-button");
const markKnown = document.getElementById("mark-known");
const markUnknown = document.getElementById("mark-unknown");
const nextCard = document.getElementById("next-card");

const currnetCardIndex = 0;
const cards = [];


function createCard() {
    const cardTitle = document.getElementById("card-title").value;
    const question = document.getElementById("question").value;
    const answer = answerInput.value;
    const submitButton = document.getElementById("submit-card");

    const card = {
        title: cardTitle,
        question: question,
        answer: answer,
    }

    // Push card to cards list
    cards.push(card);

    // Clear the inputs after submitting
    document.getElementById("card-title").value = '';
    document.getElementById("question").value = '';
    answerInput.value = '';

    //Function that displays the cards should be here with the index of current card
    displayCard(cards[currnetCardIndex])

}

function displayCard(card) {
    cardTitleHeading.textContent = card.title;
    displayQuestion.textContent = card.question;
    displayAnswer.textContent = card.answer;
}

function showAnswer() {
    if (displayAnswer.style.display === "none") {
        displayAnswer.style.display = "block";
        displayAnswer.textContent = "Hide Answer";
    } else if (displayAnswer.style.display === "block") {
        displayAnswer.style.display = "none";
        displayAnswer.textContent = "Show Answer"
    }
}