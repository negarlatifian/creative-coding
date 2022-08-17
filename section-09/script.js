const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "photo.png";

img.onload = () => {
  canvas.width = img.width / 3;
  canvas.height = img.height / 3;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
