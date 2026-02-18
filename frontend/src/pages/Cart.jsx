import { useStore } from '../store/useStore'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, user } = useStore()
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    if (!user) {
      navigate('/login')
      return
    }

    try {
      await axios.post('/api/orders', {
        items: cart,
        total,
        userId: user._id
      })
      clearCart()
      alert('🎉 Order placed successfully!')
      navigate('/orders')
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Failed to place order')
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-4xl font-bold mb-4 text-darkBrown">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some delicious items to get started!</p>
          <button 
            onClick={() => navigate('/menu')} 
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition"
          >
            🍛 Browse Menu
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-darkBrown text-center">🛒 Your Cart</h1>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-4 border-gold/30">
          {cart.map(item => (
            <div key={item._id} className="flex items-center gap-4 py-4 border-b last:border-b-0">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-darkBrown">{item.name}</h3>
                <p className="text-primary font-bold">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                  className="w-10 h-10 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="w-10 h-10 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition font-bold"
                >
                  +
                </button>
              </div>
              <div className="font-bold text-xl text-primary w-24 text-right">₹{(item.price * item.quantity).toFixed(2)}</div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-700 text-2xl"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl p-8 text-white">
          <div className="flex justify-between text-3xl font-bold mb-6">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-white text-primary py-4 rounded-full text-xl font-bold hover:bg-gold hover:text-darkBrown transition shadow-lg"
          >
            🎉 Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
