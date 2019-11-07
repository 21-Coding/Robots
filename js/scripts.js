function Game (){

  this.score = 0
}

//add 1 to score ---- = A ... increase score a..

//robot in funct
Game.prototype.addScore = function() {
    this.score += 1
    return this.score
  };


// math.random(50)
// user will click a button that adds score by random number, computer will also function off of similar code. Will switch() users randomly inbetween turns similar to dice roll.
// 1. switch function that is random
// 2. add function that is random
// 3. click function
// 4. branching to determine score

Game.prototype.switchUser = function() {
  // if users random number is more than 10 switch turn
}




//Ui


  // function Robot() {
  //   this.hit =
  //
  //
  // }
$(document).ready(function() {
  var newGame = new Game();

  $("#robotbutton").click(function(event) {
    event.preventDefault();
    newGame.addScore();
    console.log(newGame.score);
    return newGame.score
  });


})


//
// click button >>> addScore('A')
// click button >>> addScore('B')



// (this.score).forEach(function(){
//   return this.score +=1,
// });
//   return sockEm();
// }
// //
// var robot = new Robot;
//   console.log(modifiedScore());
//// function modifiedScore(hitPoints, newPoints) {
//
//
//
//
// var score "";
// ().click(function(){
//   score += 1
// })
// a robot = {
//   hitPoints: 10,
//   sock: 5
// }
// {
//   score: 1,
//   robot: {
//     hitPoints: 10,
//     sock: 5
//   }
// }
// var sockEm = (hitPoints)
// this.sock = sock;
// this.robot = robot;
