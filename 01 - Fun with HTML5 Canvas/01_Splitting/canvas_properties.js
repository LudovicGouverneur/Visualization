
// This files contains the canvas properties as defined by the user and the developper

// TODO : add other functionalities

// Defining the canvas properties 

console.log("before function canvas")
var canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = 500;

// Defining context properties
var ctx = canvas.getContext('2d');

function update_canvas_prop(){
 

    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 12;
    ctx.thinerWidth = document.getElementById("thinerWidth").value;
    ctx.largestWidth = document.getElementById("largestWidth").value;
    console.log("Thiner width" + ctx.thinerWidth)
    console.log(ctx.largestWidth)
    // ctx.globalCompositeOperation = 'multiply';
    return ctx
}
