import { Plotter } from "./plotter";

export default class Svensson extends Plotter {

  // introduce chaos a little
  a: number = (1.4 + Math.random()) * (Math.random()<0.5?-1:1);
  b: number = 1.56;
  c: number = 1.4;
  d: number = -6.56; 
  scale: number = 10

  constructor(){
    super({
      x: 0,
      y: 0
    })
  }

  reset(){
    super.reset()
    this.a = (1.4 + Math.random()) * (Math.random()<0.5?-1:1)
  }

  transform(x: number, y: number):[number, number]{
    return [
      x * this.scale * 0.7,
      y * this.scale
    ]
  }
  
  calculate():[number, number]{

    const {
      x, y, a, b, c, d
    } = this

    const xt = d * Math.sin(a * x) - Math.sin(b * y);
    const yt = c * Math.cos(a * x) + Math.cos(b * y);

    this.x = xt;
    this.y = yt;

    return this.transform( this.x, this.y )
    
  }
}
