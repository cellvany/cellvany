import { useState, useCallback } from 'react';

const STORAGE_KEY = 'cellvany_cart';

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function useCart() {
  const [cart, setCart] = useState(loadCart);

  const add = useCallback((product) => {
    setCart((prev) => {
      const next = [...prev];
      const idx = next.findIndex((i) => i.id === product.id);
      if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
      else next.push({ ...product, qty: 1 });
      saveCart(next);
      return next;
    });
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) return;
    setCart((prev) => {
      const next = prev.map((i) => (i.id === id ? { ...i, qty } : i));
      saveCart(next);
      return next;
    });
  }, []);

  const remove = useCallback((id) => {
    setCart((prev) => {
      const next = prev.filter((i) => i.id !== id);
      saveCart(next);
      return next;
    });
  }, []);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.priceNum * i.qty, 0);

  return { cart, add, updateQty, remove, totalItems, totalPrice };
}
