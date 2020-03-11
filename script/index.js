var numRandom = Math.random();
numRandom = Math.floor(numRandom * 6) + 1;

var randomImg = "images/" + "dice" + numRandom + ".png";

var dado1 = document.querySelectorAll("img")[0];
dado1.setAttribute("src", randomImg);






var numRandom2 = Math.random();
numRandom2 = Math.floor(numRandom2 * 6) + 1;

var randomImg2 = "images/" + "dice" + numRandom2 + ".png";
var dado2 = document.querySelectorAll("img")[1]
dado2.setAttribute("src", randomImg2);


function ganador(){
    if(numRandom>numRandom2){
        let titulo=document.querySelector("h1")
        titulo.innerHTML="Player 1 win!"
    }
    else if(numRandom===numRandom2){
        let titulo=document.querySelector("h1")
        titulo.innerHTML="Draw again!"
    }
    else{let titulo=document.querySelector("h1")
    titulo.innerHTML="Player 2 win!"}
}
ganador()
