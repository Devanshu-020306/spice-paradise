import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ 
      name, 
      email, 
      password: hashedPassword,
      role: role || 'user'
    })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret')
    res.json({ 
      user: { _id: user._id, name: user.name, email: user.email, role: user.role }, 
      token 
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body
    const user = await User.findOne({ email })
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    if (isAdmin && user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access denied' })
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret')
    res.json({ 
      user: { _id: user._id, name: user.name, email: user.email, role: user.role }, 
      token 
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
