import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ title, image, description, skills, link }) {
  return (
    <div className="bg-nero font-karla rounded-lg my-5 mx-5 tablet:w-96 tablet:h-160">
      <Link href={link} target="_blank" aria-label={`Visit ${title} project`}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full rounded-t-3xl"
        />
        <h3 className="text-white text-2xl font-bold mx-3 my-2">{title}</h3>
        <p className="text-lg text-gray text-2xl font-light mx-3">{description}</p>
      </Link>
      <div className="flex flex-wrap mx-2.5 my-2 justify-center">
        {skills.map(({ name, icon }) => (
          <span
            key={name}
            className="flex items-center text-white text-2xl font-light rounded-full px-1 mx-1 my-1 outline outline-1 outline-white"
          >
            <p className="mr-1">{icon}</p>
            <p>{name}</p>
          </span>
        ))}
      </div>
    </div>
  );
}
