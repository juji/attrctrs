import { Footer } from '@/components/footer';
import './page.css'
import { Attractors } from '@/components/attractors';

export default function Home() {
  return (<>
      <header>
        <a href="https://jujiplay.com">
          <img src="/logo.svg" alt="juji playing with attractors"  />
          <span>ATTRCTRS</span>
        </a>
      </header>
      <Attractors />
      <Footer />
    </>
  );
}
