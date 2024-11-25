import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Clifford | juji",
  description: "Clifford attractors are a type of iterative equation that traces the path of a particle through a 2D space using functions of sine and cosine terms.",
};

export default function AizawaPage(){

  return <Page
    title="Clifford"
    hash="/#clifford"
    plotter="clifford"
    threeDim={false}
    extraParams={{
      itterationPerCycle: 2500,
      totalCycle: 400,
    }}
  >
  <p>
    Clifford attractors are a type of iterative equation that traces the path of a 
    particle through a 2D space using functions of sine and cosine terms that make 
    interesting &quot;attractor&quot; patterns (covering only some portions of the possible space, 
    in certain shapes).
  </p>
  <p>
    Source: <a target="_blank" rel="noreferrer" 
      href="https://examples.holoviz.org/attractors/clifford_panel.html">
      holoviz.org</a>
  </p>
  <p>
    Code: <a target="_blank" rel="noreferrer" 
    href={githubPlotter("clifford.ts")}>
    Github</a>
  </p>
  </Page>

}

