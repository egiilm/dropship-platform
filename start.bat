@echo off
REM Dropship Platform Launcher for Windows
REM Double-click this file to run the entire platform

echo.
echo ╔════════════════════════════════════════╗
echo ║  🚀 Dropship Platform - Auto Launcher   ║
echo ║     Double-click me to start!           ║
echo ║     (Keep this window open)             ║
echo ╚════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo 📥 Download Node.js from: https://nodejs.org
    echo    (Choose LTS version 18+ or 20+)
    echo.
    echo After installing Node.js, run this file again.
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo.
echo ✅ npm version:
npm --version
echo.

echo 📦 Setting up and starting Dropship Platform...
echo.

REM Run the Node.js launcher
node launcher.js

if %errorlevel% neq 0 (
    echo.
    echo ❌ An error occurred!
    pause
    exit /b 1
)
