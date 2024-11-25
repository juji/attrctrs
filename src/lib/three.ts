import * as THREE from 'three';
import { debounceReset } from '@/lib/debounce-reset';
import { DrawParams } from './draw-params';
import { ArcballControls } from 'three/addons/controls/ArcballControls.js';

export default function three({
  canvas,
  plotter,
  itterationPerCycle = 3,
  totalCycle = 5000,
  opacity = 0.9,
}: DrawParams){
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
  camera.position.z = 500;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });
  renderer.setSize( window.innerWidth, window.innerHeight);
  renderer.setClearColor( 0x000000, 0 )
  renderer.autoClear = true

  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial( { 
    color: 0xff0000,
    transparent: true,
    opacity
  } );
  const points = new THREE.Points( geometry, material );
  scene.add(points);

  const controls = new ArcballControls( camera, renderer.domElement, scene );
  controls.enablePan = false
  controls.dampingFactor = 1
  controls.wMax = 3
  controls.maxDistance = 2000
  controls.minDistance = 100
  controls.setGizmosVisible(false)
  controls.addEventListener( 'change', function () {
    renderer.render( scene, camera );
  } );

  let vert: number[] = [
    plotter.x,
    plotter.y,
    plotter.z
  ]

  let idx = 0
  let itt = itterationPerCycle;
  let cycle = totalCycle;
  let progress = 0
  let running = true

  debounceReset(() => {

    running = false;
    renderer.clear()
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    
  },() => {

    plotter.reset()
    progress = 0
    idx = 0
    running = true
    vert = [
      plotter.x,
      plotter.y,
      plotter.z
    ]
    animate()

  }, 500)

  function animate() {
    if(!running) return;

    
    if(idx < cycle){
      for ( let i = 0; i < itt; i ++ ) {
        const [ ix, iy, iz ] = plotter.calculate()
        const [ x, y, z ] = plotter.transform(
          ix, 
          iy, 
          iz
        )

        vert.push(x, y, z);
        progress++;
      }
      geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vert, 3 ) );
      points.geometry = geometry
      idx++
    }
    
    renderer.render( scene, camera );
    
    requestAnimationFrame( animate );
  }

  animate();

}

