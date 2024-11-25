import { Plotter } from "./plotter";

export default class Clifford extends Plotter {

  a: number = 0.9;
  b: number = -0.6013;
  c: number = 2.0;
  d: number = 0.5;

  scale: number = 300

  constructor(){
    super({
      x: 0.1, 
      y: 0.1
    })
  }

  transform(x: number, y: number):[number, number]{
    return [
      (x + 0.5) * this.scale,
      (y + 0.5) * this.scale
    ]
  }
  
  calculate():[number, number]{

    const {
      x, y, a, b, c, d
    } = this

    const xt = (x*x) - (y*y) + (a*x) + (b*y);
    const yt = (2*x*y) + (c*x) + (d*y);

    this.x = xt;
    this.y = yt;

    return [
      this.x, 
      this.y
    ]
    
  }
}
