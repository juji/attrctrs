import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Chen-Lee | juji",
  description: "The chaotic Chen-Lee system was developed with a formalism based on the Euler equations for the motion of a rigid body. It was proved that this system is the governing set of equations for gyro motion with feedback control.",
};

export default function AizawaPage(){

  return <Page
      title="Chen-Lee"
      hash="/#chen-lee"
      plotter="chen-lee"
      threeDim={true}
      extraParams={{
        itterationPerCycle: 1000,
        totalCycle: 200,
        opacity: 0.5
      }}
    >
    <p>
      The chaotic Chen-Lee system was developed with a formalism based on the Euler equations for the motion of a rigid body. It was proved that this system is the governing set of equations for gyro motion with feedback control.
    </p>
    <p>
      Source: <a target="_blank" rel="noreferrer" 
        href="https://www.vorillaz.com/chen-lee-attractor/">
        www.vorillaz.com</a>
    </p>
    <p>
      Code: <a target="_blank" rel="noreferrer" 
      href={githubPlotter("chen-lee.ts")}>
      Github</a>
    </p>
    </Page>

}

