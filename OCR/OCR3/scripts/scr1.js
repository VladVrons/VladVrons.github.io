window.onload = function() {
    alert('Страница загружена');
    
    if(localStorage.getItem("F")!="F")
    {
    loadData();
    localStorage.setItem("F","T");
    }
  // к этому моменту страница загружена
  };


maintext.style.color=localStorage.getItem("color");

Stick=true;
function Clicked2()
{
    a=5;
    h=7;
    S=5*7*0.5;  
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

function Clicked4 ()
{
    var input1 =  document.getElementById("colorpick");
    maintext.style.color=input1.value;   
    localStorage.setItem("color",input1.value);
}



function Minimal()
{
   var s = document.getElementById("Digits").value;
   let a=[];
   s=s.split(' ');
   if(s[s.length]==' '){s=s-" "}
   a[0]=parseInt(s[1],10);
   
    for(let i=0; i<s.length; i++)
      {
          a[i]= parseInt(s[i],10);
      }
   let mina=Math.min(...a);
  
   count=0;
   for(let i=0; i<a.length; i++)
   {
        if(mina==a[i]) {count++; }
   }
   
   document.cookie="username=hey";
   alert("Count of min="+count);

      if(confirm("Delete cookies?"))
          {
             document.getElementById("Digits").remove();
             document.getElementById("button3").remove();
             document.cookie = "user=John; max-age=0";
          }
   else
   {
   }
}

   function loadData()
   {
    loadText("header");
    loadText("menu");
    loadText("maintext");
    loadText("rtext");
    loadText("ltext");
    loadText("footer");
   }


    function loadText(name)
    {
        document.getElementById(name).innerText=localStorage.getItem(name);
    }
    function Clicked6()
   {    
     if(confirm("Save to local Storage?"))
          {
            localStorage.setItem("header",document.getElementById("header").innerText);
            localStorage.setItem("menu",document.getElementById("menu").innerText);
            localStorage.setItem("maintext",document.getElementById("maintext").innerText);
            localStorage.setItem("rtext",document.getElementById("rtext").innerText);
            localStorage.setItem("ltext",document.getElementById("ltext").innerText);
            localStorage.setItem("footer",document.getElementById("footer").innerText);
          }
          if(confirm("Clear local Storage?"))
          {
          window.localStorage.clear();
          localStorage.setItem("F","F");
          } 
   }
  


