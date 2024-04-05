import Link from "next/link";
import ListGames from "./components/ListGames";

export default function Home() {
  return (
    <main>

      <h1>Next.js Frontend</h1>
      <p className="mt-8">list:</p>
      <div className="flex flex-col mt-10 ml-10">
        <Link className="text-blue-500 " href="/rockpaperscissors">Rock Paper Scissors</Link>
        <Link className="text-blue-500 " href="/guessnumber">Guess Number</Link>
        <Link className="text-blue-500 " href="/biggersmaller">Bigger Smaller</Link>
      </div>
      <ListGames />


    </main>

  );
}
