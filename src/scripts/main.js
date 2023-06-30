// import vevet from './config/vevet';
import Effect from './Effect';
import animate from './animate';
import createCanvas from './createCanvas';

const init = () => {
  const canvasArray = document.querySelectorAll('.canvas');

  if (canvasArray.length !== 0) {
    canvasArray.forEach((canvasDom) => {
      const { canvas, ctx } = createCanvas(canvasDom);

      if (!canvas || !ctx) {
        return;
      }
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      gradient.addColorStop(0, 'white');
      gradient.addColorStop(0.5, 'magenta');
      gradient.addColorStop(1, 'blue');

      ctx.fillStyle = gradient;
      ctx.strokeStyle = 'white';

      const effect = new Effect(canvas);
      // console.log(effect.particlesArray);

      animate(effect, ctx, canvas);
    });
  }
};

export default init;
