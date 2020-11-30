window.onload = function()
 {
   setTimeout(Task2("head"),5000 )
   setTimeout(Task2("foot"),5000 )
  };
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function Task2(name)
  {
      var s1=document.getElementById(name);
      a=getRandomArbitrary(0,255);
      b=getRandomArbitrary(0,255); 
      c=getRandomArbitrary(0,255);
      s1.style.backgroundColor='rgb(' + [a,b,c].join(',') + ')';
  }

  function Task1()
  {
    let j=0;
    var interv=setInterval(() => {  
    r=document.getElementById(1).innerText;
    for (let i=1; i<6; i++)
      {
        document.getElementById(i).innerText=document.getElementById(i+1).innerText;
      }
      j++;
      if(j==6){clearInterval(interv);}
    document.getElementById(6).innerText=r;
    }, 2000);
  }
  



  function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
      
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
 

  
  function Task5()
  {
    var s = document.getElementById("Digits").value;
    let a=[];
    let NaNCount=0;
    s=s.split(' ');
    if(s[s.length]==' '){s=s-" "}
    a[0]=parseInt(s[1],10);
    for(let i=0; i<s.length; i++)
    {
        a[i]=parseFloat(s[i],10);
           
    }
   
    a=a.filter( function(v){return !(v !== v);});
    alert(quickSort(a));
  }



  function cb1(callback){
    console.log("1");
    callback();
  }

  function cb2(){
    console.log('2');
  }

  function Task4(callback1, callback2){
    console.log("start");
    callback1(callback2);
  }


  setInterval(()=>{Task2("main");},5000);



  
  async function task3()
{
   let name=document.getElementById("author").value;
   let repos_name=document.getElementById("repos").value;
  
   let url='https://api.github.com/repos/'+name+'/'+repos_name+'/commits';
   let response= await fetch(url);

   if(response.ok)
   {
   let commits = await response.json();
   var s1;
   let i=0;
   commits.forEach(item =>
     { 
      let str = item.commit.author.name + ": " + item.commit.message;
      s1=s1+"\n"+str;
   });
   
   document.getElementById("popup").style.display="table";
   document.getElementById("popup_text").innerText=s1;
   console.log(s1);
}
   else
   {
    document.getElementById("popup").style.display="table";
    document.getElementById("popup_body").style.backgroundColor="ff5500";
    document.getElementById("popup_title").innerText="ErroR";
    document.getElementById("popup_text").innerText="Репозиторій або користувач не знайдені";
    
   }
}

function Close()
{
   let wind= document.getElementById("popup");
   wind.style.display="none";
}


