'use strict';

//Selecting elements
const player0El = document.querySelector(`.player--0`);

const player1El = document.querySelector(`.player--1`);

const score0El = document.querySelector(`#score--0`);

const score1El = document.getElementById(`score--1`);

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

const diceEl = document.querySelector(`.dice`);

const btnNew = document.querySelector(`.btn--new`);

const btnRoll = document.querySelector(`.btn--roll`);

const btnHold = document.querySelector(`.btn--hold`);

//set the initial values to zero
score0El.textContent = 0;
score1El.textContent = 0;

//hiding a modal dialog
diceEl.classList.add(`hidden`);

let scores = [0, 0];

let totalScoreP1 = scores[0];
let totalScoreP2 = scores[1];

let currentScore = 0;
let activePlayer = 0;

//clicking the roll button
btnRoll.addEventListener(`click`, function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display the dice
  // first show the dice
  diceEl.classList.remove(`hidden`);

  // display the appropriate image
  // based on rolled dice number
  diceEl.src = `dice-${dice}.png`;
  //3) check for rolled 1. if true
  //switch to next player

  // if dice != 1 add dice to current score
  if (dice !== 1) {
    // add the dice to the current score
    currentScore += dice;
    console.log(scores[activePlayer]);
    //select the element dynamically based on who is the current player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // current0El.textContent = currentScore;
    //change LATER
    //BECAUSE IN ACTUAL GAME IT MUST BE DISPLAYED FOR CURRENT PLAYER NOT ALWAYS PLAYER 0
  } else {
    // reset current score
    // if not it gets added to player two

    //switch current players score to zero before switching players

    // document.getElementById(`current--${activePlayer}`).textContent = 0;

    // switch to next player
    // two ways to do this
    //1 use ternary op

    // if (activePlayer === 0 ? activePlayer++ : activePlayer--);

    //   if (activePlayer === 0)
    //       activePlayer++;
    //   else
    //       activePlayer--;

    // currentScore = 0;

    // player0El.classList.toggle(`player--active`);

    // player0E2.classList.toggle(`player--active`);

    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1)get the current players score

  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //20 add it to this t;otal score
  //switch player
  // before switching player check
  // if anyone crossed the target
  //score

  if (scores[activePlayer] >= 20) {
    // add the winner class
    // from css
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    document.querySelector(`#name--${activePlayer}`).textContent = `You Won!!`;

    //hide the button
    diceEl.classList.add(`hidden`);

    //disable the button
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else switchPlayer();
  // 2) check if score != 100

  //3) reset his current to zerp
});

btnNew.addEventListener(`click`, function () {
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--winner');

  // btnRoll.disabled = false;
  // btnHold.disabled = false;

  // scores = [0, 0];
  // currentScore = 0;
  // diceEl.classList.add(`hidden`);
  // activePlayer = 0;

  // //   document
  // //     .querySelector(`.player--${activePlayer}`)
  // //     .classList.toggle('player--active');
  // //scores = [0, 0];
  // score0El.textContent = 0;
  // score1El.textContent = 0;

  // current0El.textContent = 0;
  // current1El.textContent = 0;

  // player0El.classList.remove(`player--winner`);

  // player1El.classList.remove(`player--winner`);

  // player0El.classList.add(`player--active`);

  // player1El.classList.remove(`player--active`);
  reSet();
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  if (activePlayer === 0 ? activePlayer++ : activePlayer--);

  currentScore = 0;

  player0El.classList.toggle(`player--active`);

  player1El.classList.toggle(`player--active`);
};

const reSet = function () {
  document.querySelector(`#name--${activePlayer}`).textContent = `Player 1`;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  btnRoll.disabled = false;
  btnHold.disabled = false;

  scores = [0, 0];
  currentScore = 0;
  diceEl.classList.add(`hidden`);
  activePlayer = 0;

  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.toggle('player--active');
  //scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove(`player--winner`);

  player1El.classList.remove(`player--winner`);

  player0El.classList.add(`player--active`);

  player1El.classList.remove(`player--active`);
};
