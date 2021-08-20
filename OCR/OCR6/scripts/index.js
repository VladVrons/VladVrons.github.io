
function Task1()
{
  document.getElementById("popup").style.display="table";
}

function Task2()
{
  document.getElementById("popup2").style.display="table";
}

localStorage.setItem("3","");

let startf=false;
let f1=true;

let cdx=1;
let cdy=-1;

let cdx2=1;
let cdy2=-1;

function Start()
{
  
  if(document.getElementById("startb").innerHTML=="Reload")
  {
    
     x = ballRadius
     y = ballRadius + getRandomInt(canvas.height-30)
     x2 = ballRadius+ getRandomInt(canvas.width);
     y2 = ballRadius;
  }

  addEvent("Start");
  document.getElementById("startb").innerHTML="Pause"
  dx=cdx; dy=cdy; dx2=cdx2; dy2=cdy2;
  startf= !startf;
  document.getElementById("startb").value="pause";

  if(f1) {var mytimer=setInterval(draw, 10); f1=false}
  if(startf==false){ 
    let cdx=dx;
    let cdy=dy;
    let cdx2=dx2;
    let cdy2=dy2; 
    addEvent("Pause");
    document.getElementById("startb").innerHTML="Resume"
    dx=0; dy=0; dx2=0; dy2=0;}
}



function Close(sname)
{
   let wind= document.getElementById(sname);
   wind.style.display="none";
}


function addEvent(str)
{  
  document.getElementById("contr").innerHTML=str;
  document.getElementById("contr2").innerHTML=str;
  s=localStorage.getItem("3");
  
  s=s+"\n"+str+"      ";
  localStorage.setItem("3",s)
}


//s=localStorage.getItem("3");

function Task4()
{
document.getElementById("3").innerHTML=s;
}

function Start22()
{
  //document.getElementById("ball").style.display="table";
  //document.getElementById("ball2").style.display="table";
  setInterval(draw2,5);
}



 cdx=1;
 cdy=-1;

 cdx2=1;
 cdy2=-1;

function Start2()
{
  
  if(document.getElementById("startb2").innerHTML=="Reload")
  {
    alert("fgf")
    xi = getRandomInt(910) +10;
    yi = 10;
    xi2 = 10;
    yi2 = getRandomInt(370) +10
    dxi2 = 1;
    dyi2 = 1;
 
  }

  addEvent("Start");
  document.getElementById("startb2").innerHTML="Pause"
  dxi=cdx; dyi=cdy; dxi2=cdx2; dyi2=cdy2;
  startf= !startf;
  

  if(f1) {var mytimer=setInterval(draw2, 5); f1=false}
  if(startf==false){ 
    let cdx=dxi;
    let cdy=dyi;
    let cdx2=dxi2;
    let cdy2=dyi2; 
    addEvent("Pause");
    document.getElementById("startb2").innerHTML="Resume"
    dxi=0; dyi=0; dxi2=0; dyi2=0;}
}
