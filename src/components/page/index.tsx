'use client'

import { PropsWithChildren, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { ExtraParams } from '@/lib/draw-params'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


type PageProps = PropsWithChildren & {
  title: string
  hash: string
  plotter: string
  threeDim: boolean
  split?: boolean
  extraParams?: ExtraParams
} 

export function Page({
  split,
  title,
  hash,
  children,
  plotter,
  threeDim,
  extraParams
}:PageProps){

  const info = useRef<HTMLDivElement|null>(null)
  function toggleInfo(){
    if(!info.current) return;
    info.current.classList.toggle(styles.open)
  }

  useEffect(() => {

    if(window.innerWidth >= 546){
      toggleInfo()
    }

    Promise.all([
      import(`@/lib/${threeDim?'three':'two'}`).then(v => v.default),
      import(`@/plotters/${plotter}`).then(v => v.default),
    ]).then((v) => {

      const draw = v[0]
      const Plot = v[1]

      console.log('extraParams', extraParams)

      draw({
        canvas: document.querySelector('canvas#canvas') as HTMLCanvasElement,
        plotter: new Plot(),
        ...(extraParams || {})
      })

    })

  },[])

  return <div className={styles.page}>
    <h2 className={styles.title}>{split ? title.split('-').map((v:string,i:number) => {
      return i ? <>-<span>{v}</span></> : v
    }) : title}</h2>
    <div className={styles.canvasContainer}>
      { threeDim ? (
        <canvas id={"canvas"} className={styles.canvas}></canvas>
      ) : (
        <TransformWrapper>
          <TransformComponent>
            <canvas id={"canvas"} className={styles.canvas}></canvas>
          </TransformComponent>
        </TransformWrapper>
      )}
    </div>
    <button className={`${styles.button} ${styles.about}`} 
      onClick={toggleInfo}
      aria-label={`About ${title}`}>about</button>
    <div className={styles.info} ref={info}>
      <button 
        onClick={toggleInfo}
        className={`${styles.button} ${styles.infoClose}`}>&times;</button>
      <div className={styles.infoContent}>
        {children}
      </div>
    </div>
    <a href={hash} className={styles.back} aria-label="Back to Home">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
        fill="currentColor"
      /></svg>
    </a>
    <div id={styles.progress}></div>
  </div>

}
