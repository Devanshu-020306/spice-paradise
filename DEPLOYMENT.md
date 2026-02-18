# Deployment Guide

## Quick GitHub Upload

Your repository is ready! Follow these steps:

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `spice-paradise-food-ordering`
3. Description: `🍛 Full-stack Indian restaurant food ordering platform with ML recommendations, admin dashboard, and beautiful Indian-themed UI`
4. Choose Public or Private
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"

### 2. Push Your Code

Run these commands in PowerShell:

```powershell
# Add your GitHub repository as remote
git remote add origin https://github.com/devanshupatil02/spice-paradise-food-ordering.git

# Push your code
git push -u origin main
```

If you get an authentication error, you'll need to use a Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use the token as your password when pushing

### 3. Verify Upload

Visit your repository at:
`https://github.com/devanshupatil02/spice-paradise-food-ordering`

## Repository Topics

Add these topics to your repository for better discoverability:
- `react`
- `nodejs`
- `mongodb`
- `express`
- `machine-learning`
- `food-ordering`
- `restaurant`
- `indian-cuisine`
- `tailwindcss`
- `python`
- `flask`
- `admin-dashboard`

## Future Updates

To update your repository after making changes:

```powershell
git add .
git commit -m "Your commit message"
git push
```

## Deploy to Production

### Frontend (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/dist`

### Backend (Heroku/Railway)
1. Add Procfile: `web: cd backend && node server.js`
2. Set environment variables
3. Connect MongoDB Atlas

### ML Service (Render/Railway)
1. Add requirements.txt
2. Set start command: `cd ml-service && python app.py`
3. Configure port

## Environment Variables for Production

Create these in your hosting platform:

**Backend:**
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Random secure string
- `PORT`: 5000
- `ML_SERVICE_URL`: URL of your ML service

**Frontend:**
- `VITE_API_URL`: Your backend URL

## Security Checklist

- ✅ .env files are in .gitignore
- ✅ No sensitive data in code
- ✅ Strong JWT secret
- ✅ Password hashing enabled
- ✅ CORS configured properly
- ✅ Input validation on backend
- ✅ Rate limiting (add if needed)

## License

Consider adding a LICENSE file:
- MIT License (most permissive)
- Apache 2.0
- GPL v3

## Contributing

If you want others to contribute, add CONTRIBUTING.md with guidelines.
