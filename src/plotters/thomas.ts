import { Plotter } from "./plotter";

export default class BurkeShaw extends Plotter {

  b: number = 0.21;

  scale:number = 50

  constructor(){
    super({
      x: -0.23, 
      y: -0.82, 
      z: -0.4
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
      x, y, z, b
    } = this

    const dx = Math.sin(y) - (b*x)
    const dy = Math.sin(z) - (b*y)
    const dz = Math.sin(x) - (b*z)

    this.x += dx;
    this.y += dy;
    this.z += dz;

    return [
      this.x, 
      this.y, 
      this.z 
    ]
    
  }
}
