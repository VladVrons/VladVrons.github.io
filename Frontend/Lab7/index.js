

let y = x => 3*Math.cos(2*x);
let scale = 20;
let step = 1;
let cnvs = document.querySelector('canvas');
let ctx = cnvs.getContext('2d');

ctx.lineWidth = 0.5;

for (var i = step*scale; i < cnvs.width; i += step*scale) {
  polyline('#7a7979', [[i, 0], [i, cnvs.height]]);
}

for (var i = step*scale; i < cnvs.height; i += step*scale) { 
  polyline('#7a7979', [[0, i], [cnvs.width, i]]);
}

ctx.lineWidth = 2;
let pts = [];
for(let x = -cnvs.width/2; x<cnvs.width/2; x+=5) {
    pts.push([cnvs.width/2+x, cnvs.height/2 - y(x/scale)*scale]);
}
polyline('blue', pts);


polyline('red', [[0, cnvs.height / 2], [cnvs.width, cnvs.height / 2]]);


polyline('green', [[cnvs.width / 2, 0], [cnvs.width / 2, cnvs.height]]);

function polyline(color, pts) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  pts.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
  ctx.stroke();
}




function trigonometry(x,key)
{
   switch (key) {
      case "sin":
          y = Math.sin(x*Math.PI /180);
          return y
      case "cos":
          y = Math.cos(x*Math.PI /180);
          return y
      case "tan":
          y = Math.tan(x*Math.PI /180);
         return y

    }
}


const form = document.getElementById("form")
function retrieveFV(event){
   event.preventDefault();
   var xd = form.querySelector('[name="angle"]')
   var x = parseInt(xd.value ,10)
   var key = form.querySelector('[name="func"]')
   document.getElementById("mtxt").innerHTML=key.value+ '('+ x + '°) = ' + trigonometry(x,key.value);
 
}
form.addEventListener('submit',retrieveFV)


