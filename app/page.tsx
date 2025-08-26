import getMovies from "@/server/product";
import { loadSearchParams } from "./searchParams";
import type { SearchParams } from "nuqs/server";
import { revalidateTag } from "next/cache";
import MovieFilter from "@/components/product-filter";
import MovieCard from "@/components/product-card";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search, itemsPerPage } = await loadSearchParams(await searchParams);
  const movies = await getMovies({ search, itemsPerPage });

  async function refetchMovies() {
    "use server";
    await revalidateTag("movies");
  }
  return (
    <main className="flex flex-col gap-10 justify-center max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Film Arama</h1>
      <MovieFilter refetchProducts={refetchMovies} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {(await movies).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </main>
  );
}
