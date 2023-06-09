import { Fragment, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Head from "next/head";
import useViewportHeight from "@/hooks/useViewportHeight";

export default function Home() {
  const [snap, setSnap] = useState(true);
  useViewportHeight();

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href="image/icon.png" />
        <title>Filip Wielechowski</title>

        <meta
          property="description"
          content="Filip Wielechowski - React Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Filip Wielechowski - React Developer Portfolio"
        />
        <meta
          name="keywords"
          content="filip wielechowski react developer javascript typescript nextjs next.js redux tailwind postcss git"
        />
        <meta property="og:image" content="image/fbogimage.jpg" />
        <meta property="og:image:secure_url" content="image/fbogimage.jpg" />
        <meta property="og:title" content="Filip Wielechowski Portfolio" />
        <meta property="og:url" content="https://wielechowski.me/" />
        <meta property="og:type" content="website" />

        <link rel="apple-touch-icon" href="image/appletouch.jpg" />
      </Head>
      <div className="viewportHeight bgColor textOneColor snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#E8AA42]/80">
        <Header snap={snap} />
        <section id="hero" className={`${snap ? "snap-start" : ""}`}>
          <Hero setSnap={setSnap} />
        </section>
        <section id="about" className={`${snap ? "snap-start" : ""}`}>
          <About />
        </section>
        <section id="skills" className={`${snap ? "snap-start" : ""}`}>
          <Skills />
        </section>
        <section id="projects" className={`${snap ? "snap-start" : ""}`}>
          <Projects snap={snap} />
        </section>
        <section id="contact" className={`${snap ? "snap-start" : ""}`}>
          <Contact />
        </section>
      </div>
    </Fragment>
  );
}
