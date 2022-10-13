document.addEventListener('DOMContentLoaded', () => {});
const cardArray = [
	{
		name: 'homer',
		img: 'images/homer.png'
	},
	{
		name: 'homer',
		img: 'images/homer.png'
	},
	{
		name: 'marge',
		img: 'images/marge.png'
	},
	{
		name: 'marge',
		img: 'images/marge.png'
	},
	{
		name: 'maggie',
		img: 'images/maggie.png'
	},
	{
		name: 'maggie',
		img: 'images/maggie.png'
	},
	{
		name: 'lisa',
		img: 'images/lisa.png'
	},
	{
		name: 'lisa',
		img: 'images/lisa.png'
	},
	{
		name: 'bart',
		img: 'images/bart.png'
	},
	{
		name: 'bart',
		img: 'images/bart.png'
	},
	{
		name: 'pets',
		img: 'images/pets.png'
	},
	{
		name: 'pets',
		img: 'images/pets.png'
	}
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

function createBoard(){
     for (let i = 0; i < cardArray.length; i++) {
          let card = document.createElement('img');
          card.setAttribute('src', 'images/happy.png');
          card.setAttribute('data-id', i);
          card.addEventListener('click', flipCard);
          grid.appendChild(card);          
     }
}

function checkForMatch(){
     var cards = document.querySelectorAll('img');
     const optionOneId = cardsChosenId[0];
     const optionTwoId = cardsChosenId[1];
     if(cardsChosen[0] === cardsChosen[1]){
          alert('You found a match');
          cards[optionOneId].setAttribute('src', 'images/white.png');
          cards[optionTwoId].setAttribute('src', 'images/white.png');
          cardsWon.push(cardsChosen);
     }else{
          cards[optionOneId].setAttribute('src', 'images/happy.png');
          cards[optionTwoId].setAttribute('src', 'images/happy.png');
          alert('Sorry, try again');
     }
     cardsChosen = [];
     cardsChosenId = [];
     resultDisplay.textContent = cardsWon.length;
     if(cardsWon.length === cardArray.length/2){
          resultDisplay.textContent = 'CONGRATULATIONS!!! SIMPSON ARE FOUND';
          setTimeout(()=>location.reload(), 2000);
          
     }
}

function flipCard(){
     let cardId = this.getAttribute('data-id');
     cardsChosen.push(cardArray[cardId].name);
     cardsChosenId.push(cardId);
     this.setAttribute('src', cardArray[cardId].img)
     if(cardsChosen.length === 2){
          setTimeout(checkForMatch, 500)
     }
}

createBoard();
document.getElementById('year').innerHTML = new Date().getFullYear();