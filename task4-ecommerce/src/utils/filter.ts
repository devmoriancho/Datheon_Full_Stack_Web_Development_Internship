import { Product } from "@/types";

export function filterProducts(
  products: Product[],
  selectedCategory: string,
  searchQuery: string,
): Product[] {
  const normalizedQuery = searchQuery.toLowerCase().trim();

  return products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(normalizedQuery);

    if (selectedCategory === "all") {
      return matchesSearch;
    }

    if (selectedCategory === "clothing") {
      const isClothing =
        product.category === "men's clothing" ||
        product.category === "women's clothing";
      return matchesSearch && isClothing;
    }

    const matchesCategory =
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });
}
