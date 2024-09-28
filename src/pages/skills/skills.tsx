import { Title } from "../../components/Title";
import { SkillCard } from "../../components/SkillCard";

export function Skills() {
  return (
    <section className="h-full flex flex-col text-center desktop:w-1024 desktop:m-auto">
      <main>
        <Title name={"Skills"} />
        <SkillCard />
      </main>
    </section>
  );
}
