# Spice Paradise - Indian Food Ordering Site

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-16+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen)
![Python](https://img.shields.io/badge/Python-3.8+-yellow)

A full-stack Indian restaurant food ordering platform with ML-powered recommendations, featuring an authentic Indian theme with separate admin and customer portals.

## ✨ Features

### 🎨 Beautiful Indian Theme
- Custom "Spice Paradise" logo with mandala design
- Vibrant color palette (saffron, turmeric, gold, deep red)
- Traditional decorative elements
- Responsive and modern UI

### 👥 Dual Portal System

**Customer Portal:**
- 🍛 Browse authentic Indian menu
- 🛒 Shopping cart with real-time updates
- 📦 Order tracking with status updates
- ⭐ ML-powered recommendations
- 👤 User authentication

**Admin Portal:**
- 📊 Comprehensive dashboard
- 📦 Order management system
- 💰 Revenue analytics
- 🍛 Menu overview
- 📈 Top selling items

### 🤖 ML Recommendations
- Popular items based on order history
- Content-based filtering
- Similar item suggestions

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB
- Python 3.8+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/devanshupatil02/spice-paradise-food-ordering.git
cd spice-paradise-food-ordering
```

2. **Install dependencies**
```powershell
# Root dependencies
npm install

# Frontend
cd frontend
npm install
cd ..

# Backend
cd backend
npm install
cd ..

# ML Service
cd ml-service
pip install -r requirements.txt
cd ..
```

3. **Setup environment**
```powershell
# Copy and configure backend .env
cd backend
copy .env.example .env
# Edit .env with your MongoDB URI
cd ..
```

4. **Seed database**
```powershell
cd backend
npm run seed
npm run seed-admin
cd ..
```

5. **Run the application**

Open 3 separate terminals:

**Terminal 1 - Backend:**
```powershell
cd backend
npm run dev
```

**Terminal 2 - ML Service:**
```powershell
cd ml-service
python app.py
```

**Terminal 3 - Frontend:**
```powershell
cd frontend
npm run dev
```

6. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- ML Service: http://localhost:5001

## 🔑 Login Credentials

### Admin Access
- **Email:** `admin@spiceparadise.com`
- **Password:** `admin123`
- **Features:** Full dashboard, order management, analytics

### Customer Access
- Register a new account at the login page
- Browse menu, place orders, track deliveries

## 📁 Project Structure

```
spice-paradise-food-ordering/
├── frontend/              # React + Tailwind CSS
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── store/        # State management
│   └── package.json
├── backend/              # Node.js + Express
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js
├── ml-service/          # Python + Flask
│   ├── app.py          # ML recommendation engine
│   └── requirements.txt
├── dataset/            # Sample menu data
└── README.md
```

## 🎨 Color Palette

- **Primary:** `#FF6B35` (Saffron Orange)
- **Secondary:** `#F7931E` (Turmeric Yellow)
- **Accent:** `#C1121F` (Deep Red)
- **Gold:** `#FFD700` (Golden)
- **Cream:** `#FFF8DC` (Cream)
- **Dark Brown:** `#3E2723` (Rich Brown)

## 🍛 Menu Categories

- **🥟 Appetizers:** Samosa, Paneer Tikka, Pakora, Aloo Tikki
- **🍛 Main Course:** Butter Chicken, Biryani, Dal Makhani, Palak Paneer
- **🍮 Desserts:** Gulab Jamun, Rasmalai, Kulfi, Jalebi
- **🥤 Beverages:** Masala Chai, Lassi, Mango Lassi, Nimbu Pani

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Axios
- Zustand (State Management)
- React Router

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- bcrypt

### ML Service
- Python
- Flask
- scikit-learn
- pandas
- numpy

## 📸 Screenshots

### Home Page
Beautiful landing page with Indian theme and category showcase

### Menu Page
Browse authentic Indian dishes with filtering by category

### Admin Dashboard
Comprehensive analytics and order management system

### Cart & Checkout
Smooth ordering experience with real-time updates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Devanshu Patil**
- GitHub: [@devanshupatil02](https://github.com/devanshupatil02)

## 🙏 Acknowledgments

- Indian cuisine inspiration
- Open source community
- All contributors

## 📞 Support

For support, email devanshupatil374@gmail.com or create an issue in the repository.

---

Made with ❤️ and 🌶️ by Devanshu Patil
