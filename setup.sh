#!/bin/bash

set -e

echo "🚀 Setting up Dropship Platform..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Setup Backend
echo "📦 Setting up backend..."
cd backend

if [ ! -d "node_modules" ]; then
    echo "   Installing dependencies..."
    npm install
else
    echo "   ✅ node_modules already exists"
fi

if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "   ✅ Created .env file"
else
    echo "   ✅ .env file already exists"
fi

cd ..
echo ""

# Setup Frontend
echo "📦 Setting up frontend..."
cd frontend

if [ ! -d "node_modules" ]; then
    echo "   Installing dependencies..."
    npm install
else
    echo "   ✅ node_modules already exists"
fi

if [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo "   ✅ Created .env.local file"
else
    echo "   ✅ .env.local file already exists"
fi

cd ..
echo ""

echo "🎉 Setup completed!"
echo ""
echo "📝 Next steps:"
echo "   1. Start backend:  cd backend && npm run dev"
echo "   2. Start frontend: cd frontend && npm run dev (in another terminal)"
echo ""
echo "🌐 Access the app at:"
echo "   Frontend:  http://localhost:3000"
echo "   Backend:   http://localhost:3001"
echo "   API Docs:  http://localhost:3001/api/health"
echo ""
echo "💡 Test the API:"
echo "   curl http://localhost:3001/api/products"
echo ""
