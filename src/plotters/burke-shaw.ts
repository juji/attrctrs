import { Plotter } from "./plotter";

export default class BurkeShaw extends Plotter {

  s: number = 10;
  v: number = 4.272;
  dt: number = 0.01;
  scale:number = 200;

  constructor(){
    super({
      x: 1, 
      y: 0, 
      z: 0
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
      x, y, z, s, v
    } = this

    const dx = -s * ( x + y )
    const dy = -y - ( s * x * z )
    const dz = ( s * x * y ) + v

    this.x += this.dt * dx;
    this.y += this.dt * dy;
    this.z += this.dt * dz;

    return [
      this.x, 
      this.y, 
      this.z 
    ]
    
  }
}
