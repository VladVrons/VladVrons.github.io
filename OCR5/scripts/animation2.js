

var ballRadius2 = 1;
var xi = getRandomInt(910) +10;
var yi = 10;
var dxi = 1;
var dyi = 1;


var xi2 = 10;
var yi2 = getRandomInt(370) +10
var dxi2 = 1;
var dyi2 = 1;


function drawBall3()
{
    var element = document.getElementById('ball');
    element.style.left=xi+'px';
    element.style.top=yi+'px';
}
function drawBall4()
{
    var element2 = document.getElementById('ball2');
    element2.style.left=xi2+'px';
    element2.style.top=yi2+'px';
}



function draw2()
 {
    
    drawBall3();
    drawBall4();

    if(xi + dxi > 920 || xi + dxi < ballRadius2) {
        dxi = -dxi;
        addEvent("Touched the wall");
    }
    if(yi + dyi > 355 || yi + dyi < ballRadius2) {
        dyi = -dyi;
        addEvent("Touched the wall");
    }
    
    xi += dxi;
    yi += dyi;

   
    
    if(xi2 + dxi2 > 920 || xi2 + dxi2 < ballRadius2) {
        dxi2 = -dxi2;
        addEvent("Touched the wall");
    }
    if(yi2 + dyi2 > 355 || yi2 + dyi2 < ballRadius2) {
        dyi2 = -dyi2;
        addEvent("Touched the wall");
    }
    
    xi2 += dxi2;
    yi2 += dyi2;


     if( ( Math.abs((xi+dxi) - (xi2+dxi2)) < 45) && ( Math.abs((yi+dyi) - (yi2+dyi2)) < 45) )
    {
        addEvent("Collision!!!");
        dxi=0;
        dyi=0;
        dxi2=0;
        dyi2=0;
        document.getElementById("startb").innerHTML="Reload";
    }
}
