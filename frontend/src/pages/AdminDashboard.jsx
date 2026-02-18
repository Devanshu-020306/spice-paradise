import { useState, useEffect } from 'react'
import axios from 'axios'
import { useStore } from '../store/useStore'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalOrders: 0, totalRevenue: 0, totalUsers: 0, totalItems: 0 })
  const [orders, setOrders] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [activeTab, setActiveTab] = useState('overview')
  const user = useStore(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login')
      return
    }
    fetchDashboardData()
  }, [user, navigate])

  const fetchDashboardData = async () => {
    try {
      const [ordersRes, menuRes] = await Promise.all([
        axios.get('/api/admin/orders'),
        axios.get('/api/menu')
      ])
      
      setOrders(ordersRes.data)
      setMenuItems(menuRes.data)
      
      const totalRevenue = ordersRes.data.reduce((sum, order) => sum + order.total, 0)
      setStats({
        totalOrders: ordersRes.data.length,
        totalRevenue,
        totalUsers: 0,
        totalItems: menuRes.data.length
      })
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
    }
  }

  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.patch(`/api/admin/orders/${orderId}`, { status })
      fetchDashboardData()
    } catch (err) {
      console.error('Error updating order:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-darkBrown mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your restaurant operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-3xl font-bold">{stats.totalOrders}</div>
            <div className="text-sm opacity-90">Total Orders</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-3xl font-bold">₹{stats.totalRevenue.toFixed(2)}</div>
            <div className="text-sm opacity-90">Total Revenue</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl mb-2">🍛</div>
            <div className="text-3xl font-bold">{stats.totalItems}</div>
            <div className="text-sm opacity-90">Menu Items</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-3xl font-bold">4.5</div>
            <div className="text-sm opacity-90">Avg Rating</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition ${
              activeTab === 'overview'
                ? 'text-primary border-b-4 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 font-medium transition ${
              activeTab === 'orders'
                ? 'text-primary border-b-4 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            📦 Orders
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-6 py-3 font-medium transition ${
              activeTab === 'menu'
                ? 'text-primary border-b-4 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            🍛 Menu
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-darkBrown">Recent Orders</h2>
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order._id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-bold text-lg">Order #{order._id.slice(-6)}</p>
                      <p className="text-sm text-gray-600">{new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-primary">₹{order.total.toFixed(2)}</p>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                        className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="preparing">Preparing</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm py-1">
                        <span>{item.name} x{item.quantity}</span>
                        <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-darkBrown">Menu Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map(item => (
                <div key={item._id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition">
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">₹{item.price}</span>
                    <span className="text-sm text-gray-500">Orders: {item.orderCount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-darkBrown">Recent Activity</h2>
              <div className="space-y-3">
                {orders.slice(0, 5).map(order => (
                  <div key={order._id} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                    <div className="text-2xl">🛍️</div>
                    <div className="flex-1">
                      <p className="font-medium">New order #{order._id.slice(-6)}</p>
                      <p className="text-sm text-gray-600">{new Date(order.createdAt).toLocaleTimeString()}</p>
                    </div>
                    <div className="font-bold text-primary">₹{order.total.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-darkBrown">Top Selling Items</h2>
              <div className="space-y-3">
                {menuItems
                  .sort((a, b) => b.orderCount - a.orderCount)
                  .slice(0, 5)
                  .map((item, idx) => (
                    <div key={item._id} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                      <div className="text-2xl font-bold text-primary">#{idx + 1}</div>
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.orderCount} orders</p>
                      </div>
                      <div className="font-bold text-primary">₹{item.price}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
