"use server";

import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
