
import { Plotter } from "./plotter";

export default class Lorenz extends Plotter {
  
  a: number = 10.0;
  b: number = 28.0;
  c: number = 8.0 / 3.0;
  t: number = 0.01; 

  scale: number = 20

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
      (z - 30) * this.scale
    ]
  }
  
  calculate():[number, number, number]{

    const {
      x, y, z, a, b, c, t
    } = this

    const xt = x + t * a * (y - x);
    const yt = y + t * (x * (b - z) - y);
    const zt = z + t * (x * y - c * z);
  
    this.x = xt;
    this.y = yt;
    this.z = zt;
  
    return [
      this.x, 
      this.y, 
      this.z 
    ]
  }
}
