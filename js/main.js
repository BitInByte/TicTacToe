console.log("Im here");

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let round = 0;
let games = 0;

function player(playerName) {
  this.name = playerName;
  this.wins = 0;
  this.color = "";
} // Object constructor

let players = [];
//let children = document.getElementById('buttons').children;

//Bug on player validation... not 2 but the player name != than ""

//let board = [
//    [0, 0, 0],
//    [0, 0, 0],
//    [0, 0, 0]
//];

//let player1 = "";
//let player2 = "";

//console.log(player1.length);
//let validation = 0;

//let playerTurn = 1;

//let rounds = 0;

lockGame();

openNameChange();

//console.log(validation);

//do{
//    if(validation == 2){
//        do{
//            changePlay(playerTurn, rounds);
//            console.log("Inside");
//            rounds += 1;
//        }while(rounds < 9);
//    }
//}while(validation < 2);
