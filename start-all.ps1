# Food Ordering Site - Start All Services

Write-Host "Starting Food Ordering Site..." -ForegroundColor Green

# Start Backend
Write-Host "`nStarting Backend Server (Port 5000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm run dev"

# Wait a bit
Start-Sleep -Seconds 2

# Start ML Service
Write-Host "Starting ML Service (Port 5001)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd ml-service; python app.py"

# Wait a bit
Start-Sleep -Seconds 2

# Start Frontend
Write-Host "Starting Frontend (Port 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"

Write-Host "`nAll services started!" -ForegroundColor Green
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "ML Service: http://localhost:5001" -ForegroundColor Cyan
