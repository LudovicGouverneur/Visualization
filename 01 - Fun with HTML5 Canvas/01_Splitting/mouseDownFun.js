

function mouseDownFun(e){
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    console.log(e.offsetX, e.offsetY);
    document.getElementById("positionX").value = e.offsetX;
    document.getElementById("positionY").value = e.offsetY;
};