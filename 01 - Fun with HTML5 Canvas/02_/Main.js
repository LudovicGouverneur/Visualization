// Defining the function draw


ctx = update_canvas_prop();

// Listen to event to trigger or untrigger draw

canvas.addEventListener('mousedown', (e) => mouseDownFun(e))
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
document.getElementById("btn_update_line_width").addEventListener('click', update_canvas_prop);

