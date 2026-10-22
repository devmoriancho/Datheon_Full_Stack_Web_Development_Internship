"use client";

import { useCart } from "@/context/CartContext";
import { Logo } from "./Logo";

interface NavbarProps {
  onCartToggle: () => void;
}

export function Navbar({ onCartToggle }: NavbarProps) {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-brand-card shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold tracking-tight text-brand-text">
            SwiftShop
          </span>
        </div>

        <button
          onClick={onCartToggle}
          type="button"
          className="relative flex items-center justify-center p-2 text-brand-text hover:text-brand-primary transition-colors"
        >
          <svg
            xmlns="http://w3.org"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-white animate-scaleIn">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
