


function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");
  var table = document.createElement('TABLE');
  table.border = '1';
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  var k =0;
  for (var i = 0; i < 6; i++) {
      var tr = document.createElement('TR');
      
      tableBody.appendChild(tr);
      for (var j = 0; j < 6; j++) {
          var td = document.createElement('TD');                    
          td.width = '30';
          td.height = '30';
          k+=1;
          
          td.id="t"+k;
          td.appendChild(document.createTextNode(k));
          tr.appendChild(td);
      }
  }
  myTableDiv.appendChild(table);
}           

 addTable()




 let test = document.getElementById("t24");
 test.addEventListener("mouseover", function( event ) {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   event.target.style.backgroundColor = "#" + randomColor;

 }, false);
 test.addEventListener("mouseout", function( event ) {
   event.target.style.backgroundColor = "";

 }, false);
 


let ki =1
 let arr = new Array();
for (let i=0; i < 6; i++) {
  arr[i] = new Array();
  for (let j=0; j < 6; j++){
    arr[i][j]=ki;
    ki++
  }
}


 document.getElementById("t24").onclick = function cl()
 { 
   let chcolor = document.getElementById("colorpick").value;
   for (let i=0; i < 6; i++) {
      for (let j=0; j < 6; j++){
        if(i+j == 5)
        {
         document.getElementById("t"+arr[i][j]).style.backgroundColor=chcolor;
        }
      }
   } 
 }
  

 

 var d1,d2,d3,d4,d5;
 function validate(){
   var x1=document.forms['form']['name'].value;
   var x2=document.forms['form']['group'].value;
   var x3=document.forms['form']['va'].value;
   var x4=document.forms['form']['phone'].value;
   var x5=document.forms['form']['email'].value;
   
   if (x1.length==0){
      document.getElementById('namef').innerHTML='*необхідно заповнити';
      return false;
   }
   
  
   if (x3.length==0){
      document.getElementById('vaf').innerHTML='*необхідно заповнити';
      return false;
   }
   if (x4.length==0){
      document.getElementById('phonef').innerHTML='*необхідно заповнити';
      return false;
   }
  

   if (x2.length==0){
      document.getElementById('groupf').innerHTML='*необхідно заповнити';
      return false;
   }
   at2=x2.indexOf("-");
  
 
   if (at2<1){
      document.getElementById('groupf').innerHTML='*немає символу - ';
      return false;
   }

   if (x5.length==0){
      document.getElementById('emailf').innerHTML='*необхідно заповнити';
      return false;
   }

   at=x5.indexOf("@");
   dot=x5.indexOf(".");
 
   if (at<1 || dot <1){
      document.getElementById('emailf').innerHTML='*email введений не вірно';
      return false;
   }


       document.getElementById('1').innerHTML=+x1;
       document.getElementById('2').innerHTML=+x2;
       document.getElementById('3').innerHTML=+x3;
       document.getElementById('4').innerHTML=+x4;
       document.getElementById('5').innerHTML=+x5;
   
}





