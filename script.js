document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
      flipCard(card);
  });
});

function flipCard(card) {
  card.querySelector('.card-inner').classList.toggle('flipped');
}