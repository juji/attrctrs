import { Plotter } from "./plotter";

export default class Halvorsen extends Plotter {

  a: number = 1.4;
  dt: number = 0.005

  scale: number = 15

  constructor(){
    super({
      x: 1,
      y: 0, 
      z: 0
    })
  }

  transform(x: number, y: number, z: number):[number, number, number]{
    return [ 
      (x + 5) * this.scale, 
      (y + 5) * this.scale,
      (z + 5) * this.scale
    ]
  }
  
  calculate():[number, number, number]{

    const {
      x, y, z, a, dt
    } = this

    const dx = -a * x - 4 * y - 4 * z - y * y;
    const dy = -a * y - 4 * z - 4 * x - z * z;
    const dz = -a * z - 4 * x - 4 * y - x * x;

    this.x += dt * dx;
    this.y += dt * dy;
    this.z += dt * dz;

    return [
      this.x, 
      this.y, 
      this.z 
    ]

  }
}
