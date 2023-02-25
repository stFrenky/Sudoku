const canvas = document.querySelector('.sudoku__field');
const context = canvas.getContext('2d');

const boxSize = 40;
const canvasSize = canvas.width  =  canvas.height = 360;

context.beginPath();
context.moveTo(0, 0);
context.lineTo(canvasSize, 0);
context.lineTo(canvasSize, canvasSize);
context.lineTo(0, canvasSize);
context.lineTo(0, 0);
context.lineJoin = 'round';

context.lineWidth = 2;
context.stroke();


context.beginPath();
// context.strokeStyle(#)

for (let i = boxSize; i <= canvasSize - boxSize; i += boxSize) {
    context.moveTo(i, 0);
    context.lineTo(i, canvasSize);
    context.lineWidth = 2;
    context.stroke()
}

for (let i = boxSize; i <= canvasSize - boxSize; i += boxSize) {
    context.moveTo(0, i);
    context.lineTo(canvasSize, i);
    context.lineWidth = 2;
    context.stroke()
}
