import Link from "next/link";
import ListGames from "./components/ListGames";
import UnderDevelopment from "./components/UnderDevelopment";

export default function Home() {
  return (
    <main>
      <UnderDevelopment />

      <h1 className="text-3xl font-bold m-20 text-center md:text-left">GamesHub</h1>

      <ListGames />


    </main>

  );
}
