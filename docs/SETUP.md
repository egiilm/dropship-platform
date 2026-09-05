# Setup Guide

## Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Stripe Account (for payments)

## Environment Setup

### Backend

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your credentials

5. Setup database:
```bash
npm run db:migrate
npm run db:seed
```

6. Start development server:
```bash
npm run dev
```

### Frontend

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Docker Setup

```bash
docker-compose up --build
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379
- Backend API on port 3001
- Frontend on port 3000

## Database Schema

The application uses Prisma ORM. To view the schema:

```bash
npm run db:studio
```

This opens Prisma Studio at `http://localhost:5555`
