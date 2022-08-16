const canvas = document.getElementById("my-canvas");
// canvas is not full screen by default
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
// console.log(ctx);
// ctx.beginPath();
// ctx.rect(100, 100, 100, 100);
// // ctx.fill();
// ctx.stroke();

canvas.addEventListener("click", (event) => {
  //   console.log(event.x, event.y);
  ctx.beginPath();
  ctx.rect(event.x, event.y, 10, 10);
  ctx.fill();
});
