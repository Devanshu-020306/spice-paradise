import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    name: String,
    price: Number,
    quantity: Number
  }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'preparing', 'delivered'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Order', orderSchema)
