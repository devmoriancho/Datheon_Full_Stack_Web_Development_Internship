"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    shipping,
    total,
  } = useCart();

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handleCheckoutSubmit = () => {
    setShowCheckoutModal(true);
  };

  const handleCloseAll = () => {
    setShowCheckoutModal(false);
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fadeIn">
        <div
          onClick={onClose}
          className="absolute inset-0"
          aria-hidden="true"
        />

        <div className="relative flex h-full w-full max-w-md flex-col bg-brand-card shadow-2xl border-l border-brand-border">
          <div className="flex h-16 items-center justify-between border-b border-brand-border px-4">
            <h2 className="text-lg font-bold text-brand-text">
              Your Shopping Cart
            </h2>
            <button
              onClick={onClose}
              type="button"
              className="rounded-lg p-2 text-slate-400 hover:text-brand-text transition-colors"
            >
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-sm font-medium text-slate-400">
                  Your cart is completely empty.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 rounded-lg border border-brand-border p-3 bg-white shadow-sm"
                >
                  <div className="h-20 w-20 flex-shrink-0 items-center justify-center bg-white p-2 border border-brand-border rounded-md">
                    <picture>
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="h-full w-full object-contain"
                      />
                    </picture>
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="line-clamp-2 text-xs font-semibold text-brand-text leading-tight">
                        {item.product.title}
                      </h4>
                      <p className="mt-1 text-sm font-bold text-brand-text">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-border rounded-lg bg-slate-50 overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          type="button"
                          className="px-2 py-1 text-sm font-bold hover:bg-slate-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-semibold text-brand-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          type="button"
                          className="px-2 py-1 text-sm font-bold hover:bg-slate-200 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        type="button"
                        className="text-xs font-medium text-brand-accent hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-brand-border bg-slate-50 p-4 space-y-3">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Subtotal</span>
                <span className="font-semibold text-brand-text">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Estimated Tax (10%)</span>
                <span className="font-semibold text-brand-text">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Shipping Fee</span>
                <span className="font-semibold text-brand-text">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between border-t border-brand-border pt-3 text-base font-bold text-brand-text">
                <span>Total Amount</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckoutSubmit}
                type="button"
                className="mt-2 w-full rounded-xl bg-brand-primary py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700 active:scale-98"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-sm rounded-2xl bg-brand-card p-6 shadow-2xl border border-brand-border text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-text">
                Order Confirmed!
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-normal">
                Thank you for your purchase. Your simulated transfer has gone
                through successfully and your basket has been cleared.
              </p>
            </div>

            <button
              onClick={handleCloseAll}
              type="button"
              className="w-full rounded-xl bg-brand-text py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Return to Storefront
            </button>
          </div>
        </div>
      )}
    </>
  );
}
