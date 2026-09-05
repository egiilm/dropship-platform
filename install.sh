#!/bin/bash
# Installer for Dropship Platform on macOS/Linux

echo ""
echo "╔════════════════════════════════════════╗"
echo "║  📦 Dropship Platform - Installer       ║"
echo "║     Setting up your system...           ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required to run Dropship Platform"
    echo ""
    echo "📥 Please download and install Node.js:"
    echo "   https://nodejs.org (Choose LTS version)"
    echo ""
    echo "After installing Node.js, run this installer again."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Get the directory
INSTALL_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "📁 Installation path: $INSTALL_DIR"
echo ""

# Make scripts executable
echo "🔐 Making scripts executable..."
chmod +x "$INSTALL_DIR/start.sh"
chmod +x "$INSTALL_DIR/launcher.js"
echo "✅ Done"
echo ""

echo "🎉 Installation complete!"
echo ""
echo "📍 Next steps:"
echo "   1. Run: $INSTALL_DIR/start.sh"
echo "   2. Wait for both servers to start"
echo "   3. Open http://localhost:3000 in your browser"
echo ""
echo "💡 The first launch may take 1-2 minutes as it installs dependencies."
echo ""
