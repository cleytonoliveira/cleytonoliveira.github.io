import Head from "next/head";
import "../../styles/globals.css";
import { Home, About, Skills, Projects, Contact } from "../components";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Element } from "react-scroll";

export default function App() {
  return (
    <>
      <Head>
        <title>Cleyton de Oliveira - Software Developer</title>
        <meta name="description" content="Portfolio com todos os projetos de Cleyton de Oliveira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
      {/* <DarkModeSwitch /> */}
    </>
  );
}
