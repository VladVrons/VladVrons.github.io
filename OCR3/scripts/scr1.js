
a=5;
h=7;
S=5*7*0.5; 
function Clicked2()
{
document.getElementById("maintext").innerHTML=document.getElementById("maintext").innerHTML+"S="+S;
}

function Clicked1()
{
    r=document.getElementById("rtext").innerText;
    document.getElementById("rtext").innerText=document.getElementById("ltext").innerText;
    document.getElementById("ltext").innerText=r;
}


