import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/food_ordering')
    
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    await User.findOneAndUpdate(
      { email: 'admin@spiceparadise.com' },
      {
        name: 'Admin',
        email: 'admin@spiceparadise.com',
        password: hashedPassword,
        role: 'admin'
      },
      { upsert: true, new: true }
    )
    
    console.log('Admin user created successfully!')
    console.log('Email: admin@spiceparadise.com')
    console.log('Password: admin123')
    
    process.exit(0)
  } catch (err) {
    console.error('Error creating admin:', err)
    process.exit(1)
  }
}

createAdmin()
