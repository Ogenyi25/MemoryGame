document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'group',
            img: 'img/group.jpg'
        },
        {
            name: 'group',
            img: 'img/group.jpg'
        },
        {
            name: 'john',
            img: 'img/john.jpg'
        },
        {
            name: 'john',
            img: 'img/john.jpg'
        },
        {
            name: 'migos',
            img: 'img/migos.jpg'
        },
        {
            name: 'migos',
            img: 'img/migos.jpg'
        },
        {
            name: 'peace',
            img: 'img/peace.jpg'
        },
        {
            name: 'peace',
            img: 'img/peace.jpg'
        },
        {
            name: 'single',
            img: 'img/single.jpg'
        },
        {
            name: 'single',
            img: 'img/single.jpg'
        },
        {
            name: 'smart',
            img: 'img/smart.jpg'
        },
        {
            name: 'smart',
            img: 'img/smart.jpg'
        },
    ]


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []



    //this function creats the game board
    function createBoard() {
        for ( let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/carpet.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //This function is to check for if the cards match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('BINGO! You found a match')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/carpet.png')
            cards[optionTwoId].setAttribute('src', 'img/carpet.png')
            alert('OOPS! Card did not match, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length.length/2) {
            resultDisplay.textContent = 'CONGRATULATIONS! You found all the cards!'
        }
    }

    
})