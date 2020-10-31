var canvas//documents
var ctx
onload = function(){
    canvas = document.getElementById('cnv');
    ctx = canvas.getContext('2d');
        
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
    loop();
}
function loop(){
    setTimeout(loop, 10);
    draw()
}
function draw(){
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
    a()
}
var size = 50;
var dir = 25;
var ll = 60;
function a(){
    var num = document.getElementById("i")
    dir = num.value
    var g = Math.floor(dir / 10) * 10
    var am =　dir - g
    var loc
    if(g + 40 > 360){
        loc = (g + 40) - 360
    }else{
        loc = g + 40

    }
    //console.log(dir - Math.floor(dir / 10) * 10)
    for(var i = 0; i < 9; i++){
        var posx = (size * 9 - am*(size / 10)) - size * i + ll;
        ctx.beginPath () ;
        ctx.moveTo( posx, 10 ) ;
        ctx.lineTo( posx, 30 )
        ctx.strokeStyle = "#fff" ;
        ctx.lineWidth = 1 ;
        ctx.stroke() ;
        var tx
        if((loc - (i * 10)) < 0){
            tx = (360 + loc) - (i * 10)
        }else{
            tx = loc - (i * 10)
        }
        ctx.strokeStyle = "red" ;
        ctx.font = "10px serif";
        ctx.strokeText(tx, posx - 10, 40 ,20, 20);
        if(tx == 0){
            ctx.font = "40px serif";
            ctx.strokeText('N', posx - 10, 70 ,10, 10);
        }else if(tx == 90){
            ctx.font = "40px serif";
            ctx.strokeText('E', posx - 10, 70 ,10, 10);
        }else if(tx == 180){
            ctx.font = "40px serif";
            ctx.strokeText('S', posx - 10, 70 ,10, 10);
        }else if(tx == 270){
            ctx.font = "40px serif";
            ctx.strokeText('W', posx - 10, 70 ,10, 10);
        }
    }
}