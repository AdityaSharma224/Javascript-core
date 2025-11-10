import React, { useState, useMemo } from "react";

export default function CartSummary() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Laptop", price: 800, quantity: 1 },
    { id: 2, name: "Mouse", price: 20, quantity: 2 },
    { id: 3, name: "Keyboard", price: 40, quantity: 1 },
  ]);

  // ✅ Memoize derived values — only recompute when cartItems changes
  const { totalItems, totalPrice } = useMemo(() => {
    console.log("Computing totals...");
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { totalItems, totalPrice };
  }, [cartItems]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart Summary (Optimized)</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>

      <button
        onClick={() => 
          setCartItems((prev) =>
            prev.map((item) =>
              item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
            )
          )
        }
      >
        Add One Laptop
      </button>
    </div>
  );
}
