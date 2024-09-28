import Link from "next/link";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa6";

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black h-28 flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-5 text-white">
        <Link className="hover:text-suva-grey" href="https://github.com/cleytonoliveira/" target="_blank" aria-label="Visit Cleyton's Github">
          <FaGithub size={30}/>
        </Link>
        <Link className="hover:text-suva-grey" href="https://www.linkedin.com/in/cleytonoliveirapro/" target="_blank" aria-label="Visit Cleyton's Linkedin">
          <FaLinkedin size={30}/>
        </Link>
      </div>
      <p className="flex text-white text-sm font-karla font-light desktop:text-2xl">
        © {currentYear} - Made with <FaHeart color="red" className="mx-1" /> by Cleyton de Oliveira
      </p>
    </footer>
  );
}
