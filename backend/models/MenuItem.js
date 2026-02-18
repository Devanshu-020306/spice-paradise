import mongoose from 'mongoose'

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  available: { type: Boolean, default: true },
  rating: { type: Number, default: 4.5 },
  orderCount: { type: Number, default: 0 }
})

export default mongoose.model('MenuItem', menuItemSchema)
