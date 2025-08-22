import ProductCard from "@/components/product-card";

import { getProducts } from "@/server/product";

export default async function Home() {
  const products = getProducts();
  return (
    <main className="flex flex-col gap-10 justify-center max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {(await products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
