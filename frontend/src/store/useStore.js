import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  cart: [],
  setUser: (user) => set({ user }),
  addToCart: (item) => set((state) => {
    const existing = state.cart.find(i => i._id === item._id)
    if (existing) {
      return {
        cart: state.cart.map(i => 
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] }
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(i => i._id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    cart: state.cart.map(i => i._id === id ? { ...i, quantity } : i)
  })),
  clearCart: () => set({ cart: [] }),
  logout: () => set({ user: null, cart: [] })
}))
