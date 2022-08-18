const canvas = document.getElementById("my-canvas");
// canvas is not full screen by default
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

// -------------------------6. Generate Atoms -------------------

let atoms = [];
canvas.addEventListener("mousemove", (event) => {
  for (let i = 0; i < 50; i++) {
    atoms.push(new Atom(event.x, event.y));
  }
});
const img = new Image();
img.src = "darth.png";
const animate = () => {
  atoms.forEach((atom, index) => {
    atom.draw();
    atom.updateSpeed();
    atom.updateRadius();

    if (atom.radius < 0.3) {
      atoms.splice(index, 1);
    }
  });
  ctx.save();
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  // ctx.drawImage(img, 0, 0);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  requestAnimationFrame(animate);
};

class Atom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 8 + 2;
    this.speedX = Math.random() * 4 - 2; // bewtween -2 and +2
    this.speedY = Math.random() * 4 - 2; // bewtween -2 and +2
  }
  updateSpeed() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  updateRadius() {
    this.radius -= 0.1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
animate();
