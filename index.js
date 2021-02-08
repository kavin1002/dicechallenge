var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimage= "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomimage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2= "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomimage2);

if(randomNumber1==randomNumber2){
  document.querySelector("h1").textContent="Draw!";
}
if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins!";
}
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 Wins!";
}
