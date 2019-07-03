class Hangman {
  constructor(){
    this.words = ["dog", "cat", "beach", "colors","halo"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10; 
  }

  getWord(){
    let randomWord = Math.floor(Math.random()* this.words.length);
    return this.words[randomWord];
  }

  checkIfLetter(keyCode){
    if((keyCode >= 97 && keyCode <= 122 || keyCode >= 65 && keyCode <= 90)){
       return true;
    }else if(keyCode.length < 2 && (keyCode >= "a" && keyCode <= "z" || keyCode >= "A" && keyCode <= "Z")){
       return true;
    }else{
       return false;
    } 
  }

  checkClickedLetters(key){
    if(this.letters.indexOf(key.toLowerCase()) > -1){
      return true;
    }else{
      return false;
    }
  }

  checkGameOver(){}

  checkWinner(){}

  addCorrectLetter(i){
    console.log(this.secretWord)
    this.guessedLetter += this.secretWord[i].toLocaleUpperCase();  
  }
    
  
  addWrongLetter(letter){
    this.errorsLeft--;
  }
}





let hangman = new Hangman();






document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
