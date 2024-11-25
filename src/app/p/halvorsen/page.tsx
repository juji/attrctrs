import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Halvorsen | juji",
  description: "Halvorsen attractor.",
};

export default function AizawaPage(){

  return <Page
    title="Halvorsen"
    hash="/#halvorsen"
    plotter="halvorsen"
    threeDim={true}
    extraParams={{
      opacity: 0.5,
      itterationPerCycle: 100,
      totalCycle: 1000
    }}
  >
  <p>
    Triangles are interesting.
    I found my self looking at this one, amazed by the triangular shape shown.
  </p>
  <p>
    Attribution: <a target="_blank" rel="noreferrer" href="https://www.vorillaz.com/halvorsen-attractor/">www.vorillaz.com</a>
  </p>
  <p>
    Code: <a target="_blank" rel="noreferrer" 
    href={githubPlotter("halvorsen.ts")}>
    Github</a>
  </p>
  </Page>

}

