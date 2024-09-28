// import Link from "next/link";
import { Link } from "react-scroll";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Header(): JSX.Element {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <header className="fixed top-5 right-5">
      <button className="text-white text-2xl font-prompt font-semibold" onClick={handleMenu} aria-label="Menu Button">
        <FiMenu size={40} />
      </button>
      {menu ? (
        <div className="fixed top-0 left-0 w-full h-full bg-eerie-black z-50">
          <div className="fixed top-5 right-5">
            <button className="text-white text-2xl font-prompt font-semibold" onClick={handleMenu} aria-label="Close Button">
              <FiX size={40} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full gap-y-4">
            <Link to="home" onClick={handleMenu} smooth={true} duration={500} className="text-white text-4xl font-prompt font-semibold hover:text-gray-300">
              Home
            </Link>
            <Link to="about" onClick={handleMenu} smooth={true} duration={500} className="text-white text-4xl font-prompt font-semibold hover:text-gray-300">
              About
            </Link>
            <Link to="skills" onClick={handleMenu} smooth={true} duration={500} className="text-white text-4xl font-prompt font-semibold hover:text-gray-300">
              Skills
            </Link>
            <Link to="projects" onClick={handleMenu} smooth={true} duration={500} className="text-white text-4xl font-prompt font-semibold hover:text-gray-300">
              Projects
            </Link>
            <Link to="contact" onClick={handleMenu} smooth={true} duration={500} className="text-white text-4xl font-prompt font-semibold hover:text-gray-300">
              Contact
            </Link>
            <div className="flex gap-4 mt-16 text-white">
              <a className="hover:text-suva-grey" href="https://github.com/cleytonoliveira/" target="_blank" aria-label="Visit Cleyton's Github">
                <FaGithub size={40}/>
              </a>
              <a className="hover:text-suva-grey" href="https://www.linkedin.com/in/cleytonoliveirapro/" target="_blank" aria-label="Visit Cleyton's Linkedin">
                <FaLinkedin size={40}/>
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>

  );
}
