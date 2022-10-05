
var diceImages = ["images/dice1.png",
                  "images/dice2.png",
                "images/dice3.png",
              "images/dice4.png",
            "images/dice5.png",
          "images/dice6.png"
        ];


var randomNumber1 = Math.floor(Math.random() * diceImages.length);
document.querySelector(".img1").setAttribute("src", diceImages[randomNumber1]);

var randomNumber2 = Math.floor(Math.random() * diceImages.length);
document.querySelector(".img2").setAttribute("src", diceImages[randomNumber2]);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins! 🚩";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
