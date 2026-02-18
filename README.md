# Spice Paradise - Indian Food Ordering Site

A full-stack Indian restaurant food ordering platform with ML-powered recommendations, featuring an authentic Indian theme with separate admin and customer portals.

## Project Structure

- `frontend/` - React frontend with Indian-themed modern UI
- `backend/` - Node.js/Express API with MongoDB
- `ml-service/` - Python Flask ML recommendation service
- `dataset/` - Sample Indian restaurant menu data

## Features

### Customer Features
- 🍛 Browse authentic Indian menu with categories
- 🛒 Add items to cart and checkout
- 👤 User authentication and registration
- 📦 View order history with status tracking
- ⭐ ML-based food recommendations
- 🎨 Beautiful Indian-themed UI with gold accents

### Admin Features
- 📊 Comprehensive dashboard with statistics
- 📦 Order management with status updates
- 🍛 Menu item management
- 💰 Revenue tracking
- 📈 Top selling items analytics

## Setup

1. Install dependencies:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
cd ../ml-service && pip install -r requirements.txt
```

2. Configure MongoDB connection in `backend/.env`

3. Import sample Indian menu data:
```bash
cd backend
npm run seed
npm run seed-admin
```

4. Run all services:
```bash
# Option 1: Use PowerShell script
.\start-all.ps1

# Option 2: Run manually in separate terminals
# Terminal 1: cd backend && npm run dev
# Terminal 2: cd ml-service && python app.py
# Terminal 3: cd frontend && npm run dev
```

## Access Credentials

### Admin Login
- Email: `admin@spiceparadise.com`
- Password: `admin123`
- Access: Admin Dashboard with full management capabilities

### Customer Login
- Register a new account at the login page
- Or create your own customer account

## Tech Stack

- Frontend: React, Tailwind CSS (Indian theme), Axios, Zustand
- Backend: Node.js, Express, MongoDB, JWT, bcrypt
- ML Service: Python, Flask, scikit-learn, pandas
- Design: Custom Indian color palette with gold accents

## Color Palette

- Primary: `#FF6B35` (Saffron Orange)
- Secondary: `#F7931E` (Turmeric Yellow)
- Accent: `#C1121F` (Deep Red)
- Gold: `#FFD700` (Golden)
- Cream: `#FFF8DC` (Cream)
- Dark Brown: `#3E2723` (Rich Brown)

## Indian Menu Categories

- 🥟 Appetizers (Samosa, Paneer Tikka, Pakora)
- 🍛 Main Course (Butter Chicken, Biryani, Dal Makhani)
- 🍮 Desserts (Gulab Jamun, Rasmalai, Kulfi)
- 🥤 Beverages (Masala Chai, Lassi, Mango Lassi)
