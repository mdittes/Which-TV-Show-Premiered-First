const url = 'https://api.tvmaze.com/shows/'

const card1 = document.querySelector('.card-body1')
const card2 = document.querySelector('.card-body2')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(240);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let id1 = getRandomIntInclusive()
let id2 = getRandomIntInclusive()

fetch(`${url}${id1}`)
.then(res => res.json())
.then(data => console.log(data))

fetch(`${url}${id2}`)
.then(res => res.json())
.then(data => console.log(data))
