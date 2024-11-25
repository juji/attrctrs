import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Burke-Shaw | juji",
  description: "The Burke-Shaw attractor is related to the Lorenz attractor and credited to Bill Burke and Robert Shaw.",
};

export default function AizawaPage(){

  return <Page
      title="Burke-Shaw"
      hash="/#burke-shaw"
      plotter="burke-shaw"
      threeDim={true}
      extraParams={{
        itterationPerCycle: 100,
        totalCycle: 1000,
      }}
    >
    <p>
      The Burke-Shaw attractor is related to the Lorenz attractor and 
      credited to Bill Burke and Robert Shaw.
    </p>
    <p>
      Source: <a target="_blank" rel="noreferrer" 
        href="https://paulbourke.net/fractals/burkeshaw/">
        paulbourke.net</a>
    </p>
    <p>
      Somebody should make this a 3d racetrack.
    </p>
    <p>
      Code: <a target="_blank" rel="noreferrer" 
      href={githubPlotter("burke-shaw.ts")}>
      Github</a>
    </p>
  </Page>

}

