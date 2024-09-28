import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

export function Home() {
  return (
    <main className="h-screen flex flex-col justify-center px-5 m-auto tablet:w-100 laptop:w-125 desktop:w-140">
      <h1 className="text-white text-4xl font-prompt font-semibold tablet:text-4xl laptop:text-5xl desktop:text-6xl">
        Cleyton Oliveira
      </h1>
      <p className="text-white text-4xl font-prompt font-semibold tablet:text-4xl laptop:text-5xl desktop:text-6xl">is</p>
      <p className="text-white text-4xl font-prompt font-semibold tablet:text-4xl laptop:text-5xl desktop:text-6xl">Full Stack</p>
      <p className="text-white text-4xl font-prompt font-semibold tablet:text-4xl laptop:text-5xl desktop:text-6xl">Developer</p>
      <Link className="flex items-center text-white hover:text-suva-grey font-karla text-3xl mt-12 ml-2" href="docs/CV-Cleyton.Oliveira.pdf" target="_blank" aria-label="Download Cleyton Resume">
        <FaDownload size={30} className="mr-4"/> Resume
      </Link>
    </main>
  );
}
