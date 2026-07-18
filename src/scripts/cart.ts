// ---------------------------------------------------------------------------
// CART STORE  ·  framework-agnostic, persisted to localStorage via nanostores.
// Shared by the header badge, product pages, cart drawer and checkout.
// ---------------------------------------------------------------------------
import { persistentAtom } from '@nanostores/persistent';

export interface CartLine {
  id: string; // `${slug}::${size}` — unique per variant
  slug: string;
  name: string;
  price: number;
  size: string; // '' when the product has no size variants
  seed: number; // placeholder-art palette seed
  qty: number;
}

export const cart = persistentAtom<CartLine[]>('nc-cart:v1', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

function lineId(slug: string, size: string): string {
  return `${slug}::${size}`;
}

export interface AddArgs {
  slug: string;
  name: string;
  price: number;
  size?: string;
  seed: number;
  qty?: number;
}

export function addToCart({ slug, name, price, size = '', seed, qty = 1 }: AddArgs): void {
  const id = lineId(slug, size);
  const lines = cart.get();
  const existing = lines.find((l) => l.id === id);
  if (existing) {
    cart.set(lines.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l)));
  } else {
    cart.set([...lines, { id, slug, name, price, size, seed, qty }]);
  }
}

export function setQty(id: string, qty: number): void {
  if (qty <= 0) return removeLine(id);
  cart.set(cart.get().map((l) => (l.id === id ? { ...l, qty } : l)));
}

export function removeLine(id: string): void {
  cart.set(cart.get().filter((l) => l.id !== id));
}

export function clearCart(): void {
  cart.set([]);
}

export function cartCount(lines = cart.get()): number {
  return lines.reduce((n, l) => n + l.qty, 0);
}

export function cartSubtotal(lines = cart.get()): number {
  return lines.reduce((sum, l) => sum + l.price * l.qty, 0);
}

// --- UI event bus for opening/closing the drawer from anywhere -------------
export function openCart(): void {
  document.dispatchEvent(new CustomEvent('cart:open'));
}
export function closeCart(): void {
  document.dispatchEvent(new CustomEvent('cart:close'));
}

export function formatMoney(amount: number, symbol = '$'): string {
  return `${symbol}${amount.toFixed(2)}`;
}
