# Food Ordering Site - Setup Guide

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running on localhost:27017)
- Python 3.8+ with pip

## Installation Steps

### 1. Install Dependencies

Open PowerShell and run each command separately:

```powershell
# Root dependencies
npm install

# Frontend dependencies
cd frontend
npm install
cd ..

# Backend dependencies
cd backend
npm install
cd ..

# ML Service dependencies
cd ml-service
pip install -r requirements.txt
cd ..
```

### 2. Setup MongoDB

Make sure MongoDB is running on `mongodb://localhost:27017`

### 3. Seed Database

```powershell
cd backend
npm run seed
cd ..
```

### 4. Start All Services

#### Option A: Use the PowerShell script
```powershell
.\start-all.ps1
```

#### Option B: Start manually in separate terminals

Terminal 1 - Backend:
```powershell
cd backend
npm run dev
```

Terminal 2 - ML Service:
```powershell
cd ml-service
python app.py
```

Terminal 3 - Frontend:
```powershell
cd frontend
npm run dev
```

## Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- ML Service: http://localhost:5001

## Features

- User registration and login
- Browse menu by categories
- Add items to cart
- Place orders
- View order history
- ML-powered recommendations

## Default Test User

You can create a new account or use the registration form at http://localhost:3000/login

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in `backend/.env`

### Port Already in Use
- Change ports in respective config files:
  - Frontend: `frontend/vite.config.js`
  - Backend: `backend/.env`
  - ML Service: `ml-service/app.py`

### Python Package Issues
- Update pip: `python -m pip install --upgrade pip`
- Try installing packages individually
