import { Header } from "../components/Header";
import { Counter } from "../components/Counter";

export function HomePage() {
  return (
    <main>
      <Header heading="Word Counter" subHeading="Online character and word count tool." />
      <Counter />
    </main>
  );
}