import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Wang-Sun | juji",
  description: "Wang-Sun Attractor.",
};

export default function AizawaPage(){

  return <Page
    title="Wang-Sun"
    hash="/#wang-sun"
    plotter="wang-sun"
      threeDim={true}
      extraParams={{
        itterationPerCycle: 500,
        totalCycle: 600
      }}
  >
  <p>
    Wang-Sun Attractor: This one really looks like a four-winged butterfly.
  </p>
  <p>
    Attribution: <a target="_blank" rel="noreferrer" href="http://www.3d-meier.de/tut19/Seite99.html">
      www.3d-meier.de</a>
  </p>
  <p>
    Code: <a target="_blank" rel="noreferrer" 
    href={githubPlotter("wang-sun.ts")}>
    Github</a>
  </p>
  </Page>

}

