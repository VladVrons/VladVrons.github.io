


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function getRadians(degrees) 
{
	return (Math.PI / 180) * degrees;
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = ballRadius
var y = ballRadius + getRandomInt(canvas.height-30)
var x2 = ballRadius+ getRandomInt(canvas.width);
var y2 = ballRadius;

var dx = 1;
var dy = -1;

var dx2 = 1;
var dy2 = -1;
let copyd=dx;


function drawBall1() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawBall2() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall1();
    drawBall2();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
  

    if(x2 + dx2 > canvas.width-ballRadius || x2 + dx2 < ballRadius) {
        dx2 = -dx2;
    }
    if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }
    x2 += dx2;
    y2 += dy2;





    if( ( Math.abs((x+dx) - (x2+dx2)) < ballRadius*1.5) && ( Math.abs((y+dy) - (y2+dy2)) < ballRadius*1.5) )
    {
        dx=0;
        dy=0;
        dx2=0;
        dy2=0;
        document.getElementById("startb").innerHTML="Reload";
    }


    
}



