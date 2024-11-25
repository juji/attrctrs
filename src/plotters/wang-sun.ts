import { Plotter } from "./plotter";

export default class WangSun extends Plotter {

  a: number = 0.2;
  b: number = -0.01;
  c: number = 1;
  d: number = -0.4;
  e: number = -1;
  f: number = -1;

  dt: number = 0.01;

  scale: number = 100

  constructor(){
    super({
      x: 1, 
      y: 1, 
      z: 1
    })
  }

  transform(x: number, y: number, z: number):[number, number, number]{
    return [ 
      x * this.scale, 
      y * this.scale, 
      z * this.scale 
    ]
  }
  
  calculate():[number, number, number]{

    const {
      x, y, z, a, b, c, d, e, f, dt
    } = this

    const dx = (a * x) + (c * y * z);
    const dy = (b * x) + (d * y) - (x * z);
    const dz = (e * z) + (f * x * y);

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
