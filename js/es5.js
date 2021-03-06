// Tic Tac Toe developed with ES5

// GAME CONTROLLER
var gameController = (function () {
  // Private methods

  // Player object Constructor
  var Player = function (playerName, wins) {
    // Ternary to get the not passing arguments

    wins === undefined ? (wins = 0) : (wins = wins);

    this.playerName = playerName;
    this.wins = wins;
  };

  Player.prototype.addWin = function () {
    // Method to add a new win to the player
    this.wins++;
  };

  // Variables object
  var data = {
    rounds: 0,
    games: 0,
    board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    players: [new Player(""), new Player("")], // Store all of the Player objects with empty values
  };

  return {
    // Public methods

    setNewPlayer: function (name) {
      // Set a new Player object to the array
      data.players.push(new Player(name));
    },

    changePlayerName: function (player, name) {
      // Change the player name on the array
      data.players[player].playerName = name;
    },

    newRound: function () {
      // Add 1 more to the round
      data.rounds++;
    },

    arrayReg: function (number, playerNumber) {
      // Record the actual position of the board to the board array
      if (number < 3) {
        if (playerNumber == 0) {
          data.board[0][number] = 1;
        } else {
          data.board[0][number] = 2;
        }
      } else if (number > 2 && number < 6) {
        if (playerNumber == 0) {
          data.board[1][number - 3] = 1;
        } else {
          data.board[1][number - 3] = 2;
        }
      } else {
        if (playerNumber == 0) {
          data.board[2][number - 6] = 1;
        } else {
          data.board[2][number - 6] = 2;
        }
      }
    },

    checkWinFor: function () {
      // Check if the player already won the game or if it's a draw
      for (var i = 0; i < 3; i++) {
        if (
          data.board[i][0] === 1 &&
          data.board[i][1] === 1 &&
          data.board[i][2] === 1
        ) {
          data.players[0].addWin();
          return 0;
        } else if (
          data.board[i][0] === 2 &&
          data.board[i][1] === 2 &&
          data.board[i][2] === 2
        ) {
          data.players[1].addWin();
          return 1;
        } else if (
          data.board[0][i] === 1 &&
          data.board[1][i] === 1 &&
          data.board[2][i] === 1
        ) {
          data.players[0].addWin();
          return 0;
        } else if (
          data.board[0][i] === 2 &&
          data.board[1][i] === 2 &&
          data.board[2][i] === 2
        ) {
          data.players[1].addWin();
          return 1;
        } else if (
          data.board[0][0] === 1 &&
          data.board[1][1] === 1 &&
          data.board[2][2] === 1
        ) {
          data.players[0].addWin();
          return 0;
        } else if (
          data.board[0][0] === 2 &&
          data.board[1][1] === 2 &&
          data.board[2][2] === 2
        ) {
          data.players[1].addWin();
          return 1;
        } else if (
          data.board[0][2] === 1 &&
          data.board[1][1] === 1 &&
          data.board[2][0] === 1
        ) {
          data.players[0].addWin();
          return 0;
        } else if (
          data.board[0][2] === 2 &&
          data.board[1][1] === 2 &&
          data.board[2][0] === 2
        ) {
          data.players[1].addWin();
          return 1;
        } else if (data.rounds === 8) {
          return 2;
        }
      }
    },

    resetGame: function () {
      // Reset the board
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          data.board[i][j] = 0;
        }
      }

      // Reset the rounds
      data.rounds = 0;
    },

    getPlayeTurn: function () {
      // If the round is even is player 1 and if the round is odd is player 2
      var playerNumber;

      if (data.rounds % 2 == 0) {
        playerNumber = 0;
      } else {
        playerNumber = 1;
      }

      return playerNumber;
    },
    // Return data structure to the outside
    getPlayers: function () {
      return data.players;
    },

    getRounds: function () {
      return data.rounds;
    },

    // Debugging
    // testData: function () {
    //   return data;
    // },
  };
})();

// UI CONTROLLER
var UIController = (function () {
  // Private methods
  var DOMvalues = {
    btnP1: "#bpc1",
    btnP2: "#bpc2",
    nameLabel: "#cName",
    btnAcpt: "#aName",
    plForm: "#cBarForm",
    player1Name: "#pl1",
    player2Name: "#pl2",
    btnContainer: "#buttons",
    gameDisplay: "#displayText",
    gameFinishDisplay: "#newGame",
    gameFinishLabel: "#gameFinish",
    btnLabel: ".btP",
  };
  return {
    // Public methods

    unlockGame: function () {
      var children = document.querySelector(DOMvalues.btnContainer).children;

      for (var i = 0; i < children.length; i++) {
        document.getElementById(children[i].id).style.pointerEvents = "auto";
        document.getElementById(children[i].id).textContent = "";
      }
    },

    playerNameDisplay: function (name, player) {
      // DOM player display
      if (player === 0) {
        document.querySelector(DOMvalues.player1Name).textContent = name;
      } else {
        document.querySelector(DOMvalues.player2Name).textContent = name;
      }
    },

    changeBtnPlayer: function (id, playerNumber) {
      // Place a player string on the buttons according to the player that clicked
      document.getElementById(id).textContent = playerNumber === 0 ? "X" : "O";
    },

    blockBtn: function (btn) {
      // Block the button to dont be able to be playable again
      document.getElementById(btn).style.pointerEvents = "none";
    },

    winMessage: function (id, playerName) {
      // Displays the win message, if is 0 player won, if is 1 it's a draw
      if (id === 0 || id === 1) {
        document.querySelector(DOMvalues.gameFinishDisplay).style.display =
          "block";
        document.querySelector(DOMvalues.gameFinishLabel).innerHTML =
          "Player " + playerName + " won the game!<br>5 seconds to reset!";
        setTimeout(function () {
          document.querySelector(DOMvalues.gameFinishDisplay).style.display =
            "none";
        }, 5000);
      } else if (id === 2) {
        document.querySelector(DOMvalues.gameFinishDisplay).style.display =
          "block";
        document.querySelector(DOMvalues.gameFinishLabel).innerHTML =
          "Draw!<br/><br/>5 seconds to reset!";
        setTimeout(function () {
          document.querySelector(DOMvalues.gameFinishDisplay).style.display =
            "none";
        }, 5000);
      }
    },

    resetUI: function (playerName, wins) {
      // Reset all of the User Interface elements
      var children = document.querySelector(DOMvalues.btnContainer).children;
      for (var i = 0; i < children.length; i++) {
        document.getElementById(children[i].id).style.pointerEvents = "auto";
        document.getElementById(children[i].id).textContent = "";
      }

      this.displayPlayerTurn(playerName, wins);
    },

    displayPlayerTurn: function (playerName, wins) {
      // Change the player name on the display
      document.querySelector(DOMvalues.gameDisplay).innerHTML =
        "Player " + playerName + " its your turn<br>Wins: " + wins;
    },

    getDomValues: function () {
      //Get DOMvalues into public
      return DOMvalues;
    },
  };
})();

// GLOBAL CONTROLLER
var globalController = (function (gameCtrl, UICtrl) {
  // Private methods

  var setupEventListeners = function () {
    // Setup all of the document Event Listeners
    var DOM = UICtrl.getDomValues();
    var playerNumber = -1;
    document.querySelector(DOM.btnP1).addEventListener("click", function () {
      // Wait until the player press the button and pass player number as argument
      playerNumber = 0;
      setupPlayer();
    });
    document.querySelector(DOM.btnP2).addEventListener("click", function () {
      // Wait until the player press the button and pass player number as argument
      playerNumber = 1;
      setupPlayer();
    });
    document.querySelector(DOM.btnAcpt).addEventListener("click", function () {
      // Wait until the player press the button and pass player number as argument
      storePlayerName(playerNumber);
    });

    document.addEventListener("keypress", function (event) {
      // Event to the enter key
      if (event.keyCode === 13 || event.which === 13) {
        // 13 is the key number for the enter key
        storePlayerName(playerNumber);
      }
    });

    // Buttons event listener
    var children = document.querySelector(DOM.btnContainer).children;
    for (let i = 0; i < children.length; i++) {
      document
        .getElementById(children[i].id)
        .addEventListener("click", function () {
          // Add a value to the board array
          gameCtrl.arrayReg(i, gameCtrl.getPlayeTurn());

          // Test if is win
          var win = gameCtrl.checkWinFor();

          // If a player win performs the reset of the game
          if (win === 2) {
            // Message win game
            UICtrl.winMessage(win, "Draw");
            // Reset UI
            UICtrl.resetUI(
              gameCtrl.getPlayers()[0].playerName,
              gameCtrl.getPlayers()[0].wins
            );
            // Reset game data
            gameCtrl.resetGame();
          } else if (win !== undefined) {
            // Message win game
            UICtrl.winMessage(win, gameCtrl.getPlayers()[win].playerName);
            // Reset UI
            UICtrl.resetUI(
              gameCtrl.getPlayers()[0].playerName,
              gameCtrl.getPlayers()[0].wins
            );
            // Reset game data
            gameCtrl.resetGame();
          }

          // Only execute this if no player won
          if (win === undefined) {
            // add Player text content
            UICtrl.changeBtnPlayer(children[i].id, gameCtrl.getPlayeTurn());

            // Block the btn
            UICtrl.blockBtn(children[i].id);

            // Add one more round after the click
            gameCtrl.newRound();
          }

          // Change the display for the current player
          UICtrl.displayPlayerTurn(
            gameCtrl.getPlayers()[gameCtrl.getPlayeTurn()].playerName,
            gameCtrl.getPlayers()[gameCtrl.getPlayeTurn()].wins
          );
        });
    }
  };

  var setupPlayer = function () {
    // Seting a name to the player
    var DOM = UICtrl.getDomValues();
    document.querySelector(DOM.nameLabel).style.display = "block";
  };

  var storePlayerName = function (player) {
    // Insert the name into data object players or change the name if the player is already existent
    var DOM = UIController.getDomValues();
    var name = document.querySelector(DOM.plForm).value;

    if (name === "") {
      // Alert if the form is empty
      alert("You need to insert a name!");
    } else {
      gameCtrl.changePlayerName(player, name);
      // Closes the form
      document.querySelector(DOM.nameLabel).style.display = "none";
      // Update the Label
      UICtrl.playerNameDisplay(
        gameCtrl.getPlayers()[player].playerName,
        player
      );
    }
    if (
      gameCtrl.getPlayers()[0].playerName !== "" &&
      gameCtrl.getPlayers()[1].playerName !== ""
    ) {
      // If the players already took the name, unlock the game
      var DOM = UICtrl.getDomValues();
      UICtrl.unlockGame();
      UICtrl.displayPlayerTurn(
        gameCtrl.getPlayers()[0].playerName,
        gameCtrl.getPlayers()[0].wins
      );
    }

    document.querySelector(DOM.plForm).value = null;
  };

  return {
    // Public methods
    init: function () {
      // Start the process
      console.log("Aplication has started!");
      setupEventListeners();
    },
  };
})(gameController, UIController);

// Call the start process function
globalController.init();
