import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-secondary/20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo className="text-6xl" />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-darkBrown">
            Welcome to <span className="text-primary">Spice Paradise</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Experience the authentic flavors of India 🇮🇳
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition"
            >
              🍛 Explore Menu
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition"
            >
              👤 Login
            </Link>
          </div>
        </div>

        {/* Decorative Pattern */}
        <div className="flex justify-center gap-4 my-12">
          <span className="text-4xl">🪔</span>
          <span className="text-4xl">✨</span>
          <span className="text-4xl">🪔</span>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-4 border-gold/30 hover:border-gold transition transform hover:scale-105">
            <div className="text-6xl mb-4">🍛</div>
            <h3 className="text-2xl font-bold mb-3 text-darkBrown">Authentic Recipes</h3>
            <p className="text-gray-600">Traditional Indian dishes made with love and authentic spices</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-4 border-gold/30 hover:border-gold transition transform hover:scale-105">
            <div className="text-6xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-3 text-darkBrown">Fast Delivery</h3>
            <p className="text-gray-600">Hot and fresh food delivered to your doorstep in 30 minutes</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-4 border-gold/30 hover:border-gold transition transform hover:scale-105">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-3 text-darkBrown">Premium Quality</h3>
            <p className="text-gray-600">Fresh ingredients and traditional cooking methods</p>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-10 text-darkBrown">Popular Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Appetizers', emoji: '🥟', color: 'from-red-400 to-red-600' },
              { name: 'Main Course', emoji: '🍛', color: 'from-orange-400 to-orange-600' },
              { name: 'Desserts', emoji: '🍮', color: 'from-yellow-400 to-yellow-600' },
              { name: 'Beverages', emoji: '🥤', color: 'from-green-400 to-green-600' }
            ].map(cat => (
              <Link 
                key={cat.name}
                to="/menu"
                className={`bg-gradient-to-br ${cat.color} p-6 rounded-xl text-white text-center hover:shadow-2xl transform hover:scale-105 transition`}
              >
                <div className="text-5xl mb-3">{cat.emoji}</div>
                <div className="text-xl font-bold">{cat.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
