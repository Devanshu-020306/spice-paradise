# GitHub Upload Guide

## Step 1: Initialize Git Repository

Open PowerShell in your project root directory and run:

```powershell
git init
git add .
git commit -m "Initial commit: Spice Paradise - Indian Food Ordering Site"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Fill in the details:
   - Repository name: `spice-paradise-food-ordering`
   - Description: `Full-stack Indian restaurant food ordering platform with ML recommendations`
   - Choose Public or Private
   - DO NOT initialize with README (we already have one)
5. Click "Create repository"

## Step 3: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/spice-paradise-food-ordering.git

# Push your code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. The README.md will be displayed on the repository homepage

## Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download GitHub Desktop from https://desktop.github.com/
2. Install and sign in with your GitHub account
3. Click "Add" → "Add Existing Repository"
4. Select your project folder
5. Click "Publish repository" button
6. Choose repository name and visibility
7. Click "Publish Repository"

## Important Notes

### Before Pushing:

1. **Remove sensitive data** from `.env` files (already in .gitignore)
2. **Check .gitignore** is working properly
3. **Test locally** to ensure everything works

### Environment Variables:

Create a `.env.example` file (already created) for others to reference.
Never commit actual `.env` files with real credentials.

### After Pushing:

1. Add a nice repository description
2. Add topics/tags: `react`, `nodejs`, `mongodb`, `machine-learning`, `food-ordering`, `indian-restaurant`
3. Update repository settings if needed
4. Add a LICENSE file if you want (MIT, Apache, etc.)

## Updating Your Repository

After making changes:

```powershell
git add .
git commit -m "Description of your changes"
git push
```

## Common Issues

### Authentication Error:
- Use Personal Access Token instead of password
- Generate token at: GitHub Settings → Developer settings → Personal access tokens

### Large Files:
- If you have files over 100MB, use Git LFS
- Or add them to .gitignore

### Permission Denied:
- Check your GitHub credentials
- Ensure you have write access to the repository

## Repository Structure

Your repository will include:
```
spice-paradise-food-ordering/
├── frontend/          # React frontend
├── backend/           # Node.js backend
├── ml-service/        # Python ML service
├── dataset/           # Sample data
├── README.md          # Project documentation
├── FEATURES.md        # Feature documentation
├── SETUP.md           # Setup instructions
├── .gitignore         # Git ignore rules
└── package.json       # Root package file
```

## Making Your Repository Stand Out

1. Add screenshots to README.md
2. Create a demo video
3. Add badges (build status, license, etc.)
4. Write detailed documentation
5. Add contributing guidelines
6. Include a changelog

## Example README Badges

Add these to your README.md:

```markdown
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-16+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen)
![Python](https://img.shields.io/badge/Python-3.8+-yellow)
```
