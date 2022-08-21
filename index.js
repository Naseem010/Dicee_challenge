var randomNumber1=Math.floor((Math.random()*6)+1);
var randomimages="dice"+randomNumber1+".png";
var randomimagesurl="images/"+randomimages;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesurl);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomimages2="dice"+randomNumber2+".png";
var randomimagesurl2="images/"+randomimages2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesurl2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩player1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="🚩player2 wins!";

}
else{
  document.querySelector("h1").innerHTML="🚩DRAW!🚩";

}

// adding click and key for refresh!

function reload(){
  window.location.reload();
}
