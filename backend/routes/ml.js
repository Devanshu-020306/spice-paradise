import express from 'express'
import axios from 'axios'

const router = express.Router()

router.get('/recommendations', async (req, res) => {
  try {
    const mlUrl = process.env.ML_SERVICE_URL || 'http://localhost:5001'
    const response = await axios.get(`${mlUrl}/recommend`)
    res.json(response.data)
  } catch (err) {
    res.json([])
  }
})

export default router
