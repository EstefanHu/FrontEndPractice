let canvasElement = document.getElementById("my-canvas");
let canvasContext = canvasElement.getContext("2d");

canvasContext.lineWidth = 10;
canvasContext.strokeStyle = 'blue';
canvasContext.strokeRect(30, 10, 70, 70);
canvasContext.fillStyle = 'red';
canvasContext.fillRect(50, 30, 40, 40);