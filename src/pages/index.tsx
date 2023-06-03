import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href="/icon.png" />
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
      <div className="bgColor textOneColor h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#E8AA42]/80">
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* <section id="experience" className="snap-center">
          <Experience />
        </section> */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </Fragment>
  );
}
