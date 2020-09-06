

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "orange";
        ctx.fillRect(10, 10, 500, 500);

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 15;
        ctx.arc(250, 250, 200, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 12;
        ctx.moveTo(145, 145);
        ctx.lineTo(185, 205);
        ctx.moveTo(190, 145);
        ctx.lineTo(145, 205);
        ctx.moveTo(355, 145);
        ctx.lineTo(315, 205);
        ctx.moveTo(305, 145);
        ctx.lineTo(355, 205);
        ctx.moveTo(100, 260);
        ctx.arcTo(130, 310, 250, 310, 50);
        ctx.arcTo(200, 315, 230, 350, 40);
        ctx.arcTo(230, 350, 360, 350, 70);
        ctx.arcTo(300, 340, 400, 370, 40);
        ctx.arcTo(360, 330, 380, 310, 50);
        ctx.arcTo(400, 270, 390, 200, 60);
        ctx.moveTo(360, 320);
        ctx.arcTo(380, 350, 370, 370, 50);
        ctx.moveTo(320, 335);
        ctx.arcTo(340, 400, 385, 360, 25);
        ctx.moveTo(340, 330);       
        ctx.arcTo(355, 355, 345, 375, 30);
        ctx.moveTo(80, 270);
        ctx.lineTo(120, 250);
        ctx.moveTo(380, 240);
        ctx.lineTo(420, 260);
        ctx.stroke();

    }
}

document.getElementById("button1").addEventListener("click", function() {

    document.getElementById("canvas").style.width = "1000px";
    document.getElementById("canvas").style.height = "500px";
})

document.getElementById("button2").addEventListener("click", function() {

    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = "rgba(0, 0, 256, 0.5)";
      ctx.fillRect(10, 10, 500, 500);
    }
})

document.getElementById("button3").addEventListener("click", function() {

    document.getElementById("canvas").style.opacity = "0.5";
})

document.getElementById("button4").addEventListener("click", function() {

    document.getElementById("canvas").style.width = "500px";
    document.getElementById("canvas").style.height = "500px";
    document.getElementById("canvas").style.opacity = "1";
    
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = "orange";
      ctx.fillRect(10, 10, 500, 500);
    
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 15;
        ctx.arc(250, 250, 200, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 12;
        ctx.moveTo(145, 145);
        ctx.lineTo(185, 205);
        ctx.moveTo(190, 145);
        ctx.lineTo(145, 205);
        ctx.moveTo(355, 145);
        ctx.lineTo(315, 205);
        ctx.moveTo(305, 145);
        ctx.lineTo(355, 205);
        ctx.moveTo(100, 260);
        ctx.arcTo(130, 310, 250, 310, 50);
        ctx.arcTo(200, 315, 230, 350, 40);
        ctx.arcTo(230, 350, 360, 350, 70);
        ctx.arcTo(300, 340, 400, 370, 40);
        ctx.arcTo(360, 330, 380, 310, 50);
        ctx.arcTo(400, 270, 390, 200, 60);
        ctx.moveTo(360, 320);
        ctx.arcTo(380, 350, 370, 370, 50);
        ctx.moveTo(320, 335);
        ctx.arcTo(340, 400, 385, 360, 25);
        ctx.moveTo(340, 330);       
        ctx.arcTo(355, 355, 345, 375, 30);
        ctx.moveTo(80, 270);
        ctx.lineTo(120, 250);
        ctx.moveTo(380, 240);
        ctx.lineTo(420, 260);
        ctx.stroke();
    }
})

document.getElementById("surprise").addEventListener("click", function() {

    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = "rgba(200, 0, 0, 0.8)";
      ctx.fillRect(10, 10, 500, 500);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(70, 70, 450, 450);

      ctx.fillStyle = "rgba(0, 200, 0, 0.4)";
      ctx.fillRect(100, 100, 375, 375);

      ctx.fillStyle = "rgba(200, 200, 0, 0.8)";
      ctx.fillRect(40, 40, 200, 200);

      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(185, 185, 150, 150);
      ctx.clearRect(205, 205, 110, 110);
    }
})