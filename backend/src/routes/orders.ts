import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router: Router = express.Router();
const prisma = new PrismaClient();

// Get all orders
router.get('/', async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: { items: true, customer: true }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Create order
router.post('/', async (req: Request, res: Response) => {
  try {
    const { customerId, items, totalAmount, status } = req.body;

    const order = await prisma.order.create({
      data: {
        customerId,
        totalAmount: parseFloat(totalAmount),
        status: status || 'pending',
        items: {
          create: items
        }
      },
      include: { items: true }
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

export default router;
