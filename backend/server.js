import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import menuRoutes from './routes/menu.js'
import orderRoutes from './routes/orders.js'
import mlRoutes from './routes/ml.js'
import adminRoutes from './routes/admin.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/food_ordering')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

app.use('/api/auth', authRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/ml', mlRoutes)
app.use('/api/admin', adminRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
