# Dropship Platform - Shopify-like E-Commerce with Dropshipping

A modern, full-stack dropshipping platform with a premium, minimalist design inspired by PeachWeb. Connect to suppliers, manage inventory, process orders, and run your online store seamlessly.

## 🎨 Design
- **Premium Minimalist UI** - Clean, airy design with interactive 3D elements
- **Interactive Dashboard** - Real-time analytics and order management
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## 🚀 Features
- **Product Management** - Upload, edit, and manage products
- **Supplier Integration** - Connect to multiple dropshipping suppliers (AliExpress, Printful, etc.)
- **Order Management** - Automated order processing and tracking
- **Inventory Sync** - Real-time inventory synchronization
- **Payment Processing** - Stripe integration for payments
- **Customer Management** - Customer profiles and order history
- **Analytics Dashboard** - Sales metrics and performance tracking
- **Multi-vendor Support** - Manage multiple supplier accounts

## 📋 Project Structure
```
dropship-platform/
├── backend/              # Node.js/Express API
├── frontend/             # React/Next.js Frontend
├── database/             # Database schemas & migrations
├── docs/                 # Documentation
└── docker-compose.yml    # Container setup
```

## 🛠️ Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, Framer Motion (3D animations)
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **Cache**: Redis
- **Authentication**: JWT + NextAuth.js
- **Payment**: Stripe API
- **Hosting**: Docker, AWS/Vercel ready

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis (optional)
- Docker & Docker Compose (optional)

### Quick Start
```bash
# Clone repository
git clone https://github.com/egiilm/dropship-platform.git
cd dropship-platform

# Setup backend
cd backend && npm install
cp .env.example .env
npm run db:migrate
npm run dev

# Setup frontend (in new terminal)
cd frontend && npm install
cp .env.example .env.local
npm run dev
```

## 🌐 API Documentation
See `/docs/API.md` for complete API reference

## 📄 License
MIT
