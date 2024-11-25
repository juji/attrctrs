import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Tinkerbell | juji",
  description: "Tinkerbell Attractor.",
};

export default function AizawaPage(){

  return <Page
    title="Tinkerbell"
    hash="/#tinkerbell"
    plotter="tinkerbell"
    threeDim={false}
    extraParams={{
      itterationPerCycle: 2500,
      totalCycle: 400,
      opacity: 0.2,
    }}
  >
  <p>
    The Tinkerbell, it looks like a creature with butterfly wings. 
    Some people think this is a 2d projection of a 3d object.
    We may never know..
  </p>
  <p>
    Code: <a target="_blank" rel="noreferrer" 
    href={githubPlotter("tinkerbell.ts")}>
    Github</a>
  </p>
  </Page>

}

