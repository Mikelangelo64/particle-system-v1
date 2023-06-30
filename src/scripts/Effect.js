import Particle from './Particle';

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particles = [];
    this.numberOfParticles = 600;
    this.createParticles();
    this.mouse = {
      radius: 100,
      x: undefined,
      y: undefined,
    };

    window.addEventListener('mousemove', (evt) => {
      this.mouse.x = evt.x;
      this.mouse.y = evt.y;
    });
  }

  createParticles() {
    for (let i = 0; i < this.numberOfParticles; i += 1) {
      this.particles.push(new Particle(this));
    }
  }

  handleParticles(context) {
    this.connectsParticles(context);

    this.particles.forEach((particle) => {
      particle.draw(context);
      particle.update();
    });
  }

  connectsParticles(context) {
    const maxDistance = 100;

    for (let a = 0; a < this.particles.length; a += 1) {
      for (let b = a; b < this.particles.length; b += 1) {
        const dx = this.particles[a].x - this.particles[b].x;
        const dy = this.particles[a].y - this.particles[b].y;

        const distance = Math.hypot(dx, dy);

        if (distance < maxDistance) {
          context.save();
          const opacity = 1 - distance / maxDistance;
          context.globalAlpha = opacity;
          context.beginPath();
          context.moveTo(this.particles[a].x, this.particles[a].y);
          context.lineTo(this.particles[b].x, this.particles[b].y);
          context.stroke();
          context.restore();
        }
      }

      const dx = this.mouse.x - this.particles[a].x;
      const dy = this.mouse.y - this.particles[a].y;

      const distance = Math.hypot(dx, dy);

      if (distance < maxDistance) {
        context.save();
        const opacity = 1 - distance / maxDistance;
        context.globalAlpha = opacity;
        context.beginPath();
        context.moveTo(this.mouse.x, this.mouse.y);
        context.lineTo(this.particles[a].x, this.particles[a].y);
        context.stroke();
        context.restore();
      }
    }
  }
}

export default Effect;
