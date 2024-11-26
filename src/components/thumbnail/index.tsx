'use client'

import styles from './thumbnail.module.css'
import { useRef } from 'react'
import { randomizeText } from './randomize-text'

type Props = {
  id: string
  href: string
  label: string
  imageSmall: string
  imageMedium: string
  imageLarge: string
  name: string
  animDelay: number
}

export default function Thumbnail({
  id,
  href,
  label,
  imageSmall,
  imageMedium,
  imageLarge,
  name,
  animDelay
}: Props){

  const stopped = useRef(true)

  function onMouseOver(){
    if(!span.current) return;
    stopped.current = false
    randomizeText({
      elm: span.current,
      current: '',
      stopper: stopped,
      text: name
    })
  }

  function onMouseLeave(){
    if(!span.current) return;
    stopped.current = true
    span.current.innerText = ''
  }

  const span = useRef<HTMLSpanElement|null>(null)

  return <a id={id} 
    className={styles.link} 
    onMouseEnter={onMouseOver}
    onMouseLeave={onMouseLeave}
    onTouchStart={onMouseOver}
    onTouchEnd={onMouseLeave}
    onTouchCancel={onMouseLeave}
    href={href}
    aria-label={label}
    data-text={name}
    style={{['--anim-delay' as string]: animDelay}}
  >
    <div>
      <picture>
        <source media="(max-width: 600px)" srcSet={imageSmall} />
        <source media="(min-width: 601px)" srcSet={imageMedium} />
        <source media="(min-width: 3600px)" srcSet={imageLarge} />
        <img src={imageMedium} alt={label}  />
      </picture>
      <span ref={span}></span>
    </div>
  </a>
}