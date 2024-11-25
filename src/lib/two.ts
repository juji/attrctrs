import { debounceReset } from './debounce-reset';
import { DrawParams } from './draw-params';

//
function draw(
  x: number, 
  y: number, 
  context: CanvasRenderingContext2D,
  alpha: number = 0.3
){

  const radius = alpha * 2

  context.beginPath();
  context.arc(
    x,
    y,
    radius,
    0,
    2*Math.PI,
    true
  );
  context.fillStyle = `rgba(255,0,0,${alpha})`
  context.fill()

}

export default function two({
  canvas,
  plotter,
  itterationPerCycle = 3,
  totalCycle = 5000,
  opacity = 0.3,
}:DrawParams){  

  let idx = 0
  let itt = itterationPerCycle
  let cycle = totalCycle
  
  // const total = itt * cycle
  let progress = 0
  let running = true

  let smallScreen = window.innerWidth < 768 || window.innerHeight < 662

  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  canvas.width = window.innerWidth * (smallScreen ? 2 : 1)
  canvas.height = window.innerHeight * (smallScreen ? 2 : 1)
  context.translate(canvas.width/2, canvas.height/2);

  debounceReset(() => {
    
    running = false;
    // onProgress && onProgress( 0 )
    smallScreen = window.innerWidth < 768 || window.innerHeight < 662
    canvas.width = window.innerWidth * (smallScreen ? 2 : 1)
    canvas.height = window.innerHeight * (smallScreen ? 2 : 1)
    
  },() => {
    
    plotter.reset()
    progress = 0
    idx = 0
    running = true
    context.translate(canvas.width/2, canvas.height/2);
    draw(
      plotter.x,
      plotter.y,
      context
    )
    animate()

  })

  // onProgress && onProgress( 0 )

  draw(
    plotter.x,
    plotter.y,
    context
  )

  function animate() {

    if(!running) return;

    if(idx < cycle){

      requestAnimationFrame( animate );

      for ( let i = 0; i < itt; i ++ ) {
        
        const [ ix, iy ] = plotter.calculate()
        const [ x, y ] = plotter.transform(ix, iy)
        
        draw(
          x,
          y,
          context as CanvasRenderingContext2D,
          opacity
        )
        
        progress++;

      }

      // onProgress && onProgress( 100 * progress / total )
      idx++

    }
  }

  animate();

}

