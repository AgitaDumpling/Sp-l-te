const cardsArray = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
    { question: "Question 6", answer: "Answer 6" },
    { question: "Question 7", answer: "Answer 7" },
    { question: "Question 8", answer: "Answer 8" }
  ];
  
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    if (cardsChosenId.length === 0 || (cardsChosenId.length === 1 && !cardsChosenId.includes(cardId))) {
      this.classList.add('flipped');
      cardsChosen.push(cardsArray[cardId]);
      cardsChosenId.push(cardId);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  }
  
  function checkForMatch() {
    const [firstCardId, secondCardId] = cardsChosenId;
    const [firstCard, secondCard] = cardsChosen;
    if (firstCard.answer === secondCard.answer && firstCardId !== secondCardId) {
      cardsWon.push(firstCardId);
      cardsWon.push(secondCardId);
      cardsChosen = [];
      cardsChosenId = [];
      if (cardsWon.length === cardsArray.length) {
        alert('Congratulations! You won!');
      }
    } else {
      const firstCardElement = document.querySelector(`[data-id="${firstCardId}"]`);
      const secondCardElement = document.querySelector(`[data-id="${secondCardId}"]`);
      setTimeout(() => {
        firstCardElement.classList.remove('flipped');
        secondCardElement.classList.remove('flipped');
        cardsChosen = [];
        cardsChosenId = [];
      }, 1000);
    }
  }
  
  function createBoard() {
    const gameBoard = document.getElementById('game-board');
    cardsArray.slice(0, 8).forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('memory-card');
      cardElement.setAttribute('data-id', index);
      cardElement.addEventListener('click', flipCard);
      
      const innerCardFront = document.createElement('div');
      innerCardFront.classList.add('front');
      
      const innerCardBack = document.createElement('div');
      innerCardBack.classList.add('back');
      innerCardBack.textContent = card.question; // Always show question first
      
      cardElement.appendChild(innerCardFront);
      cardElement.appendChild(innerCardBack);
      
      gameBoard.appendChild(cardElement);
    });
  }
  
  createBoard();