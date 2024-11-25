import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Rayleigh-Benard | juji",
  description: "Rayleigh-Benard Attractor.",
};

export default function AizawaPage(){

  return <Page
    title="Rayleigh-Benard"
    hash="/#rayleigh-benard"
    plotter="rayleigh-benard"
    threeDim={true}
    extraParams={{
      itterationPerCycle: 60,
      totalCycle: 1000,
    }}
>
<p>
  Rayleigh-Benard. Upon creating this one, It struck me: Why does the shape of butterfly comes up often?
  What is it about butterfly? Are they the secret guardians of the world..?
</p>
<p>This one looks like Lorenz's.</p>

<div style={{width:'100%',height:'0',paddingBottom:'41%',position:'relative'}}>
  <iframe src="https://giphy.com/embed/RnnPrNRmrF0wTgA3az" width="100%" height="100%" 
    style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p>
    <a style={{fontSize: "8px"}} href="https://giphy.com/gifs/RnnPrNRmrF0wTgA3az">via GIPHY</a></p>
{/* <p>
  <img 
  style="width: 100%; height: auto;"
  src="/images/the-interview-same-here.gif" alt="same but different but still same meme" />
</p> */}
<p>
  Code: <a target="_blank" rel="noreferrer" 
  href={githubPlotter("rayleigh-benard.ts")}>
  Github</a>
</p>
</Page>

}

