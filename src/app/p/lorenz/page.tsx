import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Lorenz Attractor | juji",
  description: "The Lorenz system is a system of ordinary differential equations first studied by mathematician and meteorologist Edward Lorenz.",
};

export default function LorenzPage(){

  return <Page
      title="Lorenz"
      hash="/#lorenz"
      plotter="lorenz"
      threeDim={true}
      extraParams={{
        scale: 15,
        itterationPerCycle: 50,
        totalCycle: 1000,
      }}
    >
    <p>
      The Lorenz system is a system of ordinary differential equations 
      first studied by mathematician and meteorologist Edward Lorenz. 
    </p>
    <p>
      In popular media the "butterfly effect" stems from the real-world 
      implications of the Lorenz attractor, 
      namely that several different initial chaotic conditions evolve in phase 
      space in a way that never repeats, so all chaos is unpredictable.
    </p>
    <p>
      Source: <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Lorenz_system">Wikipedia</a>
    </p>
    <p>
      Code: <a target="_blank" rel="noreferrer"
      href={githubPlotter("lorenz.ts")}>
      Github</a>
    </p>
  </Page>

}

