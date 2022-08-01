  var y = Math.floor(Math.random() * 10 + 1);

var x = document.getElementById("guessField").value;


if (x == y){
alert("Congrachulations!!!" +playername+"You Gussed It Right In "
+ guess +"Guess ");
guess=1;
}
  else if( x > y){
guess++
alert("OOps Sorry!! Try a smaller number");
  }
  else{
    guess++
    alert("OOps Sorry!! Try a greater number");
  }

  function playAgain(){
y = Math.floor(Math.random() * 10 + 1);
  }
   
