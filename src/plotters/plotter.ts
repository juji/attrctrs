
export class Plotter {

  x: number;
  y: number;
  z: number;

  init: [number, number, number];

  // can be 3d or 2d
  constructor({x, y, z}:{
    x: number, 
    y: number, 
    z?: number
  }){
    this.init = [ x, y, z??0 ]
    this.x = x;
    this.y = y;
    this.z = z??0;
  }

  reset(){

    this.x = this.init[0]; 
    this.y = this.init[1];
    this.z = this.init[2]; 

  }

  // transform, to make it pretty
  transform(x:number, y:number, z?:number):number[]{
    throw new Error('The transform method should be overriden')
  }

  calculate():number[]{
    throw new Error('The calculate method should be overriden')
  }
}
