// 6. Flashcards App
//     Description: A study app where users can create flashcards for learning.
//     Features:
//     Create flashcards with a question and answer.
//     Shuffle and display flashcards randomly.
//     Track progress and mark cards as "known" or "unknown."





// Function to shuffle and display the cards.
// Function to show the number of known and unknown cards.
// Function to be able to search card by title or by status: known/unkown.
const cardContainer = document.getElementById("card-container");
const cardTitleHeading = document.getElementById("card-title-displayed");
const displayQuestion = document.getElementById("display-question");
const displayAnswer = document.getElementById("display-answer");
const answerInput = document.getElementById("answer");
const answerButton = document.getElementById("answer-button");
const markKnown = document.getElementById("mark-known");
const markUnknown = document.getElementById("mark-unknown");
const nextCard = document.getElementById("next-card");

let currentCardIndex = 0;
const cards = [];
const knownCards = [];
const unknownCards = [];

// Function for creating a flashcard With a question. Function will be placed on the submit button.
function createCard() {
    const cardTitle = document.getElementById("card-title").value;
    const question = document.getElementById("question").value;
    const answer = answerInput.value;
    const submitButton = document.getElementById("submit-card");

    const card = {
        title: cardTitle,
        question: question,
        answer: answer,
        status: "unknown",
    }

    // Push card to cards list
    cards.push(card);
    shuffle(cards)

    // Clear the inputs after submitting
    document.getElementById("card-title").value = '';
    document.getElementById("question").value = '';
    answerInput.value = '';

    // Display cards
    displayCard(cards[currentCardIndex])

}

function displayCard(card) {
    cardTitleHeading.textContent = card.title;
    displayQuestion.textContent = card.question;
    displayAnswer.textContent = card.answer;
}

// Function for displaying the answer when the button is clicked.
function showAnswer() {
    if (displayAnswer.style.display === "none") {
        displayAnswer.style.display = "block";
        answerButton.textContent = "Hide Answer";
    } else if (displayAnswer.style.display === "block") {
        displayAnswer.style.display = "none";
        answerButton.textContent = "Show Answer"
    }
}

// Function for marking the card as known.
function known() {
    if (cards[currentCardIndex].status === "unknown") {
        cards[currentCardIndex].status = "known";
        knownCards.push(cards[currentCardIndex]);
        alert("Card marked as known");
    } else {
        alert("This card is alread marked as known")
    }
}

// Function for marking the card as unknown.
function unknown() {
    if (cards[currentCardIndex].status === "known") {
        cards[currentCardIndex].status = "unknown";
        unknownCards.push(cards[currentCardIndex]);
        alert("Card marked as unknown");
    } else {
        alert("This card is already marked as unknown")
    }
}

// Function for next card.
function next() {
    currentCardIndex++
    if (currentCardIndex >= cards.length) {
        currentCardIndex = 0;
    }
    displayCard(cards[currentCardIndex]);
}

// Shuffle card using fisher Yates shuffle:
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))

        // Swap arr[i] with arr[j]
        // let t = arr[i]
        // arr[i] = arr[j]
        // arr[j] = t
        [arr[i], arr[j] = arr[j], arr[i]]
    }
}

// function showKnownCards() {
//     if (knownCards.length > 0) {
//         currentCardIndex = 0;
//         displayCard(knownCards[currentCardIndex]);
//     } else {
//         alert("No known cards");
//     }
// }

// function showUknownCards() {
//     if (unknownCards.length > 0) {
//         currentCardIndex = 0;
//         displayCard(unknownCards[currentCardIndex]);
//     } else {
//         alert("No uknown cards");
//     }
// }

