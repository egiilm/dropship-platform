import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Mock suppliers
const mockSuppliers = [
  {
    id: '1',
    name: 'AliExpress',
    type: 'aliexpress',
    status: 'active'
  },
  {
    id: '2',
    name: 'Printful',
    type: 'printful',
    status: 'active'
  }
];

// Get all suppliers
router.get('/', (req: Request, res: Response) => {
  try {
    res.json({
      data: mockSuppliers,
      total: mockSuppliers.length
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch suppliers', message: error.message });
  }
});

// Create supplier
router.post('/', (req: Request, res: Response) => {
  try {
    const { name, type } = req.body;

    if (!name || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const supplier = {
      id: Date.now().toString(),
      name,
      type,
      status: 'active',
      createdAt: new Date()
    };

    mockSuppliers.push(supplier);
    res.status(201).json(supplier);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create supplier', message: error.message });
  }
});

export default router;
