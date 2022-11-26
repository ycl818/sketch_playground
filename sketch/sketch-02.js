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
    context.fillStyle = "#333";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    // center of x and y
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const num = 12;
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
      context.scale(random.range(1, 3), 1);

      context.beginPath();
      context.rect(-w / 2, -h / 2, w, h);
      context.fill();
      context.restore();

      // new circle
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.beginPath();
      //  arc ( , , radius, starting angle, ending angle )
      context.arc(0, 0, radius, 0, slice * 0.6);
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
