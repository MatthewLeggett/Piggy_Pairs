let cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let freezeOut = false; 

function flipCard() {
  if (freezeOut) return;
  this.classList.add('flip');
  if(this === firstCard) return;

  if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
  } else {
      hasFlippedCard = false;
      secondCard = this;

     if (firstCard.dataset.framework === secondCard.dataset.framework) {
       firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
       reset()
      } else {
          freezeOut = true;
          setTimeout(() => {
          firstCard.classList.remove('flip')
          secondCard.classList.remove('flip')
          resetGame()
        }, 800);
      }
     }
      
} 

function resetGame() {
  [hasFlippedCard, freezeOut] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 15);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

