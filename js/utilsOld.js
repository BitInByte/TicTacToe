//Change this.player1 to player1, the scope enters inside of the functions

function openNameChange() {
  const bpc1 = document.getElementById("bpc1");
  const bpc2 = document.getElementById("bpc2");

  bpc1.onclick = function () {
    const abt = document.getElementById("aName");

    document.getElementById("cName").style.display = "block";

    if (players[0]) {
      //document.getElementById('cBarForm').placeholder  = players[1].name;
      document.getElementById("cBarForm").value = players[0].name;
    } else {
      document.getElementById("cBarForm").placeholder = "Insert your name";
    }

    abt.onclick = function () {
      var input = document.getElementById("cBarForm").value;

      //this.player1 = input;
      if (!players[0]) {
        newPlayer(input); // Create a new value if the the player 2 doesn't exist
      } else {
        playerNameChange(input, 0); // Change the name if exist
      }

      console.log(players);
      console.log("Array lenght: " + players.length);
      //console.log(this.player1);
      //console.log(input);

      document.getElementById("cBarForm").value = null;

      document.getElementById("cName").style.display = "none";

      document.getElementById("pl1").textContent = players[0].name;

      //validation += 1;

      //console.log(validation);

      //if(validation == 2){
      //if(this.player1.length != 0 && this.player2.length != 0){
      if (players[0].name.length != 0 && players[1].name.length != 0) {
        unlockGame();
        //this.playerTurn = 1;
        //console.log(this.playerTurn);
      }
    };

    //return validation;
  };

  bpc2.onclick = function () {
    const abt = document.getElementById("aName");

    document.getElementById("cName").style.display = "block";

    if (players[1]) {
      //document.getElementById('cBarForm').placeholder  = players[1].name;
      document.getElementById("cBarForm").value = players[1].name;
    } else {
      document.getElementById("cBarForm").placeholder = "Insert your name";
    }

    abt.onclick = function () {
      var input2 = document.getElementById("cBarForm").value;

      //this.player2 = input2;
      if (!players[1]) {
        //document.getElementById('cBarForm').placeholder  = 'Insert your name';
        newPlayer(input2); // Create a new value if the the player 2 doesn't exist
      } else {
        //document.getElementById('cBarForm').placeholder  = players[1].name;
        playerNameChange(input2, 1); // Change the name if exist
      }
      //newPlayer(input2);
      console.log(players);
      console.log("Array lenght: " + players.length);
      //console.log(this.player1);
      //console.log(input);

      document.getElementById("cBarForm").value = null;

      document.getElementById("cName").style.display = "none";

      document.getElementById("pl2").textContent = players[1].name;

      //validation += 1;

      //console.log(validation);

      //if(validation == 2){
      if (players[0].name.length != 0 && players[1].name.length != 0) {
        unlockGame();
        //this.playerTurn = 1;
        //console.log(this.playerTurn);
      }
    };

    //return validation;
  };
}

function lockGame() {
  let children = document.getElementById("buttons").children;
  for (let i = 0; i < children.length; i++) {
    if (document.getElementById(children[i].id !== null)) {
      //console.log(children[i]);
      document.getElementById(children[i].id).textContent = "N";
      document.getElementById(children[i].id).style.backgroundColor = "#C4C4C4";
      /*document.getElementById(children[i].id).classList.remove('bt:hover');*/
      document.getElementById(children[i].id).style.pointerEvents = "none";
    }
  }
}

function unlockGame() {
  let children = document.getElementById("buttons").children;
  for (let i = 0; i < children.length; i++) {
    if (document.getElementById(children[i].id !== null)) {
      document.getElementById(children[i].id).style.pointerEvents = "auto";
      document.getElementById(children[i].id).textContent = "";
      //document.getElementById('displayText').textContent = 'Player 1 its your turn';
    }
  }

  document.getElementById("displayText").textContent =
    "Player " + players[0].name + " its your turn";

  simplePlay();
}

function simplePlay() {
  //resetBoard();
  //let board = [
  //    [0, 0, 0],
  //    [0, 0, 0],
  //    [0, 0, 0]
  //];

  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  //console.log('t ' + this.round);
  //console.log(' ' + round);
  round = 0;
  //console.log(' ' + round);
  //console.log('t ' + this.round);

  //console.log(board);
  //board = resetBoard(board);

  //let round = 0;

  //round = 0

  //console.log(round);
  //console.log(board);
  player = "";

  //if(round % 2 == 0){
  //    player = 'X';
  //
  //}else{
  //    player = 'O';
  //}

  let children = document.getElementById("buttons").children;

  for (let i = 0; i < children.length; i++) {
    if (document.getElementById(children[i].id !== null)) {
      document
        .getElementById(children[i].id)
        .addEventListener("click", function game() {
          if (round % 2 == 0) {
            symbolPlayer = "X";
            document.getElementById("displayText").textContent =
              "Player " + players[1].name + " its your turn";
          } else {
            symbolPlayer = "O";
            document.getElementById("displayText").textContent =
              "Player " + players[0].name + " its your turn";
          }

          document.getElementById(children[i].id).textContent = symbolPlayer;
          document.getElementById(children[i].id).style.pointerEvents = "none";

          arrayReg(i, round, board);
          //arrayReg(i);
          console.log(board);
          console.log(round);
          checkWin(board, round);
          //checkWin();

          //checkPlay();

          round++;

          //document.getElementById(children[i].id).removeEventListener('click', game());

          //this.removeEventListener('click', game);
        });
      //console.log(children[i]);
      //document.getElementById(children[i].id).onclick = function (){
      //}
    }
  }
}

function arrayReg(number) {
  if (number < 3) {
    if (round % 2 == 0) {
      board[0][number] = 1;
    } else {
      board[0][number] = 2;
    }
  } else if (number > 2 && number < 6) {
    if (round % 2 == 0) {
      board[1][number - 3] = 1;
    } else {
      board[1][number - 3] = 2;
    }
  } else {
    if (round % 2 == 0) {
      board[2][number - 6] = 1;
    } else {
      board[2][number - 6] = 2;
    }
  }

  //round++;

  return board;
}

function checkWin() {
  if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) {
    //alert('Player 1 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) {
    //alert('Player 2 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) {
    //alert('Player 1 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) {
    //alert('Player 2 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) {
    //alert('Player 1 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) {
    //alert('Player 2 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) {
    //alert('Player 1 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) {
    //alert('Player 2 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
    //alert('Player 1 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
    //alert('Player 2 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) {
    //alert('Player 1 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) {
    //alert('Player 2 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
    //alert('Player 1 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
    //alert('Player 1 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
    //alert('Player 2 wins');
    addWin(0);
    console.log(players);
    winMsg(1);
    //resetBoard(board);
    //unlockGame();
  } else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) {
    //alert('Player 2 wins');
    addWin(1);
    console.log(players);
    winMsg(2);
    //resetBoard(board);
    //unlockGame();
  } else if (round === 8) {
    //alert('Draw!');
    winMsg(0);
    //resetBoard(board);
    //unlockGame();
  }

  return board;
}

function winMsg(player) {
  switch (player) {
    case 0:
      document.getElementById("newGame").style.display = "block";
      document.getElementById("gameFinish").innerHTML =
        "Draw!<br/><br/>5 seconds to reset!";
      resetGame();
      setTimeout(function () {
        document.getElementById("newGame").style.display = "none";
      }, 5000);

      break;
    case 1:
      document.getElementById("newGame").style.display = "block";
      document.getElementById("gameFinish").innerHTML =
        "Player " +
        players[0].name +
        " won the game!<br/><br/>5 seconds to reset!";
      //wait(5000);
      resetGame();
      setTimeout(function () {
        document.getElementById("newGame").style.display = "none";
      }, 5000);
      //document.getElementById('newGame').style.display = "none";

      break;
    case 2:
      document.getElementById("newGame").style.display = "block";
      document.getElementById("gameFinish").innerHTML =
        "Player " +
        players[1].name +
        " won the game!<br/><br/>5 seconds to reset!";
      resetGame();
      setTimeout(function () {
        document.getElementById("newGame").style.display = "none";
      }, 5000);
      //document.getElementById('newGame').style.display = "none";

      break;
    default:
      console.log("Error!");
  }
}

function resetGame() {
  //console.log(round);
  //console.log(board);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = 0;
    }
  }

  let children = document.getElementById("buttons").children;
  for (let i = 0; i < children.length; i++) {
    document.getElementById(children[i].id).style.pointerEvents = "auto";
    document.getElementById(children[i].id).textContent = "";
  }

  document.getElementById("displayText").textContent =
    "Player " + players[0].name + " its your turn";

  round = -1;
}

function newPlayer(playerName) {
  let newPlayer = new player(playerName);

  players.push(newPlayer);
}

function addWin(player) {
  players[player].wins++;
}

function playerNameChange(name, player) {
  players[player].name = name;
}

function displayInfo() {
  document.getElementById("displayText").textContent =
    "Player " + players[0].name + " its your turn";
  document.getElementById("gameFinish").innerHTML =
    "Player " + players[0].name + " won the game!<br /><br>5 seconds to reset!";
}
/*bpc1.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input = document.getElementById("cBarForm").value;

            this.player1 = input;
            //console.log(this.player1);
            //console.log(input);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl1').textContent = this.player1

            
        });

        console.log(validation);
 

    });

    bpc2.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input2 = document.getElementById("cBarForm").value;

            this.player2 = input2;
            //console.log(this.player2);
            //console.log(input2);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl2').textContent = this.player2
        });

        console.log(validation);
        return validation++;

    });*/

/*function openNameChange(validation){

    const bpc1 = document.getElementById('bpc1');

    bpc1.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input = document.getElementById("cBarForm").value;

            this.player1 = input;
            console.log(this.player1);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl1').textContent = this.player1

            
        });

    });

   return validation++;

}
function openNameChange2(validation){

    const bpc2 = document.getElementById('bpc2');


    bpc2.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input2 = document.getElementById("cBarForm").value;

            this.player2 = input2;
            console.log(this.player2);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl2').textContent = this.player2
        });

    });

    return validation++;

}*/
