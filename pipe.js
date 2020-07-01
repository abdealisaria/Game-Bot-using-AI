class Pipe {
  constructor() {
    this.spacing = 220;
    switch (gen) {
      case 1:
        this.spacing = 200;
        break;
      case 2:
        this.spacing = 180;
        break;
      case 3:
        this.spacing = 160;
        break;
      case 4:
        this.spacing = 140;
        break;
      case 5:
        this.spacing = 120;
        break;
      case 6:
        this.spacing = 100;
        break;
      case 7:
        this.spacing = 80;
        break;
      default:
        this.spacing = 80;
        break;
    }

    this.top = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6;
  }

  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }

  show() {
    fill(0, 255, 0);
    rectMode(CORNER);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
