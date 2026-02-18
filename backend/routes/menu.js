import express from 'express'
import MenuItem from '../models/MenuItem.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find({ available: true })
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id)
    res.json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
