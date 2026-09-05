import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Mock orders
const mockOrders: any[] = [];

// Get all orders
router.get('/', (req: Request, res: Response) => {
  try {
    res.json({
      data: mockOrders,
      total: mockOrders.length,
      message: `${mockOrders.length} orders found`
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch orders', message: error.message });
  }
});

// Create order
router.post('/', (req: Request, res: Response) => {
  try {
    const { customerId, items, totalAmount, status } = req.body;

    if (!items || !totalAmount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const order = {
      id: Date.now().toString(),
      orderNumber: `ORD-${Date.now()}`,
      customerId: customerId || 'guest',
      items,
      totalAmount: parseFloat(totalAmount),
      status: status || 'pending',
      createdAt: new Date()
    };

    mockOrders.push(order);
    res.status(201).json(order);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create order', message: error.message });
  }
});

export default router;
