const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let freezeOut = false; 

function flipCard() {
  if (freezeOut) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
  } else {
      hasFlippedCard = false;
      secondCard = this;

     if (firstCard.dataset.framework === secondCard.dataset.framework) {
       firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
      }
      else {
        freezeOut = true;
        setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        freezeOut = false;
        }, 800);
      }
     }
      
  } 



cards.forEach(card => card.addEventListener('click', flipCard));
