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
      for (var i = 0; i < 3; i++) {
        if (
          data.board[i][0] === 1 &&
          data.board[i][1] === 1 &&
          data.board[i][2] === 1
        ) {
          alert("Player 1 won");
        } else if (
          data.board[i][0] === 2 &&
          data.board[i][1] === 2 &&
          data.board[i][2] === 2
        ) {
          alert("Player 2 won");
        } else if (
          data.board[0][i] === 1 &&
          data.board[1][i] === 1 &&
          data.board[2][i] === 1
        ) {
          alert("Player 1 won");
        } else if (
          data.board[0][i] === 2 &&
          data.board[1][i] === 2 &&
          data.board[2][i] === 2
        ) {
          alert("Player 2 won");
        } else if (
          data.board[0][0] === 1 &&
          data.board[1][1] === 1 &&
          data.board[2][2] === 1
        ) {
          alert("Player 1 won");
        } else if (
          data.board[0][0] === 2 &&
          data.board[1][1] === 2 &&
          data.board[2][2] === 2
        ) {
          alert("Player 2 won");
        } else if (
          data.board[0][2] === 1 &&
          data.board[1][1] === 1 &&
          data.board[2][0] === 1
        ) {
          alert("Player 1 won");
        } else if (
          data.board[0][2] === 2 &&
          data.board[1][1] === 2 &&
          data.board[2][0] === 2
        ) {
          alert("Player 2 won");
        } else if (data.rounds === 8) {
          alert("Draw");
        }
      }
    },

    // checkWin: function () {
    //   // TODO Converter este algoritmo para for, for 0 para row, 1 para outra row, depois e so checkar de coluna a coluna estaticamente
    //   // Check with the array if a player won the game
    //   if (
    //     data.board[0][0] === 1 &&
    //     data.board[0][1] === 1 &&
    //     data.board[0][2] === 1
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][0] === 2 &&
    //     data.board[0][1] === 2 &&
    //     data.board[0][2] === 2
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[1][0] === 1 &&
    //     data.board[1][1] === 1 &&
    //     data.board[1][2] === 1
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[1][0] === 2 &&
    //     data.board[1][1] === 2 &&
    //     data.board[1][2] === 2
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[2][0] === 1 &&
    //     data.board[2][1] === 1 &&
    //     data.board[2][2] === 1
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[2][0] === 2 &&
    //     data.board[2][1] === 2 &&
    //     data.board[2][2] === 2
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][0] === 1 &&
    //     data.board[1][0] === 1 &&
    //     data.board[2][0] === 1
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][0] === 2 &&
    //     data.board[1][0] === 2 &&
    //     data.board[2][0] === 2
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][1] === 1 &&
    //     data.board[1][1] === 1 &&
    //     data.board[2][1] === 1
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][1] === 2 &&
    //     data.board[1][1] === 2 &&
    //     data.board[2][1] === 2
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][2] === 1 &&
    //     data.board[1][2] === 1 &&
    //     data.board[2][2] === 1
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][2] === 2 &&
    //     data.board[1][2] === 2 &&
    //     data.board[2][2] === 2
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][0] === 1 &&
    //     data.board[1][1] === 1 &&
    //     data.board[2][2] === 1
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][0] === 2 &&
    //     data.board[1][1] === 2 &&
    //     data.board[2][2] === 2
    //   ) {
    //     alert("Player 1 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][2] === 1 &&
    //     data.board[1][1] === 1 &&
    //     data.board[2][0] === 1
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (
    //     data.board[0][2] === 2 &&
    //     data.board[1][1] === 2 &&
    //     data.board[2][0] === 2
    //   ) {
    //     alert("Player 2 wins");
    //     // Show win label

    //     // Reset game
    //   } else if (data.round === 8) {
    //     alert("Draw!");
    //     // Show win label

    //     // Reset game
    //   }
    // },

    getPlayeTurn: function () {
      // If the round es even is player 1 and if the round is odd is player 2
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
    testData: function () {
      return data;
    },
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
  };
  return {
    // Public methods

    unlockGame: function () {
      var children = document.querySelector(DOMvalues.btnContainer).children;
      console.log(children);

      for (var i = 0; i < children.length; i++) {
        document.getElementById(children[i].id).style.pointerEvents = "auto";
        document.getElementById(children[i].id).textContent = "";
      }

      //   document.getElementById("displayText").textContent =
      //     "Player " + players[0].name + " its your turn";
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

    // play: function (rounds, playerName) {
    //   if (rounds % 2 == 0) {
    //     displayPlayerTurn(playerName);
    //   } else {
    //   }
    // },

    displayPlayerTurn: function (playerName) {
      // Change the player name on the display
      document.querySelector(DOMvalues.gameDisplay).textContent =
        "Player " + playerName + " its your turn";
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
        storePlayerName(playerNumber);
      }
    });

    // Buttons event listener
    var children = document.querySelector(DOM.btnContainer).children;
    for (let i = 0; i < children.length; i++) {
      document
        .getElementById(children[i].id)
        .addEventListener("click", function () {
          var playerTurn = gameCtrl.getPlayeTurn();
          //console.log(gameCtrl.getPlayeTurn());

          // Add a value to the board array
          gameCtrl.arrayReg(i, gameCtrl.getPlayeTurn());

          // Test if is win
          gameCtrl.checkWinFor();

          // add Player text content
          UICtrl.changeBtnPlayer(children[i].id, gameCtrl.getPlayeTurn());

          // Block the btn
          UICtrl.blockBtn(children[i].id);

          // Add one more round after the click
          gameCtrl.newRound();

          // Change the display for the current player
          UICtrl.displayPlayerTurn(
            gameCtrl.getPlayers()[gameCtrl.getPlayeTurn()].playerName
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
      // If the players already take the name, unlock the game
      var DOM = UICtrl.getDomValues();
      UICtrl.unlockGame();
      UICtrl.displayPlayerTurn(gameCtrl.getPlayers()[0].playerName);
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

globalController.init();
