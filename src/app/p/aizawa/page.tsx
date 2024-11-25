import type { Metadata } from "next";
import { Page } from "@/components/page";
import { githubPlotter } from "@/utils/github-plotter";


export const metadata: Metadata = {
  title: "Aizawa Attractor | juji",
  description: "The Aizawa attractor is a system of equations that, when applied iteratively on three-dimensional coordinates, evolves in such a way as to have the resulting coordinates map out a three dimensional shape, in this case a sphere with a tube-like structure penetrating one of it's axis.",
};

export default function AizawaPage(){

  return <Page
      title="Aizawa"
      hash="/#aizawa"
      plotter="aizawa"
      threeDim={true}
      extraParams={{
        itterationPerCycle: 10,
        totalCycle: 2000
      }}
    >
      <p>
        The Aizawa attractor is a system of equations that, 
        when applied iteratively on three-dimensional coordinates, 
        evolves in such a way as to have the resulting coordinates 
        map out a three dimensional shape, in this case a sphere with a tube-like 
        structure penetrating one of it's axis.
      </p>
      <p>
        Source: <a target="_blank" rel="noreferrer" 
          href="https://www.algosome.com/articles/aizawa-attractor-chaos.html">
          www.algosome.com</a>
      </p>
      <p>
        Code: <a target="_blank" rel="noreferrer" 
        href={githubPlotter("aizawa.ts")}>
        Github</a>
      </p>
    </Page>

}

