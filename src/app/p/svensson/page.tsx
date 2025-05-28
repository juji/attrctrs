import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Svensson | juji",
  description: "The Johnny Svensson Attractor (created by Johnny Svensson) is a twist on the Peter de Jong attractor.",
};

export default function AizawaPage(){

  return <Page
    title="Svensson"
    hash="/#svensson"
    plotter="svensson"
    threeDim={false}
    extraParams={{
      itterationPerCycle: 2500,
      totalCycle: 400
    }}
  >
  <p>
    The Johnny Svensson Attractor (created by Johnny Svensson) is a twist on the{' '}
    <a href="https://www.google.com/search?q=Peter+de+Jong+attractor" 
      target="_blank"
      rel="noreferrer">Peter de Jong attractor</a>.
  </p>
  <p>
    Source: <a target="_blank" rel="noreferrer" 
      href="https://sequelaencollection.home.blog/2d-chaotic-attractors/">
      sequelaencollection.home.blog</a>
  </p>
  <p>The image is skewed, to make it look more like a ring.</p>
  <p>Sadly, Johnny Svensson does not live in Mordor.</p>
  <p>
    Code: <a target="_blank" rel="noreferrer" 
    href={githubPlotter("svensson.ts")}>
    Github</a>
  </p>
  </Page>

}

