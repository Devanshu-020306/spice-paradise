import mongoose from 'mongoose'
import dotenv from 'dotenv'
import MenuItem from './models/MenuItem.js'

dotenv.config()

const menuItems = [
  // Appetizers
  { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas', price: 49, category: 'appetizers', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', orderCount: 250, rating: 4.8 },
  { name: 'Paneer Tikka', description: 'Grilled cottage cheese marinated in spices', price: 199, category: 'appetizers', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', orderCount: 180, rating: 4.7 },
  { name: 'Aloo Tikki', description: 'Spiced potato patties served with chutney', price: 69, category: 'appetizers', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400', orderCount: 150, rating: 4.5 },
  { name: 'Pakora', description: 'Mixed vegetable fritters with mint chutney', price: 89, category: 'appetizers', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', orderCount: 120, rating: 4.6 },
  
  // Main Course
  { name: 'Butter Chicken', description: 'Tender chicken in rich tomato and butter gravy', price: 299, category: 'main course', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400', orderCount: 320, rating: 4.9 },
  { name: 'Paneer Butter Masala', description: 'Cottage cheese in creamy tomato sauce', price: 249, category: 'main course', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', orderCount: 280, rating: 4.8 },
  { name: 'Biryani', description: 'Aromatic basmati rice with spices and vegetables', price: 229, category: 'main course', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', orderCount: 350, rating: 4.9 },
  { name: 'Dal Makhani', description: 'Black lentils cooked in butter and cream', price: 189, category: 'main course', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', orderCount: 200, rating: 4.7 },
  { name: 'Chole Bhature', description: 'Spicy chickpeas with fluffy fried bread', price: 149, category: 'main course', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400', orderCount: 190, rating: 4.6 },
  { name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', price: 219, category: 'main course', image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400', orderCount: 160, rating: 4.5 },
  
  // Desserts
  { name: 'Gulab Jamun', description: 'Sweet milk dumplings in sugar syrup', price: 79, category: 'desserts', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400', orderCount: 220, rating: 4.8 },
  { name: 'Rasmalai', description: 'Soft cheese patties in sweet milk', price: 99, category: 'desserts', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', orderCount: 180, rating: 4.7 },
  { name: 'Kulfi', description: 'Traditional Indian ice cream', price: 69, category: 'desserts', image: 'https://images.unsplash.com/photo-1596040033229-a0b3b7e8c5f8?w=400', orderCount: 150, rating: 4.6 },
  { name: 'Jalebi', description: 'Crispy sweet spirals in sugar syrup', price: 59, category: 'desserts', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', orderCount: 130, rating: 4.5 },
  
  // Beverages
  { name: 'Masala Chai', description: 'Spiced Indian tea with milk', price: 39, category: 'beverages', image: 'https://images.unsplash.com/photo-1597318181274-17e0c5a0c9c7?w=400', orderCount: 300, rating: 4.9 },
  { name: 'Lassi', description: 'Sweet yogurt drink', price: 69, category: 'beverages', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400', orderCount: 250, rating: 4.8 },
  { name: 'Mango Lassi', description: 'Mango flavored yogurt drink', price: 89, category: 'beverages', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400', orderCount: 270, rating: 4.9 },
  { name: 'Nimbu Pani', description: 'Fresh lemon water with spices', price: 49, category: 'beverages', image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9d?w=400', orderCount: 180, rating: 4.5 }
]

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/food_ordering')
  .then(async () => {
    await MenuItem.deleteMany({})
    await MenuItem.insertMany(menuItems)
    console.log('Database seeded with Indian menu items successfully!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
