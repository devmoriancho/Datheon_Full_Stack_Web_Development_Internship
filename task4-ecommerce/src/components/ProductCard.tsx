"use client";

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-brand-border bg-brand-card shadow-sm transition-all hover:shadow-md">
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-white p-6">
        <picture className="flex h-full max-h-full max-w-full items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="block h-full max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </picture>

        <span className="absolute top-3 left-3 rounded-md bg-brand-border px-2 py-1 text-xs font-semibold capitalize text-brand-text">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 h-12 text-sm font-semibold leading-tight text-brand-text">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center text-amber-500">
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-bold text-brand-text">
              {product.rating.rate}
            </span>
          </div>
          <span className="text-xs text-slate-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-brand-text">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            type="button"
            className="rounded-lg bg-brand-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
