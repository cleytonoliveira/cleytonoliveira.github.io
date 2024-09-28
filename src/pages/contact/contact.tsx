import { ContactForm } from "../../components/ContactForm";
import { Title } from "../../components/Title";

export function Contact() {
  return (
    <section className="h-full flex flex-col">
      <Title name={"Contact"} />
      <ContactForm />
    </section>
  );
}
