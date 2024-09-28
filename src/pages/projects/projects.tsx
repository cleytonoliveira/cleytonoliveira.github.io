import { Title } from "../../components/Title";
import { ProjectsList } from "../../components/ProjectsList";

export function Projects() {
  return (
    <section className="h-full flex flex-col">
      <Title name={"Projects"} />
      <ProjectsList />
    </section>
  );
}
