// const canvas = document.getElementById("my-canvas");
// // canvas is not full screen by default
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const ctx = canvas.getContext("2d");
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
// const degToRad = (deg) => {
//   return (deg / 180) * Math.PI;
// };
// ctx.beginPath();
// ctx.arc(100, 100, 50, 0, degToRad(180));
// ctx.fill();

// // -------------------------6. Generate Atoms -------------------

// let atoms = [];
// canvas.addEventListener("mousemove", (event) => {
//   for (let i = 0; i < 50; i++) {
//     atoms.push(new Atom(event.x, event.y));
//   }
// });

// const animate = () => {
//   atoms.forEach((atom, index) => {
//     atom.draw();
//     atom.updateSpeed();
//     atom.updateRadius();

//     if (atom.radius < 0.3) {
//       atoms.splice(index, 1);
//     }
//   });
//   ctx.save();
//   ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.restore();
//   requestAnimationFrame(animate);
// };

// class Atom {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.radius = Math.random() * 8 + 2;
//     this.speedX = Math.random() * 4 - 2; // bewtween -2 and +2
//     this.speedY = Math.random() * 4 - 2; // bewtween -2 and +2
//   }
//   updateSpeed() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }

//   updateRadius() {
//     this.radius -= 0.1;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }
// animate();
// -------------------------8. Generate Sky star effect -------------------

// let atoms = [];

// const animate = () => {
//   atoms.forEach((atom, index) => {
//     ctx.fillStyle = "white";
//     atom.draw();
//     atom.updateSpeed();
//     atom.updateRadius();

//     if (atom.radius < 0.3) {
//       atoms.splice(index, 1);
//     }
//   });
//   ctx.save();
//   ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.restore();
//   requestAnimationFrame(animate);
// };
// animate();

// class Atom {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.radius = Math.random() * 2 + 2;
//     this.speedX = Math.random() * 4 - 2; // bewtween -2 and +2
//     this.speedY = Math.random() * 4 - 2; // bewtween -2 and +2
//   }
//   updateSpeed() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }

//   updateRadius() {
//     this.radius -= 0.1;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }
// const generateAtoms = () => {
//   atoms.push(
//     new Atom(Math.random() * canvas.width, Math.random() * canvas.height)
//   );
//   requestAnimationFrame(generateAtoms);
// };
// generateAtoms();

const canvas = document.getElementById("my-canvas");
// canvas is not full screen by default
canvas.width = window.innerWidth / 3;
canvas.height = window.innerHeight / 2;
const ctx = canvas.getContext("2d");

// -------------------------8. Generate Sky star effect -------------------

let atoms = [];
let clicked = false;

const animate = () => {
  atoms.forEach((atom, index) => {
    ctx.fillStyle = "white";
    atom.draw();
    atom.updateSpeed();
    atom.updateRadius();

    if (atom.radius < 0.3) {
      atoms.splice(index, 1);
    }
    // if (index > 100) {
    //   atoms.splice(index, atoms.lenght - index + 1);
    // }
    // if (atom.speedX > 2 || atom.speedY > 2) {
    //   atom.speedX = 1.5;
    //   atom.speedY = 1.5;
    // }
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
let yValue = 0;

document.getElementById("x3").onclick = () => {
  clearArray(atoms);
  const updateAtoms = () => {
    point.x = Math.cos((degree / 180) * Math.PI);
    point.y = -(point.x ** 3);

    // degree++;
    requestAnimationFrame(updateAtoms);
  };
  clicked = true;
  updateAtoms();
  console.log(atoms);
};
document.getElementById("x4").onclick = () => {
  clearArray(atoms);
  const updateAtoms = () => {
    point.x = Math.cos((degree / 180) * Math.PI);
    point.y = -(point.x ** 4);

    // degree++;
    requestAnimationFrame(updateAtoms);
  };
  clicked = true;
  updateAtoms();
};
document.getElementById("x5").onclick = () => {
  clearArray(atoms);
  const updateAtoms = () => {
    point.x = Math.cos((degree / 180) * Math.PI);
    point.y = -(point.x ** 5);

    // degree++;
    requestAnimationFrame(updateAtoms);
  };
  clicked = true;
  updateAtoms();
};

document.getElementById("x").onclick = () => {
  clearArray(atoms);
  clearArray(atoms);
  const updateAtoms = () => {
    point.x = Math.cos((degree / 180) * Math.PI);
    point.y = -point.x;

    // degree++;
    requestAnimationFrame(updateAtoms);
  };
  clicked = true;
  updateAtoms();
};

// if (!clicked) {
const generateAtoms = () => {
  atoms.push(
    new Atom(
      canvas.width / 2 + point.x * 200,
      canvas.height / 2 + point.y * 200
    )
  );
  point.x = Math.cos((degree / 180) * Math.PI);
  point.y = 0;

  degree++;
  requestAnimationFrame(generateAtoms);
};
generateAtoms();

// }

document.getElementById("x2").onclick = () => {
  clearArray(atoms);
  const updateAtoms = () => {
    point.x = Math.cos((degree / 180) * Math.PI);
    point.y = -point.x * point.x;
    // degree++;
    requestAnimationFrame(updateAtoms);
  };
  clicked = true;
  updateAtoms();
};

const clearArray = (array) => {
  while (array.length > 0) {
    array.pop();
  }
};
