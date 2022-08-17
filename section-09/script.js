const canvas = document.getElementById("my-canvas");
// canvas is not full screen by default
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

// -------------------------8. Generate Sky star effect -------------------

let atoms = [];

const animate = () => {
  atoms.forEach((atom, index) => {
    ctx.fillStyle = "white";
    atom.draw();
    atom.updateSpeed();
    atom.updateRadius();

    if (atom.radius < 0.3) {
      atoms.splice(index, 1);
    }
  });
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  requestAnimationFrame(animate);
};
animate();

class Atom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 2 + 2;
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

const point = {
  x: 0,
  y: 0,
};

let degree = 0;

const generateAtoms = () => {
  atoms.push(
    new Atom(
      canvas.width / 2 + point.x * 200,
      canvas.height / 2 + point.y * 200
    )
  );
  point.x = Math.cos((degree / 180) * Math.PI);
  point.y = point.x * point.x * point.x;
  degree++;
  requestAnimationFrame(generateAtoms);
};
generateAtoms();
