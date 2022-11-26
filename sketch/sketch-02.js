const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

// const degToRad = (degrees) => {
//   return (degrees / 180) * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    // center of x and y
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const num = 15;
    const radius = width * 0.3;
    let x, y;

    for (let i = 0; i < 12; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);

      context.save();
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.8));

      context.beginPath();
      context.rect(random.range(0, -w * 0.5), random.range(0, -h * 0.5), w, h);
      context.fillStyle = `rgb(
        ${Math.floor(255 - random.range(1, 42) * i)},
        ${Math.floor(255 - random.range(1, 42) * i)},
        ${Math.floor(255 - random.range(1, 42) * i)}`;
      context.fill();
      context.restore();

      // new circle
      context.save();

      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      //  arc ( , , radius, starting angle, ending angle )
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(1, -8),
        slice * random.range(1, 5)
      );

      context.strokeStyle = `rgb(
        ${Math.floor(255 - random.range(1, 42) * i)},
        ${Math.floor(255 - random.range(1, 42) * i)},${Math.floor(
        255 - random.range(1, 42) * i
      )}`;
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
