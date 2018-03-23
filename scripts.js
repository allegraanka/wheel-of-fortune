
var startBtn = document.getElementById("newGame");
var catHeading = document.getElementById("category-heading");
var categories = document.getElementById("card-wrapper");
var nerdOut = document.getElementById("nerd-out");
var trivHeading = document.getElementById("trivia-game");
var mustard = document.getElementById("mustard");

function chooseCategory() {
  categories.style.display = "block";
  catHeading.innerHTML = "choose a category!";
  nerdOut.style.display = "none";
  trivHeading.style.display = "none";
  startBtn.style.display = "none";
  mustard.style.display = "none";
}
startBtn.addEventListener('click', chooseCategory, false);

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
episodesBtn.addEventListener('click', loadLetters, false);
charactersBtn.addEventListener('click', loadLetters, false);
miscBtn.addEventListener('click', loadLetters, false);
