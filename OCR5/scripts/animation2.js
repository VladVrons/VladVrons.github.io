var element = document.getElementById('ball');
var angle = 0;
var x3 = 0;
var y3 = 0;
var w = (window.innerWidth - 50) / 2;
var h = (window.innerHeight - 50) / 2;

function ballCircle() {

    x3 = w + w *angle/100
    y3 = h + h *angle/100
    
    ball.style.left = x3 + 'px';
    ball.style.top = y3 + 'px';

    angle++;
    if (angle > 360) {
        angle = 0;
    }
    setTimeout(ballCircle,20);
}
ballCircle();