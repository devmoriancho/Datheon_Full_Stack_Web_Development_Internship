import { Product } from "@/types";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=20");

    if (!response.ok) {
      throw new Error("Failed to fetch product catalog data");
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
}
