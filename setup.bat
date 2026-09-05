@echo off
REM Windows setup script

echo 🚀 Setting up Dropship Platform...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

REM Setup Backend
echo 📦 Setting up backend...
cd backend

if not exist "node_modules" (
    echo    Installing dependencies...
    call npm install
) else (
    echo    ✅ node_modules already exists
)

if not exist ".env" (
    copy .env.example .env
    echo    ✅ Created .env file
) else (
    echo    ✅ .env file already exists
)

cd ..
echo.

REM Setup Frontend
echo 📦 Setting up frontend...
cd frontend

if not exist "node_modules" (
    echo    Installing dependencies...
    call npm install
) else (
    echo    ✅ node_modules already exists
)

if not exist ".env.local" (
    copy .env.example .env.local
    echo    ✅ Created .env.local file
) else (
    echo    ✅ .env.local file already exists
)

cd ..
echo.

echo 🎉 Setup completed!
echo.
echo 📝 Next steps:
echo    1. Start backend:  cd backend ^&^& npm run dev
echo    2. Start frontend: cd frontend ^&^& npm run dev (in another terminal)
echo.
echo 🌐 Access the app at:
echo    Frontend:  http://localhost:3000
echo    Backend:   http://localhost:3001
echo    API Docs:  http://localhost:3001/api/health
echo.
echo 💡 Test the API:
echo    curl http://localhost:3001/api/products
echo.
pause
