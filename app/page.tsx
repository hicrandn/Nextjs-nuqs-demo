import getMovies from "@/server/movie";
import { loadSearchParams } from "./searchParams";
import type { SearchParams } from "nuqs/server";
import { revalidateTag } from "next/cache";
import MovieFilter from "@/components/movie-filter";
import MovieCard from "@/components/movie-card";
import { NameInput } from "@/components/name-input";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search } = await loadSearchParams(await searchParams);
  const movies = await getMovies({ search });

  async function refetchMovies() {
    "use server";
    await revalidateTag("movies");
  }
  return (
    <main className="flex flex-col items-center justify-center max-w-7xl mx-auto min-h-screen">
      {/* Welcome Section */}
      <div className="w-full text-center py-12 bg-gradient-to-b from-background to-muted/20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Movie Search
        </h1>
        <div className="mb-8">
          <NameInput />
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-2xl mx-auto px-4 mb-12">
        <MovieFilter refetchProducts={refetchMovies} />
      </div>

      {/* Movie List */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(await movies).map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}
