let flippedCards = [];
let lockBoard = false;

function flipCard(card) {
    if (lockBoard) return;
    if (flippedCards.length === 2) return;

    card.classList.add('flip');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        lockBoard = true;
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (flippedCards[0].querySelector('.card-back').innerText === flippedCards[1].querySelector('.card-back').innerText) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    flippedCards[0].removeEventListener('click', flipCard);
    flippedCards[1].removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        flippedCards[0].classList.remove('flip');
        flippedCards[1].classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    flippedCards = [];
    lockBoard = false;
}