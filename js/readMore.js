const playerButton = document.getElementById('players-readMore');
const playerReadMore = document.getElementById('player-table-readMore');
const playerShowLess = document.getElementById('playerLess');
// a second section of 
// const playerButton = document.getElementById('players-readMore');
// const playerReadMore = document.getElementById('player-table-readMore');
const playerShowLessOne = document.getElementById('playerLess-One');
// const playerButton = document.getElementById('players-readMore');
// const playerReadMore = document.getElementById('player-table-readMore');
const playerShowLessFull = document.getElementById('playerLess-Full');
const penaltyButton = document.getElementById('penalty-readMore');
const penaltyReadMore = document.getElementById('penalty-table-readMore');
const penaltyShowLess = document.getElementById('penaltyLess');
const countryButton = document.getElementById('country-readMore');
const countryReadMore = document.getElementById('country-table-readMore');
const countryShowLess = document.getElementById('countryLess');

playerButton.addEventListener('click', function() {
    playerReadMore.classList.add('showMore');
    playerButton.classList.add('showLess');
    playerShowLess.classList.add('showing');
})

playerShowLess.addEventListener('click', function() {
    playerReadMore.classList.remove('showMore');
    playerButton.classList.remove('showLess');
    playerShowLess.classList.remove('showing');
})

playerShowLessOne.addEventListener('click', function() {
    playerReadMore.classList.remove('showMore');
    playerButton.classList.remove('showLess');
    playerShowLess.classList.remove('showing');
    playerShowLessOne.classList.remove('showing');
    playerShowLessFull.classList.remove('showing');
})

playerShowLessFull.addEventListener('click', function() {
    playerReadMore.classList.remove('showMore');
    playerButton.classList.remove('showLess');
    playerShowLess.classList.remove('showing');
    playerShowLessOne.classList.remove('showing');
    playerShowLessFull.classList.remove('showing');
})

penaltyButton.addEventListener('click', function() {
    penaltyReadMore.classList.add('showMore');
    penaltyButton.classList.add('showLess');
    penaltyShowLess.classList.add('showing');
})

penaltyShowLess.addEventListener('click', function() {
    penaltyReadMore.classList.remove('showMore');
    penaltyButton.classList.remove('showLess');
    penaltyShowLess.classList.remove('showing');
})

countryButton.addEventListener('click', function() {
    countryReadMore.classList.add('showMore');
    countryButton.classList.add('showLess');
    countryShowLess.classList.add('showing');
})

countryShowLess.addEventListener('click', function() {
    countryReadMore.classList.remove('showMore');
    countryButton.classList.remove('showLess');
    countryShowLess.classList.remove('showing');
})