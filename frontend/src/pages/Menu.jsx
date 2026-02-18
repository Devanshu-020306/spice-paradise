import { useState, useEffect } from 'react'
import axios from 'axios'
import { useStore } from '../store/useStore'

export default function Menu() {
  const [items, setItems] = useState([])
  const [category, setCategory] = useState('all')
  const [recommendations, setRecommendations] = useState([])
  const addToCart = useStore(state => state.addToCart)

  useEffect(() => {
    fetchMenu()
    fetchRecommendations()
  }, [])

  const fetchMenu = async () => {
    try {
      const res = await axios.get('/api/menu')
      setItems(res.data)
    } catch (err) {
      console.error('Error fetching menu:', err)
    }
  }

  const fetchRecommendations = async () => {
    try {
      const res = await axios.get('/api/ml/recommendations')
      setRecommendations(res.data)
    } catch (err) {
      console.error('Error fetching recommendations:', err)
    }
  }

  const categories = [
    { name: 'all', emoji: '🍽️' },
    { name: 'appetizers', emoji: '🥟' },
    { name: 'main course', emoji: '🍛' },
    { name: 'desserts', emoji: '🍮' },
    { name: 'beverages', emoji: '🥤' }
  ]
  const filtered = category === 'all' ? items : items.filter(i => i.category === category)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-darkBrown">Our Menu</h1>
          <p className="text-xl text-gray-600">Discover the taste of authentic Indian cuisine</p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className={`px-6 py-3 rounded-full capitalize whitespace-nowrap font-medium transition transform hover:scale-105 ${
                category === cat.name 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {recommendations.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-gold/20 to-secondary/20 p-6 rounded-2xl border-2 border-gold">
            <h2 className="text-2xl font-bold mb-2 text-darkBrown">⭐ Chef's Special Recommendations</h2>
            <p className="text-gray-700">Based on popular choices and customer favorites</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div key={item._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 border-2 border-transparent hover:border-gold">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-gold text-darkBrown px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ {item.rating || 4.5}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-darkBrown">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:shadow-lg transition font-medium"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
