const url = 'https://api.tvmaze.com/shows/'

const cardName1 = document.querySelector('#card-title1')
const cardName2 = document.querySelector('#card-title2')
const cardImage1 = document.querySelector('#card-image1')
const cardImage2 = document.querySelector('#card-image2')
const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const summary1 = document.querySelector('#summary1')
const summary2 = document.querySelector('#summary2')
const form = document.querySelector('#selected-answer')

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5000);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let id1 = getRandomInt();
let id2 = getRandomInt();

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
        summary1.style = 'display: block'
    })
    cardImage1.addEventListener('mouseout', (e) => {
        summary1.style = 'display: none'
    })
    card1.addEventListener('click', (e) => {
        title.innerText = data.name
        form[0].value = title
        activeDate = date1
    })

    date1 = data.premiered
};

let date1;
let date2;

let title1;
let title2;

function renderTwo(data) {
    const title = data.name
    cardName2.append(title)

    cardImage2.src = data.image.medium

    cardImage2.addEventListener('mouseover', (e) => {
        summary2.innerText = data.summary
        summary2.style = 'display: block'
    })
    cardImage2.addEventListener('mouseout', (e) => {
        summary2.style = 'display: none'
    })
    card2.addEventListener('click', (e) => {
        title.innerText = data.name
        form[0].value = title
        activeDate = date2
    })

    date2 = data.premiered
};

let correctAnswer;

function compareDates() {
    if(date1 < date2) {
        correctAnswer = date1
    } else {
        correctAnswer = date2
    }
};

let activeDate;

document.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
        e.preventDefault()
        compareDates()
        if(activeDate === correctAnswer) {
            alert('Correct!')
        } else {
            alert('Wrong!')
        }
        form.reset()
        window.location.reload()
    }
});
