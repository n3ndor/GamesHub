import ListGames from "./components/ListGames";
import UnderDevelopment from "./components/UnderDevelopment";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">

      <UnderDevelopment />
      <Hero />

      <ListGames />


    </main>
  );
}
