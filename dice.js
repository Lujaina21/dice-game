'use strict'
  var player1 = "Player 1";
  var player2 = "Player 2";

  // Function to change the player name
  function editNames() {
      player1 = prompt("What's the name of player 1 ?");
      player2 = prompt("What's the name of player 2 ?");

      document.querySelector("p.Player1").innerHTML = player1;  //get
      document.querySelector("p.Player2").innerHTML = player2;  //get
  }

  // Function to roll the dice
  function rollTheDice () {
         setTimeout(function () {           //????????????
          var randomNumber1 = Math.floor(Math.random() * 6) + 1;
          var randomNumber2 = Math.floor(Math.random() * 6) + 1;
           //***********????????????************ */
          document.querySelector(".img1").setAttribute("src",   //IMPPPPPP
              "dice" + randomNumber1 + ".png");

          document.querySelector(".img2").setAttribute("src",
              "dice" + randomNumber2 + ".png");
            //**************??????????********** */
          if (randomNumber1 === randomNumber2) {
              document.querySelector("h1").innerHTML = "Draw!";
          }

          else if (randomNumber1 < randomNumber2) {
              document.querySelector("h1").innerHTML
                              = (player2 + " Wins !");
          }

          else {
              document.querySelector("h1").innerHTML
                              = (player1 + " Wins !");
          }
        } )    //bta3et el fn set timeout
  } //bta3et el function roll the dice