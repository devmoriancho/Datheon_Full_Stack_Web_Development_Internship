"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { filterProducts } from "@/utils/filter";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "electronics", "jewelery", "clothing"];
  const displayableProducts = filterProducts(
    products,
    activeCategory,
    searchQuery,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-brand-border pb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-brand-border bg-brand-card px-4 py-2 text-sm text-brand-text placeholder-slate-400 outline-none focus:border-brand-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
              className={`rounded-lg px-4 py-2 text-xs font-semibold capitalize transition-colors ${
                activeCategory === category
                  ? "bg-brand-primary text-white"
                  : "bg-brand-card text-brand-text border border-brand-border hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {displayableProducts.length === 0 ? (
        <div className="flex h-60 items-center justify-center">
          <p className="text-sm font-medium text-slate-400">
            No products match your search or filter setup.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayableProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
