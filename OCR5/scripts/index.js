
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

  if(f1) {var mytimer=setInterval(draw, 5); f1=false}
  if(startf==false){ 
    let cdx=dx;
    let cdy=dy;
    let cdx2=dx2;
    let cdy2=dy2; 
    addEvent("Pause");
    document.getElementById("startb").innerHTML="Resume"
    dx=0; dy=0; dx2=0; dy2=0;}
}



function Close()
{
   let wind= document.getElementById("popup");
   wind.style.display="none";
}


function addEvent(str)
{  
  document.getElementById("contr").innerHTML=str;
  s=localStorage.getItem("3");
  s=s+"\n"+str+" ";
  localStorage.setItem("3",s)
}


//s=localStorage.getItem("3");

function Task4()
{
document.getElementById("3").innerHTML=s;
}

Start2()
{
  ballCircle();
}