import { Title } from "../Title";
import { ProjectsList } from "../ProjectsList";

export function Projects() {
  return (
    <section className="h-full flex flex-col">
      <Title name={"Projects"} />
      <ProjectsList />
    </section>
  );
}
