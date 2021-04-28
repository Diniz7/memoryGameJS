document.addEventListener('DOMContentLoaded', () => {


    //opções de carta
    const cardArray = [
        {
            nome: 'fritas',
            img: 'imagens/fritas.png'
        },
        {
            nome: 'hamburguer',
            img: 'imagens/hamburguer.png'
        },
        {
            nome: 'hotdog',
            img: 'imagens/hotdog.png'
        },
        {
            nome: 'milkshake',
            img: 'imagens/milkshake.png'
        },
        {
            nome: 'pizza',
            img: 'imagens/pizza.png'
        },
        {
            nome: 'sorvete',
            img: 'imagens/sorvete.png'
        },
        {
            nome: 'fritas',
            img: 'imagens/fritas.png'
        },
        {
            nome: 'hamburguer',
            img: 'imagens/hamburguer.png'
        },
        {
            nome: 'hotdog',
            img: 'imagens/hotdog.png'
        },
        {
            nome: 'milkshake',
            img: 'imagens/milkshake.png'
        },
        {
            nome: 'pizza',
            img: 'imagens/pizza.png'
        },
        {
            nome: 'sorvete',
            img: 'imagens/sorvete.png'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random())


    const grade = document.querySelector('.grade')
    const resultDisplay = document.querySelector('#resultado')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    //Criando jogo

function criarTabuleiro() {
    for (let i=0; i < cardArray.length; i++) {
        var carta = document.createElement('img')
        carta.setAttribute('src', 'imagens/blank.png')
        carta.setAttribute('data-id', i)
        carta.addEventListener('click', virarCarta)
        grade.appendChild(carta)
    }
}

//Check for matches
function checkForMatch() {
var cartas = document.querySelectorAll('img')
const optionOneId = cardsChosenId[0]
const optionTwoId = cardsChosenId[1]


if(optionOneId == optionTwoId) {
    cartas[optionOneId].setAttribute('src', 'imagens/blank.png')
    cartas[optionTwoId].setAttribute('src', 'imagens/blank.png')
    alert('Tu selecionou a mesma imagem duas vezes mano...')

}
else if(cardsChosen[0] === cardsChosen[1]) {
    alert('BOA! Achou uma combinação')
    cartas[optionOneId].setAttribute('src', 'imagens/white.png')
    cartas[optionTwoId].setAttribute('src', 'imagens/white.png')
    cartas[optionOneId].removeEventListener('click', virarCarta)
    cartas[optionTwoId].removeEventListener('click', virarCarta)
    cardsWon.push(cardsChosen)

} else {
    cartas[optionOneId].setAttribute('src', 'imagens/blank.png')
    cartas[optionTwoId].setAttribute('src', 'imagens/blank.png')
    alert('Errou, tenta novamente, tonto.')
}


cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if(cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'PARABAINS, Achou tudin'
}
}
//Vire sua carta
function virarCarta() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].nome)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length===2) {
        setTimeout(checkForMatch, 500)
    }
}
criarTabuleiro()








})