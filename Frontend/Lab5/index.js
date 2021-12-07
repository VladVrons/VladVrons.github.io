

function cl1(name)
{
    
    var elem = document.getElementById(name);
    if(elem.style.color =='black') 
        { elem.style.backgroundColor = 'blue';
          elem.style.color = 'white';}
    else 
    { elem.style.backgroundColor = 'yellow';
      elem.style.color = 'black'; }
}


function cl2()
{
    
    var elem = document.querySelector(".b2");
    if(elem.style.color =='white') 
        { elem.style.backgroundColor = 'white';
          elem.style.color = 'red';}
    else 
    { elem.style.backgroundColor = 'green';
      elem.style.color = 'white'; }
}

function cl3()
{
    var elem2 = document.getElementById("text");
    var elem = document.querySelector(".pic");
   
    if(elem2.style.color =='red') 
        { elem.style.width = "300px";
        elem.style.height = "300px";
        elem2.style.color ='black'}
    else 
    { elem.style.width = "500px";
      elem.style.height = "500px"; 
      elem2.style.color ='red'}
}