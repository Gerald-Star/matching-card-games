var cardsArray = [
  {
    name: "CSS",
    img: "https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true",
  },
  {
    name: "HTML",
    img: "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true",
  },
  {
    name: "jQuery",
    img: "https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true",
  },
  {
    name: "JS",
    img: "https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true",
  },
  {
    name: "Node",
    img: "https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true",
  },
  {
    name: "Photo Shop",
    img: "https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true",
  },
  {
    name: "PHP",
    img: "https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true",
  },
  {
    name: "Python",
    img: "https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true",
  },
  {
    name: "Ruby",
    img: "https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true",
  },
  {
    name: "Sass",
    img: "https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true",
  },
  {
    name: "Sublime",
    img: "https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true",
  },
  {
    name: "Wordpress",
    img: "https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true",
  },
];

// cardsArray[0].name; // CSS
// cardsArray[1].img; gets the url

//Duplicate the cardArray to create a match for each card using the concat method
var gameGrid = cardsArray.concat(cardsArray); //add the var gameGrid and change the loop 

// grab the div with an id of game-board and assign to a variable game
var game = document.getElementById("game-board");

// create a section element and assign it to variable grid
var grid = document.createElement("section");

// give section element a class of grid
grid.setAttribute("class", "grid");

// Append the grid section to the game-board div
game.appendChild(grid);

// loop through each item in the card array
for (i = 0; i < gameGrid.length; i++) {
  //gameGrid
  //create a div element and assign it to a variable card

  var card = document.createElement("div");
  //Apply a card class to that div
  card.classList.add("card");

  // set the date - name attribute of the div to the cardsArray name
  // card.dataset.name = cardsArray[i].name; change this cos of the concat
  card.dataset.name = gameGrid[i].name;

  // Apply the background image of the div to the cardsArray image using template literals
  card.style.backgroundImage = `url(${gameGrid[i].img})`; //gameGrid

  //append the div to the gird section
  grid.appendChild(card);
}
