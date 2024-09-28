import { ContactForm } from "../ContactForm";
import { Title } from "../Title";

export function Contact() {
  return (
    <section className="h-full flex flex-col">
      <Title name={"Contact"} />
      <ContactForm />
    </section>
  );
}
