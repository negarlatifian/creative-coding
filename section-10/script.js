const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "yoda.png";
const img2 = new Image();
img2.src = "luke.png";
const img3 = new Image();
img3.src = "obi-wan.png";

let brightnessArray = [];
let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.brightness = 0;
    this.velocity = Math.random() * 2.5 + 0.1;
    this.radius = Math.random() * 1.5 + 0.1;
  }
  update() {
    this.y += this.velocity;
    if (this.y >= canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
    const index = Math.floor(this.y - 1) * canvas.width + Math.floor(this.x);
    this.brightness = brightnessArray[index];
    // console.log(this.brightness);
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height / 2;
  ctx.drawImage(img, 0, 50, canvas.width / 3, canvas.height / 1.5);
  ctx.drawImage(img2, 150, 100, canvas.width / 3, canvas.height / 1.5);
  ctx.drawImage(img3, 300, 100, canvas.width / 3, canvas.height / 1.5);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < imgData.data.length; i++) {
    const indx = i * 4;
    const red = imgData.data[i * 4];
    const green = imgData.data[indx + 1];
    const blue = imgData.data[i * 4 + 2];
    // const alpha = imgData.data[i*4 +3]
    const brightness = (red + green + blue) / 3;
    // console.log(red);
    // console.log(green);
    brightnessArray.push(brightness);
  }

  // generate 10,000 particles
  for (let i = 0; i < 10000; i++) {
    particlesArray.push(new Particle());
  }
  // console.log(brightnessArray);

  const animate = () => {
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => {
      particle.update();
      ctx.globalAlpha = particle.brightness * 0.002;
      particle.draw();
    });
    requestAnimationFrame(animate);
  };
  animate();
};
