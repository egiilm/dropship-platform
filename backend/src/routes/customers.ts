import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Mock customers
const mockCustomers: any[] = [];

// Get all customers
router.get('/', (req: Request, res: Response) => {
  try {
    res.json({
      data: mockCustomers,
      total: mockCustomers.length
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch customers', message: error.message });
  }
});

// Create customer
router.post('/', (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName } = req.body;

    if (!email || !firstName || !lastName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const customer = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      createdAt: new Date()
    };

    mockCustomers.push(customer);
    res.status(201).json(customer);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create customer', message: error.message });
  }
});

export default router;
