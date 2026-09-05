import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router: Router = express.Router();
const prisma = new PrismaClient();

// Get all suppliers
router.get('/', async (req: Request, res: Response) => {
  try {
    const suppliers = await prisma.supplier.findMany();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suppliers' });
  }
});

// Create supplier connection
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, apiKey, apiUrl, type } = req.body;

    const supplier = await prisma.supplier.create({
      data: {
        name,
        apiKey,
        apiUrl,
        type
      }
    });

    res.status(201).json(supplier);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create supplier' });
  }
});

export default router;
