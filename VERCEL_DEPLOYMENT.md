# 🚀 Deploy to Vercel - Step by Step Guide

## Prerequisites
- GitHub account (✅ You have this)
- Vercel account (free) - Sign up at https://vercel.com

## Part 1: Deploy Frontend to Vercel

### Step 1: Sign Up / Login to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Project
1. Click "Add New..." → "Project"
2. Find and select your repository: `spice-paradise`
3. Click "Import"

### Step 3: Configure Build Settings
Vercel will auto-detect it's a monorepo. Configure:

**Framework Preset:** Vite
**Root Directory:** `frontend`
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

### Step 4: Environment Variables (Optional for now)
Skip for now - we'll add backend URL later

### Step 5: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://spice-paradise-xxx.vercel.app`

## Part 2: Deploy Backend (Choose One)

### Option A: Railway (Recommended - Easy)

1. **Sign up at Railway**
   - Go to https://railway.app
   - Sign in with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `spice-paradise` repository

3. **Configure Backend**
   - Root Directory: `backend`
   - Start Command: `npm start`
   - Add to package.json: `"start": "node server.js"`

4. **Add Environment Variables**
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_secret_key_here
   PORT=5000
   ```

5. **Get Backend URL**
   - Railway will give you a URL like: `https://spice-paradise-backend.railway.app`

### Option B: Render (Free Tier)

1. **Sign up at Render**
   - Go to https://render.com
   - Sign in with GitHub

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Name: `spice-paradise-backend`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`

3. **Add Environment Variables**
   - Same as Railway above

## Part 3: Setup MongoDB Atlas (Free)

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster**
   - Choose "Free Shared" tier
   - Select region closest to you
   - Click "Create Cluster"

3. **Setup Database Access**
   - Go to "Database Access"
   - Add new database user
   - Username: `spiceparadise`
   - Password: Generate secure password
   - Save credentials!

4. **Setup Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Example: `mongodb+srv://spiceparadise:PASSWORD@cluster0.xxxxx.mongodb.net/food_ordering`

## Part 4: Connect Frontend to Backend

1. **Update Frontend Environment**
   - Go to your Vercel project settings
   - Add Environment Variable:
     - Name: `VITE_API_URL`
     - Value: Your backend URL (from Railway/Render)

2. **Update Frontend Code** (if needed)
   - Create `frontend/.env.production`:
     ```
     VITE_API_URL=https://your-backend-url.railway.app
     ```

3. **Update axios base URL**
   - In frontend, update API calls to use environment variable

4. **Redeploy Frontend**
   - Vercel will auto-deploy on git push
   - Or manually trigger deployment

## Part 5: Deploy ML Service

### Option: Railway/Render Python Service

1. **Create New Service**
   - Root Directory: `ml-service`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python app.py`

2. **Environment Variables**
   ```
   PORT=5001
   ```

3. **Update Backend**
   - Add ML service URL to backend environment variables

## Quick Start Commands

### Commit Vercel Config
```powershell
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

## Testing Your Deployment

1. **Frontend:** Visit your Vercel URL
2. **Backend:** Test at `https://your-backend-url/api/menu`
3. **Database:** Check MongoDB Atlas dashboard

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

### API Not Working
- Verify backend URL in frontend environment variables
- Check CORS settings in backend
- Ensure MongoDB connection string is correct

### White Screen
- Check browser console for errors
- Verify all routes are configured correctly
- Check if API endpoints are accessible

## Cost Breakdown

- **Vercel:** Free (Hobby plan)
- **Railway:** $5/month after free trial OR Free tier with limits
- **Render:** Free tier available
- **MongoDB Atlas:** Free (512MB storage)

**Total: FREE to $5/month**

## Your Deployment URLs

After deployment, you'll have:
- **Frontend:** `https://spice-paradise.vercel.app`
- **Backend:** `https://spice-paradise-backend.railway.app`
- **Database:** MongoDB Atlas cluster

## Next Steps After Deployment

1. Test all features on production
2. Add custom domain (optional)
3. Setup monitoring
4. Add analytics
5. Share with friends!

---

**Ready to deploy? Start with Step 1 above!** 🚀
