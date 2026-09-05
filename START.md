# 🚀 Quick Start Guide - Dropship Platform

## ✨ NEW - Fully Runnable Locally!

This version is **100% runnable locally** with **NO database required**! It uses mock data.

---

## 📋 Prerequisites

✅ **All you need:**
- Node.js 18+ (download from https://nodejs.org)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

---

## ⚡ Option 1: One-Click Setup (Recommended)

### **On macOS/Linux:**
```bash
# Clone the repository
git clone https://github.com/egiilm/dropship-platform.git
cd dropship-platform

# Run setup
chmod +x setup.sh
./setup.sh
```

### **On Windows:**
```bash
# Clone the repository
git clone https://github.com/egiilm/dropship-platform.git
cd dropship-platform

# Run setup
setup.bat
```

---

## 🎯 Option 2: Manual Quick Start (5 minutes)

### **Step 1: Clone & Navigate**
```bash
git clone https://github.com/egiilm/dropship-platform.git
cd dropship-platform
```

### **Step 2: Setup Backend**
```bash
cd backend

# Install dependencies (1-2 minutes)
npm install

# Copy environment file
cp .env.example .env

# Start the server
npm run dev
```

**You should see:**
```
🚀 Server running on http://localhost:3001
📊 Environment: development
```

### **Step 3: Setup Frontend (Open NEW Terminal)**
```bash
cd frontend

# Install dependencies (1-2 minutes)
npm install

# Copy environment file
cp .env.example .env.local

# Start the development server
npm run dev
```

**You should see:**
```
▲ Next.js 14.0.0
- Local: http://localhost:3000
```

---

## 🌐 Open the App

**Once both servers are running:**

1. **Frontend:** http://localhost:3000
2. **Backend API:** http://localhost:3001
3. **API Health Check:** http://localhost:3001/api/health

---

## 🧪 Test the Backend API

Open a new terminal and try these commands:

```bash
# Health check
curl http://localhost:3001/api/health

# Get all products
curl http://localhost:3001/api/products

# Get all suppliers
curl http://localhost:3001/api/suppliers

# Create a new product
curl -X POST http://localhost:3001/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "New Product", "price": 99.99, "description": "Amazing product"}'

# Demo login
curl -X POST http://localhost:3001/api/auth/demo-login
```

---

## 🎨 Frontend Features

✨ **Beautiful UI with:**
- PeachWeb-inspired design
- Dark gradient background
- Smooth animations
- Real-time dashboard
- Fully responsive

---

## 🔑 Demo Credentials

**Email:** `demo@example.com`  
**Password:** `password123`

Or use the demo login endpoint:
```bash
curl -X POST http://localhost:3001/api/auth/demo-login
```

---

## 📦 Available API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|----------|
| `/api/health` | GET | Check if backend is running |
| `/api/products` | GET/POST | Products management |
| `/api/orders` | GET/POST | Orders management |
| `/api/suppliers` | GET/POST | Suppliers management |
| `/api/customers` | GET/POST | Customers management |
| `/api/analytics/dashboard` | GET | Dashboard statistics |
| `/api/auth/register` | POST | Register new user |
| `/api/auth/login` | POST | Login user |
| `/api/auth/demo-login` | POST | Quick demo login |

---

## 🛠️ Troubleshooting

### **"npm: command not found"**
- Install Node.js from https://nodejs.org
- Restart your terminal

### **"Port 3000/3001 already in use"**

**macOS/Linux:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**Windows:**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill it (replace PID with the number)
taskkill /PID <PID> /F
```

### **"Module not found" errors**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Backend not responding**
- Check if backend is running on http://localhost:3001
- Try: `curl http://localhost:3001/api/health`
- Check terminal for error messages

---

## 📁 Project Structure

```
dropship-platform/
├── backend/                 # Express.js API (No DB needed!)
│   ├── src/
│   │   ├── index.ts        # Main server
│   │   ├── routes/         # API endpoints
│   │   │   ├── auth.ts     # Authentication
│   │   │   ├── products.ts # Mock products
│   │   │   ├── orders.ts   # Mock orders
│   │   │   ├── suppliers.ts# Mock suppliers
│   │   │   ├── customers.ts# Mock customers
│   │   │   └── analytics.ts# Dashboard stats
│   │   └── middleware/     # Auth, validation
│   └── package.json
│
├── frontend/                # Next.js App
│   ├── pages/
│   │   ├── index.tsx       # Home page
│   │   └── dashboard.tsx   # Dashboard
│   ├── components/         # React components
│   ├── styles/             # Tailwind CSS
│   └── package.json
│
├── setup.sh                 # macOS/Linux setup
├── setup.bat                # Windows setup
└── START.md                 # This file
```

---

## 🚀 What's Next?

1. **Explore the Dashboard:** http://localhost:3000
2. **Test API:** See endpoint examples above
3. **Customize:** Edit files in `backend/src` and `frontend/pages`
4. **Add Features:** Extend the mock data and API routes

---

## 📚 Commands Reference

**Backend:**
```bash
cd backend

# Development (with auto-reload)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

**Frontend:**
```bash
cd frontend

# Development (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

---

## 💡 Tips

- Keep both backend and frontend terminals open
- Backend auto-reloads on file changes with `npm run dev`
- Frontend hot-reloads instantly
- Use browser DevTools to debug (F12)
- Check Network tab to see API calls

---

## ✅ You're All Set!

**Everything is ready to run!** No database setup needed. Just:

1. Install dependencies
2. Start backend
3. Start frontend
4. Open http://localhost:3000

**Happy coding! 🎉**
