class Particle {
  constructor(effect) {
    this.effect = effect;
    this.radius = Math.random() * 10 + 4;
    this.x =
      this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y =
      this.radius + Math.random() * (this.effect.height - this.radius * 2);
    this.stepx = Math.random() * 1 - 0.5;
    this.stepy = Math.random() * 1 - 0.5;

    this.vx = 0;
    this.vy = 0;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.friction = 0.06;
    this.force = 0;
    this.angle = 0;
  }

  draw(context) {
    // context.fillStyle = `hsl(${this.x * 0.5}, 100%, 50%)`;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    // context.stroke();
  }

  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y - this.y;
    this.distance = Math.hypot(this.dx, this.dy);
    this.force = (this.effect.mouse.radius / this.distance) * 0.06;

    if (
      this.x + this.effect.mouse.radius > this.effect.width ||
      this.x < this.effect.mouse.radius ||
      this.y + this.effect.mouse.radius > this.effect.height ||
      this.y < this.effect.mouse.radius
    ) {
      this.vx = 0;
      this.vy = 0;
    } else if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
    } else {
      this.vx = Math.max(0, this.vx - this.friction);
      this.vy = Math.max(0, this.vy - this.friction);
    }

    this.x += this.vx + this.stepx;

    if (this.x > this.effect.width - this.radius || this.x < this.radius) {
      this.stepx *= -1;
    }

    this.y += this.vy + this.stepy;

    if (this.y > this.effect.height - this.radius || this.y < this.radius) {
      this.stepy *= -1;
    }
  }
}

export default Particle;
