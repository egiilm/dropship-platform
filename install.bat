@echo off
REM Simple installer for Dropship Platform
REM Creates desktop shortcuts and registers the launcher

echo.
echo ╔════════════════════════════════════════╗
echo ║  📦 Dropship Platform - Installer       ║
echo ║     Setting up your system...           ║
echo ╚════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is required to run Dropship Platform
    echo.
    echo 📥 Please download and install Node.js:
    echo    https://nodejs.org (Choose LTS version)
    echo.
    echo After installing Node.js, run this installer again.
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js is installed
echo.

REM Get the directory where this script is located
set INSTALL_DIR=%~dp0
echo 📁 Installation path: %INSTALL_DIR%
echo.

REM Create a shortcut on Desktop
echo 🔗 Creating Desktop shortcut...

set DESKTOP=%USERPROFILE%\Desktop

REM Create VBScript to make shortcut
echo Creating shortcut...
(
  echo Set oWS = WScript.CreateObject("WScript.Shell")
  echo sLinkFile = "%DESKTOP%\Dropship Platform.lnk"
  echo Set oLink = oWS.CreateShortcut(sLinkFile)
  echo oLink.TargetPath = "%INSTALL_DIR%start.bat"
  echo oLink.WorkingDirectory = "%INSTALL_DIR%"
  echo oLink.Description = "Launch Dropship Platform"
  echo oLink.IconLocation = "%INSTALL_DIR%launcher.ico"
  echo oLink.Save
) > "%TEMP%\CreateShortcut.vbs"

cscript "%TEMP%\CreateShortcut.vbs"
del "%TEMP%\CreateShortcut.vbs"

echo ✅ Desktop shortcut created!
echo.
echo 🎉 Installation complete!
echo.
echo 📍 Next steps:
echo    1. Look for "Dropship Platform" on your Desktop
echo    2. Double-click it to launch the platform
echo    3. Wait for both servers to start
echo    4. Open http://localhost:3000 in your browser
echo.
echo 💡 The first launch may take 1-2 minutes as it installs dependencies.
echo.
pause
