"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Game } from "@/data/games";
import type { CartItem } from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  addToCart: (game: Game, quantity?: number) => void;
  removeFromCart: (gameId: string) => void;
  updateQuantity: (gameId: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const addToCart = (game: Game, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((item) => item.game.id === game.id);
        if (existing) {
          return current.map((item) =>
            item.game.id === game.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }
        return [...current, { game, quantity }];
      });
      setIsOpen(true);
    };

    const removeFromCart = (gameId: string) => {
      setItems((current) => current.filter((item) => item.game.id !== gameId));
    };

    const updateQuantity = (gameId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(gameId);
        return;
      }
      setItems((current) =>
        current.map((item) =>
          item.game.id === gameId ? { ...item, quantity } : item,
        ),
      );
    };

    return {
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart: () => setItems([]),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((open) => !open),
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce(
        (sum, item) => sum + item.game.price * item.quantity,
        0,
      ),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
}
