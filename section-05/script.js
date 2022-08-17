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

// canvas.addEventListener("mousemove", (event) => {
//   //   console.log(event.x, event.y);
//   ctx.beginPath();
//   ctx.rect(event.x, event.y, 10, 30);
//   ctx.fill();
// });

// -------------------------5. Drawing Circle -------------------
const degToRad = (deg) => {
  return (deg / 180) * Math.PI;
};
ctx.beginPath();
ctx.arc(100, 100, 50, 0, degToRad(180));
ctx.fill();
