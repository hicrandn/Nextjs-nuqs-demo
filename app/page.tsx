import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/product-filter";
import { getProducts } from "@/server/product";
import { loadSearchParams } from "./searchParams";
import type { SearchParams } from "nuqs/server";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search, itemsPerPage } = await loadSearchParams(await searchParams);
  const products = await getProducts({ search, itemsPerPage });
  return (
    <main className="flex flex-col gap-10 justify-center max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Product List</h1>
      <ProductFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {(await products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
