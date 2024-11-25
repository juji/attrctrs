
// const HairSpace = '•'
const HairSpace = '\u200A'
// const strings = '݆ⴁ⩳ᩀпⶫ⴮Ȕಂ삳ⲧᚇm⃋✾য়쩎ڳᆚฐ⨶᥈ሧ⥍ḙལᎍข⬪˙뜲ⱱஏஂவẜ⌳෌ሮࣨ⶝ӛပ쪜ᣎ℉✑᭥࿐ឣᅨ⳪탍☷ṕቔૈ⌧ᖜΉℓ겚⳩ᬂởᵦᓑⵅề�긺⛸ᰛⲒ╙⃽ဧ̚┇᜴झᐐᷔΚᕽԕנ⍜ᧃ᱇'.split('')
// const strings = 'qwertyuopasdfghjklzxcvbnm`!@#$%^&*()_+-={}[];\':",./<>?'.split('')
const strings = 'qwertyuopasdfghjklzxcvbnm'.split('')
const maxIndex = strings.length - 1

function getRandomString(len: number){
  let i = 0;
  let str = ''
  while(i<len){
    str += strings[ Math.round(Math.random()*maxIndex) ]
    i++
  }
  return str
}

export function randomizeText({
  elm,
  text,
  current,
  stopper
}:{
  elm: HTMLSpanElement
  text: string
  current: string
  stopper: { current: boolean }
}){
  
  if(stopper.current) return;
  
  const currentString = current ? current.split(HairSpace) : ['']
  const nextChar = text.charAt(currentString[0].length)
  let nextString = currentString[0] + (Math.random()<0.5?nextChar:'')
  
  if(nextString === text) {
    elm.innerText = nextString
  }else{
    const random = getRandomString( text.length - currentString[0].length )
    nextString += HairSpace + random
    elm.innerText = nextString
  }

  requestAnimationFrame(() => {
    randomizeText({
      elm,
      text,
      current: nextString,
      stopper
    })
  })

}
