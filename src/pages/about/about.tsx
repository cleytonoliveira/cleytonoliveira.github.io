import { Title } from "../../components/Title";
import cleyton from "../../../public/cleyton.png";
import Image from "next/image";

export function About() {
  return (
    <section className="h-full flex flex-col text-center">
      <main>
        <Title name={"About"} />
        <Image
          src={cleyton}
          alt="Homem pardo de cabelo e olhos castanho escuro, com barba, camisa preta e braços cruzados"
          width={192}
          height={192}
          className="object-cover rounded-full h-48 w-48 m-auto my-20"
        />
        <p className="text-xl font-karla text-white font-light text-base mx-10 leading-7 tracking-tight">
          Brazilian.
        </p>
        <p className="text-xl font-karla text-white font-light text-base mx-10 leading-7 tracking-tight">
          Passionate about Tech, Martial Arts, and continuous learning.
        </p>
        <p className="text-xl font-karla text-white font-light text-base mb-28 mx-10 leading-7 tracking-tight">
          Full Stack Developer since 2020.
        </p>
      </main>
    </section>
  );
}
