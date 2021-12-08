const playerButton = document.getElementById('players-readMore');
const playerReadMore = document.getElementById('player-table-readMore');
const playerShowLess = document.getElementById('playerLess');
// a second section of the player table
const playerButtonOne = document.getElementById('players-readMore-one');
const playerReadMoreOne = document.getElementById('player-table-readMore-one');
const playerShowLessOne = document.getElementById('playerLess-One');
// the third and final installment of the table
const playerButtonFull = document.getElementById('players-readMore-Full');
const playerReadMoreFull = document.getElementById('player-table-readMore-Full');
const playerShowLessFull = document.getElementById('playerLess-Full');
//for the penalty table
const penaltyButton = document.getElementById('penalty-readMore');
const penaltyReadMore = document.getElementById('penalty-table-readMore');
const penaltyShowLess = document.getElementById('penaltyLess');
//for the country table
const countryButton = document.getElementById('country-readMore');
const countryReadMore = document.getElementById('country-table-readMore');
const countryShowLess = document.getElementById('countryLess');

// First player read more code
playerButton.addEventListener('click', function() {
    playerReadMore.classList.add('showMore');
    playerButton.classList.add('showLess');
    playerShowLess.classList.add('showing');
    playerButtonOne.classList.add('showing');
})

playerShowLess.addEventListener('click', function() {
    playerReadMore.classList.remove('showMore');
    playerButton.classList.remove('showLess');
    playerShowLess.classList.remove('showing');
    playerButtonOne.classList.remove('showing');
})

// The second player read more
playerButtonOne.addEventListener('click', function(){
    playerReadMoreOne.classList.add('showMore');
    playerShowLessOne.classList.add('showing');
    playerButtonFull.classList.add('showing');
    playerButtonOne.classList.remove('showing');
    playerShowLess.classList.remove('showing');
})

playerShowLessOne.addEventListener('click', function() {
    playerReadMoreOne.classList.remove('showMore');
    playerReadMore.classList.remove('showMore');
    playerButton.classList.remove('showLess');
    playerShowLessOne.classList.remove('showing');
    playerButtonFull.classList.remove('showing');
})

//Final player read more
playerButtonFull.addEventListener('click', function(){
    playerButtonFull.classList.remove('showing');
    playerReadMoreFull.classList.add('showMore');
    playerShowLessFull.classList.add('showing')
    playerShowLessOne.classList.remove('showing');
})

playerShowLessFull.addEventListener('click', function() {
    playerReadMore.classList.remove('showMore');
    playerReadMoreOne.classList.remove('showMore');
    playerReadMoreFull.classList.remove('showMore');
    playerButton.classList.remove('showLess');
    playerShowLessFull.classList.remove('showing');
})

//code for the penalty table read more
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

// code for the country read more
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