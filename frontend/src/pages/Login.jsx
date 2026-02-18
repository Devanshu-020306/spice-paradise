import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useStore } from '../store/useStore'
import Logo from '../components/Logo'
import { API_URL } from '../config'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const setUser = useStore(state => state.setUser)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const endpoint = isLogin ? `${API_URL}/api/auth/login` : `${API_URL}/api/auth/register`
      const data = isLogin 
        ? { email, password, isAdmin } 
        : { name, email, password, role: isAdmin ? 'admin' : 'user' }
      const res = await axios.post(endpoint, data)
      setUser(res.data.user)
      localStorage.setItem('token', res.data.token)
      
      if (res.data.user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/menu')
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Authentication failed')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-gold">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsAdmin(false)}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                !isAdmin 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              👤 Customer
            </button>
            <button
              onClick={() => setIsAdmin(true)}
              className={`flex-1 py-2 rounded-lg font-medium transition ${
                isAdmin 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🔐 Admin
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center text-darkBrown">
            {isLogin ? 'Welcome Back!' : 'Join Us'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full text-white py-3 rounded-lg font-bold text-lg transition shadow-lg ${
                isAdmin 
                  ? 'bg-accent hover:bg-red-700' 
                  : 'bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary'
              }`}
            >
              {isLogin ? '🚀 Login' : '✨ Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-secondary font-bold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

          {isAdmin && isLogin && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800 text-center">
                🔒 Admin access requires special credentials
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
