#!/bin/bash
# Dropship Platform Launcher for macOS/Linux
# Run: ./start.sh

echo ""
echo "╔════════════════════════════════════════╗"
echo "║  🚀 Dropship Platform - Auto Launcher   ║"
echo "║     Starting your platform...           ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "📥 Download Node.js from: https://nodejs.org"
    echo "   (Choose LTS version 18+ or 20+)"
    echo ""
    echo "After installing Node.js, run this file again."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

echo "📦 Setting up and starting Dropship Platform..."
echo ""

# Run the Node.js launcher
node launcher.js
