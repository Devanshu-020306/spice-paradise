import express from 'express'
import Order from '../models/Order.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body)
    res.json(order)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
