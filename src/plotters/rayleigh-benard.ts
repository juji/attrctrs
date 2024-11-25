import { Plotter } from "./plotter";

export default class RayleighBenard extends Plotter {

  a: number = 8;
  r: number = 34;
  b: number = 3;
  dt: number = 0.01

  scale: number = 10

  constructor(){
    super({
      x: 0.1, 
      y: 0, 
      z: 0
    })
  }

  transform(x: number, y: number, z: number):[number, number, number]{
    return [
      x * this.scale,
      y * this.scale,
      (z - 34) * this.scale
    ]
  }
  
  calculate():[number, number, number]{

    const {
      x, y, z, a, r, b, dt
    } = this

    const dx = (-a * x) + (a * y);
    const dy = (r * x) - y - (x * z);
    const dz = (x * y) - (b * z);

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
