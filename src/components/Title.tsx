import { Title } from "../types/Title";

export function Title({ name }: Title): JSX.Element {
  return (
    <h2 className="text-white text-4xl mx-auto mt-5 font-prompt font-semibold desktop:mb-10 laptop:text-5xl desktop:text-6xl">
      {name}
    </h2>
  );
}
