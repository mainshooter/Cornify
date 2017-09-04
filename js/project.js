var pressedKeys = [];

function logKeyPress(keypress) {
  keypress = keypress[1];
  pressedKeys.push(keypress);

  checkForWord();
}

/**
 * check if we have to word cornify
 * If we have we run cornify_add();
 * @return {[type]} [description]
 */
function checkForWord() {
  var word = stringToArray('cornify');
  var correct = 0;

  for (var i = 0; i < pressedKeys.length; i++) {

    if (word[correct] == pressedKeys[i]) {
      // If it is equal to each other the word with how far we are with the correct to the pressed keys
      correct++;
      if (correct == word.length) {
        // Check if we have the lenght of the word
        cornify_add();
      }
    }

    else {
      correct = 0;
    }
  }
}

function stringToArray(string) {
  return(string.split(''));
}

KeyDetector.enable();
KeyDetector.setKeyPressReturnFunction(logKeyPress);
