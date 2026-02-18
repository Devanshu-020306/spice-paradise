import { useState, useEffect } from 'react'
import axios from 'axios'
import { useStore } from '../store/useStore'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const user = useStore(state => state.user)

  useEffect(() => {
    if (user) {
      fetchOrders()
    }
  }, [user])

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`/api/orders/${user._id}`)
      setOrders(res.data)
    } catch (err) {
      console.error('Error fetching orders:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-darkBrown text-center">📦 Your Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-8xl mb-4">📦</div>
            <p className="text-2xl text-gray-600">No orders yet</p>
            <p className="text-gray-500 mt-2">Start ordering delicious food!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order._id} className="bg-white rounded-2xl shadow-xl p-6 border-4 border-gold/30 hover:border-gold transition">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-bold text-lg text-darkBrown">#{order._id.slice(-8).toUpperCase()}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(order.createdAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-3xl text-primary">₹{order.total.toFixed(2)}</p>
                    <span className={`inline-block mt-2 px-4 py-2 rounded-full text-sm font-bold ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status === 'delivered' ? '✅ Delivered' :
                       order.status === 'preparing' ? '👨‍🍳 Preparing' :
                       '⏳ Pending'}
                    </span>
                  </div>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <p className="font-bold text-darkBrown mb-3">Order Items:</p>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b last:border-b-0">
                      <span className="text-gray-700">{item.name} <span className="text-primary font-bold">x{item.quantity}</span></span>
                      <span className="font-bold text-darkBrown">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
