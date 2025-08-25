"use server";

import { Product } from "@/types";

type GetProductsProps = {
  search?: string;
  itemsPerPage?: number;
};

export async function getProducts({
  search,
  itemsPerPage,
}: GetProductsProps): Promise<Product[]> {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/?title=${search}&offset=0&limit=${itemsPerPage}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}
