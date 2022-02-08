const cards = document.querySelectorAll('.card');

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
      }
      else {
        freezeOut = true;
        setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        reset()
        }, 800);
      }
     }
      
  } 
function reset() {
  [hasFlippedCard, freezeOut] = [false, false];
  [firstCard, secondCard] = [null, null];
}


cards.forEach(card => card.addEventListener('click', flipCard));
