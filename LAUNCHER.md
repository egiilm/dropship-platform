# 🚀 Dropship Platform - Executable Launcher

## Windows 11 - Super Easy Setup! 🎉

### Option 1: One-Click Install (Recommended)

1. **Download the files**
   ```bash
   git clone https://github.com/egiilm/dropship-platform.git
   cd dropship-platform
   ```

2. **Double-click `install.bat`**
   - This will create a Desktop shortcut automatically

3. **Double-click the Desktop shortcut to launch**
   - Everything starts automatically!
   - Keep the window open

---

### Option 2: Quick Manual Launch

1. **Double-click `start.bat`** in the project folder
   - That's it! The platform will start automatically
   - No terminal commands needed

---

## What Happens When You Click?

✅ Checks if Node.js is installed
✅ Installs dependencies (first time only)
✅ Starts backend on http://localhost:3001
✅ Starts frontend on http://localhost:3000
✅ Opens a browser window (optional)
✅ Keeps running in the background

---

## 🌐 Access Your Platform

Once the launcher runs:

| URL | Purpose |
|-----|----------|
| http://localhost:3000 | **Frontend App** |
| http://localhost:3001 | **Backend API** |
| http://localhost:3001/api/health | **Health Check** |

---

## ⚠️ Prerequisites

**You MUST have Node.js installed:**

1. Download from: https://nodejs.org
2. Choose **LTS version** (18.x or 20.x)
3. Run the installer
4. **Restart your computer** after installation
5. Then run `start.bat`

---

## 🐛 Troubleshooting

### "Node.js is not installed"
- Download from https://nodejs.org
- Run the installer
- Restart your computer
- Try again

### "Port 3000/3001 already in use"
- Close the launcher
- Run this in PowerShell:
  ```powershell
  taskkill /F /IM node.exe
  ```
- Try again

### "Dependencies won't install"
- Delete `backend/node_modules` and `frontend/node_modules`
- Delete `backend/package-lock.json` and `frontend/package-lock.json`
- Run `start.bat` again

---

## 📁 Files Included

| File | Purpose |
|------|----------|
| `start.bat` | **Click this to launch (Windows)** |
| `start.sh` | **Run this to launch (Mac/Linux)** |
| `install.bat` | Creates Desktop shortcut (Windows) |
| `install.sh` | Sets up permissions (Mac/Linux) |
| `launcher.js` | Auto-setup and launch script |

---

## 🎯 Quick Reference

**Windows 11:**
```
Double-click start.bat → Platform launches → Done! ✅
```

**macOS/Linux:**
```
Run ./start.sh → Platform launches → Done! ✅
```

---

## 💡 Tips

✅ Keep the launcher window open while using the app
✅ First launch takes 1-2 minutes (installing dependencies)
✅ Subsequent launches are instant
✅ Press Ctrl+C to stop everything

---

## 🚀 You're Ready!

Just **double-click `start.bat`** and everything happens automatically!

**No terminal, no complex commands, no database setup.**

**Enjoy! 🎉**
