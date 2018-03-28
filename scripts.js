var startBtn = document.getElementById("newGame");
var catHeading = document.getElementById("category-heading");
var categories = document.getElementById("card-wrapper");
var nerdOut = document.getElementById("nerd-out");
var trivHeading = document.getElementById("trivia-game");
var mustard = document.getElementById("mustard");
var quitBtn = document.getElementById("quit-round");
var newQuestion = document.getElementById("new-q");
var newCat = document.getElementById("new-cat");
var solveBtn = document.getElementById("solve");

function chooseCategory() {
  categories.style.display = "block";
  catHeading.innerHTML = "choose a category!";
  nerdOut.style.display = "none";
  trivHeading.style.display = "none";
  startBtn.style.display = "none";
  mustardFoot.style.display = "none";
}
startBtn.addEventListener('click', chooseCategory, false);
newCat.addEventListener('click', chooseCategory, false);

//create episode object to store episode hint/question in episodes //array
var episodes = [];

function Episode(hint, answer) {
  this.hint = hint;
  this.answer = answer;
}

var zeppo = new Episode("xander galavants around town with a group of undead trouble-makers and loses his virginity to faith, all while trying to prove to himself and everyone else that he is not the scoobie that matters least", "The Zeppo");
var tabula = new Episode("latin for clean slate, the name of this episode is the one in which willow casts a spell and everyone forgets who they are", "Tabula Rasa");
var eyes = new Episode("a ghost haunts the halls of sunnydale high, reenacting a murder-suicide every year since the 1950s", "I only have eyes for you");

episodes.push(zeppo);
episodes.push(tabula);
episodes.push(eyes);

var characters = [];

function Character(hint, answer) {
  this.hint = hint;
  this.answer = answer;
}

var buffy = new Character("the one, the chosen", "buffy summers");
var xander = new Character("often the comic relief, this character is close to buffy but has no supernatural skills and struggles to earn the respect of others. saves buffy & the world several times", "xander harris");
var willow = new Character("nerdy and timid, later comes out as a lesbian and becomes a powerful witch", "willow rosenberg");

characters.push(buffy);
characters.push(xander);
characters.push(willow);

var misc = [];

function Misc(hint, answer) {
  this.hint = hint;
  this.answer = answer;
}

var joyce = new Misc("what is buffy's mom's name", "joyce summers");
var cancer = new Misc("what killed buffy's mom?", "cancer");
var anne = new Misc("what's buffy's middle name?", "anne");

misc.push(joyce);
misc.push(cancer);
misc.push(anne);

var letters = document.getElementById("letters-div");
var episodesBtn = document.getElementById("episodes-click");
var charactersBtn = document.getElementById("characters-click");
var miscBtn = document.getElementById("misc-click");

function loadLetters() {
  letters.style.display = "block";
  categories.style.display = "none";
  catHeading.innerHTML = "welcome to the hellmouth";
  nerdOut.style.display = "none";
  trivHeading.style.display = "none";
  startBtn.style.display = "none";
  mustard.style.display = "none";
}

class Game {
  constructor (episodes, characters, misc) {
    var game = this;
    //pull in arrays and variables declared globally
    this.episodes = episodes;
    this.characters = characters;
    this.misc = misc;
    this.currentCategory = null;
    this.episodesBtn = document.getElementById("episodes-click");
    this.charactersBtn = document.getElementById("characters-click");
    this.miscBtn = document.getElementById("misc-click");
    this.quitBtn = document.getElementById("quit-round");
    this.newQuestion = document.getElementById("new-q");
    this.solveBtn = document.getElementById("solve");
    this.newCat = document.getElementById("new-cat");
    this.categories = document.getElementById("card-wrapper");
    this.letters = document.getElementById('letters-div');
    this.gameBoard = document.getElementById('gameBoard');
    this.hintSpace = document.getElementById('hint');
    this.blankSpaces = document.getElementById('blanks');
    this.answer = document.getElementById('answer');
    //create elements associated with game board - buttons, text divs, etc
    this.wrapper = document.createElement('div');
    document.body.appendChild(this.wrapper);
    this.answerArr = [];
    this.letters.type = "submit";
    this.letters.onclick = function () {
      //code for clickable letters to guess + input letters
    }
    //add created elements to the page
    //this.wrapper.appendChild(this.answerStatus);
    //this.wrapper.appendChild(this.answer);

    this.answer = null;

  } // end constructor

    getCategory(category) {
      if (category === "episodes") {
        this.currentCategory = this.episodes;
        catHeading.innerHTML = "welcome to the hellmouth: episodes";
        this.letters.style.display = "block";
        this.quitBtn.style.display = "block";
        this.newQuestion.style.display = "block";
        this.solveBtn.style.display = "block";
        this.newCat.style.display = "block";
        this.categories.style.display = "none";
        this.gameBoard.style.display = "none";
        this.blankSpaces.style.display = "none";
        this.hintSpace.style.display = "none";
        //this.answer.style.display = "none";
      } else if (category === "characters") {
        this.currentCategory = this.characters;
        catHeading.innerHTML = "welcome to the hellmouth: characters";
        this.letters.style.display = "block";
        this.quitBtn.style.display = "block";
        this.newQuestion.style.display = "block";
        this.solveBtn.style.display = "block";
        this.newCat.style.display = "block";
        this.categories.style.display = "none";
        this.gameBoard.style.display = "none";
        this.hintSpace.style.display = "none";
        this.blankSpaces.style.display = "none";
        //this.answer.style.display = "none";
      } else if (category === "misc") {
        this.currentCategory = this.misc;
        catHeading.innerHTML = "welcome to the hellmouth: misc";
        this.letters.style.display = "block";
        this.quitBtn.style.display = "block";
        this.newQuestion.style.display = "block";
        this.solveBtn.style.display = "block";
        this.newCat.style.display = "block";
        this.categories.style.display = "none";
        this.gameBoard.style.display = "none";
        this.hintSpace.style.display = "none";
        this.blankSpaces.style.display = "none";
        //this.answer.style.display = "none";
      } else {
        catHeading.innerHTML = "please choose a category!";
      }
    }

    getQuestion() {
      this.gameBoard.style.display = "block";
      this.hintSpace.style.display = "block";
      this.blankSpaces.style.display = "block";
      this.newQuestion = document.getElementById("new-q");
      //this.answer.style.display = "block";
      var currentQuestion = this.currentCategory[Math.floor(Math.random() * this.currentCategory.length -1)];
      var remainingLetters = this.currentQuestion.length;
      while (remainingLetters > 0) {
        this.blankSpaces.innerHTML = this.answerArr.join(" ");
        this.hintSpace.innerHTML = currentQuestion.hint;
        var guess = this.letters.onclick = function () {
          //code for clickable letters to guess + input letters
        };
        if (guess.length !== 1) {
          prompt("Please choose a valid letter.");
        } else {
          for (var j = 0; j < currentQuestion.length; j++) {
            if (currentQuestion[j] === guess) {
              this.answerArr[j] = guess;
              this.remainingLetters--;
            }
          }
        }
      }
    }
  }

var buffyTrivia = new Game(episodes, characters, misc);

buffyTrivia.episodesBtn.addEventListener('click', function () {
  buffyTrivia.getCategory("episodes");
}, false);
buffyTrivia.charactersBtn.addEventListener('click', function () {
  buffyTrivia.getCategory("characters");
}, false);
buffyTrivia.miscBtn.addEventListener('click', function () {
  buffyTrivia.getCategory("misc");
}, false);
buffyTrivia.newQuestion.addEventListener('click', function () {
  buffyTrivia.getQuestion();
}, false);
