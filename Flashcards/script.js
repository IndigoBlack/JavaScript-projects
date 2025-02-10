// 6. Flashcards App
//     Description: A study app where users can create flashcards for learning.
//     Features:
//     Create flashcards with a question and answer.
//     Shuffle and display flashcards randomly.
//     Track progress and mark cards as "known" or "unknown."






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

    const card = {
        title: cardTitle,
        question: question,
        answer: answer,
        status: "",
    }

    // Push card to cards list
    cards.push(card);
    console.log("creating card: ", card)

    // Shuffle cards
    shuffle(cards)
    console.log("Shuffling cards...")
    

    // Clear the inputs after submitting
    document.getElementById("card-title").value = '';
    document.getElementById("question").value = '';
    answerInput.value = '';
    console.log("clearing inputs...")

    currentCardIndex = 0;
    // Display cards
    displayCard(cards[currentCardIndex])
    console.log("Displaying card.")
}

// Function to display cards
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
    const currentCard = cards[currentCardIndex]
    if (cards[currentCardIndex].status !== "known ") {
        cards[currentCardIndex].status = "known";
        
        if (!knownCards.includes(currentCard)) {
            knownCards.push(cards[currentCardIndex]);
        }
        alert("Card marked as known");

        const indexInUnknown = unknownCards.indexOf(currentCard);
        if (indexInUnknown !== -1) {
            unknownCards.splice(indexInUnknown, 1);  // Remove card from unknownCards
        }
        
    } else {
        alert("This card is alread marked as known")
    }
    updateCardCount();
}

// Function for marking the card as unknown.
function unknown() {
    const currentCard = cards[currentCardIndex]
    if (cards[currentCardIndex].status !== "unknown") {
        cards[currentCardIndex].status = "unknown";

        if (!unknownCards.includes(currentCard)) {
            unknownCards.push(cards[currentCardIndex]);
        }
        alert("Card marked as unknown");

        //
        const indexInknown = knownCards.indexOf(currentCard);
        if (indexInknown !== -1) {
            knownCards.splice(indexInknown, 1);  // Remove card from unknownCards
        }
    } else {
        alert("This card is already marked as unknown")
    }
    updateCardCount();
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
        let j = Math.floor(Math.random() * (i + 1));

        // Swap arr[i] with arr[j]
        // let t = arr[i]
        // arr[i] = arr[j]
        // arr[j] = t
        [arr[j], arr[i]] = [arr[i], arr[j]]
    }
}

function updateCardCount() {
    const countCard = document.getElementById("number-of-cards");
    countCard.innerHTML = `Known cards: ${knownCards.length}<br>Unknown cards: ${unknownCards.length}<br>Total cards: ${cards.length}`;
}

document.getElementById("submit-card").addEventListener("click", function() {
    updateCardCount();
})

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

