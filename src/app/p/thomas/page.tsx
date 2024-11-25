import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Thomas | juji",
  description: "Thomas' cyclically symmetric attractor is a 3D strange attractor originally proposed by René Thomas.",
};

export default function AizawaPage(){

  return <Page
    title="Thomas"
    hash="/#thomas"
    plotter="thomas"
    threeDim={true}
    extraParams={{
      opacity: 0.3,
      itterationPerCycle: 1000,
      totalCycle: 1000,
    }}
  >
  <p>
    In the dynamical systems theory, 
    Thomas&apos; cyclically symmetric attractor is a 3D strange attractor 
    originally proposed by René Thomas. 
    It has a simple form which is cyclically symmetric in the x,y, 
    and z variables and can be viewed as the trajectory of a frictionally 
    dampened particle moving in a 3D lattice of forces. 
    The simple form has made it a popular example.
  </p>
  <p>
    Source: <a target="_blank" rel="noreferrer" 
    href="https://en.wikipedia.org/wiki/Thomas%27_cyclically_symmetric_attractor">
    wikipedia.org</a>
  </p>
  <p>
    For me, it looks like Voldermort&apos;s magic.
  </p>
  <p>
    Code: <a target="_blank" rel="noreferrer" 
    href={githubPlotter("thomas.ts")}>
    Github</a>
  </p>
  </Page>

}

