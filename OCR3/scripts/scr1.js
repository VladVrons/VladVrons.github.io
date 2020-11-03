window.onload = function() {
    alert('Страница загружена');
    
    maintext.style.color=localStorage.getItem("color");
    // к этому моменту страница загружена
  };


a=5;
h=7;
S=5*7*0.5;


Stick=true;
function Clicked2()
{
    if(Stick)
    {
        document.getElementById("maintext").innerHTML=document.getElementById("maintext").innerHTML+"S="+S;
        Stick=false;
    }

}

function Clicked1()
{
    r=document.getElementById("rtext").innerText;
    document.getElementById("rtext").innerText=document.getElementById("ltext").innerText;
    document.getElementById("ltext").innerText=r;
}

function Clicked3 ()
{
    var input1 =  document.getElementById("colorpick");
    maintext.style.color=input1.value;
    
    localStorage.setItem("color",input1.value);
    //document.getElementById("colorpick").value="ff0000";
}


