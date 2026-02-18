import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import Logo from './Logo'

export default function Navbar() {
  const { cart, user, setUser } = useStore()
  const navigate = useNavigate()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className="bg-gradient-to-r from-primary via-secondary to-accent shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/">
            <Logo className="text-white" />
          </Link>
          
          <div className="flex gap-6 items-center text-white">
            <Link to="/menu" className="hover:text-gold transition font-medium flex items-center gap-1">
              <span>🍛</span> Menu
            </Link>
            <Link to="/cart" className="relative hover:text-gold transition font-medium flex items-center gap-1">
              <span>🛒</span> Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="hover:text-gold transition font-medium flex items-center gap-1">
                    <span>📊</span> Dashboard
                  </Link>
                )}
                <Link to="/orders" className="hover:text-gold transition font-medium flex items-center gap-1">
                  <span>📦</span> Orders
                </Link>
                <div className="flex items-center gap-3">
                  <span className="text-sm">👤 {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-cream transition font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login" className="bg-white text-primary px-6 py-2 rounded-lg hover:bg-gold hover:text-white transition font-medium">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
