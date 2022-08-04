const url = 'https://api.tvmaze.com/shows/'

const cardName1 = document.querySelector('#card-title1')
const cardName2 = document.querySelector('#card-title2')
const cardImage1 = document.querySelector('#card-image1')
const cardImage2 = document.querySelector('#card-image2')
const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const summary1 = document.querySelector('#summary1')
const summary2 = document.querySelector('#summary2')
const submitBtn = document.querySelector('#submit-answer')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5000);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let id1 = getRandomIntInclusive()
let id2 = getRandomIntInclusive()

fetch(`${url}${id1}`)
.then(res => res.json())
.then(renderOne)

fetch(`${url}${id2}`)
.then(res => res.json())
.then(renderTwo)

function renderOne(data) {
    const title = data.name 
    cardName1.append(title)

    cardImage1.src = data.image.medium

    cardImage1.addEventListener('mouseover', (e) => {
        summary1.innerText = data.summary
    })
    return data.premiered
}

function renderTwo(data) {
    const title = data.name
    cardName2.append(title)

    cardImage2.src = data.image.medium

    cardImage2.addEventListener('mouseover', (e) => {
        summary2.innerText = data.summary
    })
    return data.premiered
}

submitBtn.addEventListener('click', (e) => {
    console.log('hey you')
})

