import express from 'express'
import Order from '../models/Order.js'
import MenuItem from '../models/MenuItem.js'

const router = express.Router()

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(50)
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.patch('/orders/:id', async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    res.json(order)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/stats', async (req, res) => {
  try {
    const orders = await Order.find()
    const menuItems = await MenuItem.find()
    
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
    
    res.json({
      totalOrders: orders.length,
      totalRevenue,
      totalItems: menuItems.length
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
