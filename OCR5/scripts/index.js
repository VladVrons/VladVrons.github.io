function Task1()
{
  document.getElementById("popup").style.display="table";
  document.getElementById("popup_text").innerText="Hi what's up!";
}

function Start()
{
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
setInterval(draw, 5);
}





function Close()
{
   let wind= document.getElementById("popup");
   wind.style.display="none";
}


