import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "TSUCS | juji",
  description: "The Three Scroll Unified Chaotic System (TSUCS) attractor.",
};

export default function AizawaPage(){

  return <Page
    title="TSUCS 1"
    hash="/#tsucs"
    plotter="tsucs"
    threeDim={true}
    extraParams={{
      itterationPerCycle: 80,
      totalCycle: 1000,
    }}
  >
  <p>
    The Three Scroll Unified Chaotic System (TSUCS) attractor.
    I don&apos;t know why it has a long name, but it looks gorgeous.
  </p>
  <p>
    Attribution: <a target="_blank" rel="noreferrer" href="https://www.deviantart.com/chaoticatmospheres/art/Strange-Attractors-The-TSUCS-1-Attractor-376643333">
      ChaoticAtmospheres</a>
  </p>
  <p>
    Code: <a target="_blank" rel="noreferrer" 
    href={githubPlotter("tsucs.ts")}>
    Github</a>
  </p>
  </Page>

}

