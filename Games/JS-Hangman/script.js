var words; //an array to hold all of the words
var wordToGuess; //the word the player is trying to guess
var guesses; //an array of guesses made by the player

//called when the user clicks on the 'reset game' button. This function starts the game.
function startGame()
{
  guesses = []; //an array to store user guesses
  wordToGuess = getRandomWord(); //get a random word!
  updateGuesses(); //updates the guesses array and the html
  updateSecretWord(); //updates the secret word and the html
  // alert(wordToGuess);
}

//this function updates the the secret word HTML. It looks at the 'guesses' array
//and checks to see if the character has been guessed yet. If so, it adds the letter
//if not it adds a '_'
function updateSecretWord()
{
  var hasWon = true; //assume the user has won
  var progressArray = []; //temp array
  //loop through each of the letters in the word we're trying to guess
  for(var i = 0; i < wordToGuess.length; i++)
    {
      var letter = wordToGuess.charAt(i); //get the character 
      if(guesses.indexOf(letter) != -1) //if the character is in the array of guesses
      {
          //add the letter to the temp array!
          progressArray.push(letter + " ");
      }
      else //the player hasn't guessed this letter yet!
      {
          hasWon = false; //we haven't won yet...
          //add the '_' to the temp array!
          progressArray.push("_ ");
      }
    }

  //update the HTML with the temp array
  document.getElementById("word").innerHTML = progressArray.toString();
  
  if(hasWon === true) //if we've won let the user know!
  {
      alert("You won! The word was '" + wordToGuess + "' It took you " + guesses.length + " guesses.")
  }
}


//this function updates the HTML text for the guesses. We simply print out the guesses array
function updateGuesses()
{
    document.getElementById("guesses").innerHTML = "" + guesses.toString();
}


//this function is called when the user clicks the 'make guess' button. We prompt the user
//to enter in a letter guess. If valid, we add the guess to the 'guesses array'
function makeGuess()
{
    var userGuess = prompt("Enter your guess!"); //prompt the user and save the response with to a variable
    
    if(userGuess != null && userGuess.length == 1) //if the user guess is valid (1 character)   
    {
      userGuess = userGuess.toLowerCase(); //make it lowercase, just incase they gave us uppercase
      guesses.push(userGuess.charAt(0)); //add the user guess to the array
      updateGuesses(); 
      updateSecretWord();
    }
    else //user guess was not valid
    {
      alert("Invalid Guess. You can only guess 1 letter at a time. Please Try Again");
    }
}

//a function that makes a large array of words and returns a random one
function getRandomWord()
{
  words = ["advice",
"anger",
"answer",
"apple",
"arithmetic",
"badge",
"basket",
"basketball",
"battle",
"beast",
"beetle",
"beggar",
"brain",
"branch",
"bubble",
"bucket",
"cactus",
"cannon",
"cattle",
"celery",
"cellar",
"cloth",
"coach",
"coast",
"crate",
"cream",
"daughter",
"donkey",
"earthquake",
"feast",
"fifth",
"finger",
"flock",
"frame",
"furniture",
"geese",
"ghost",
"giraffe",
"governor",
"honey",
"hope",
"hydrant",
"icicle",
"income",
"island",
"jeans",
"judge",
"lace",
"lamp",
"lettuce",
"marble",
"month",
"north",
"ocean",
"patch",
"plane",
"playground",
"riddle",
"scale",
"seashore",
"sheet",
"sidewalk",
"skate",
"sleet",
"smoke",
"stage",
"station",
"thrill",
"throat",
"throne",
"title",
"toothbrush",
"turkey",
"underwear",
"vacation",
"vegetable",
"visitor",
"voyage",
"year"];
return words[Math.floor(Math.random()*words.length)]; //returns a random index
}
