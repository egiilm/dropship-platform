import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Get dashboard stats
router.get('/dashboard', (req: Request, res: Response) => {
  try {
    res.json({
      totalOrders: 150,
      totalRevenue: 4500.50,
      totalCustomers: 200,
      totalProducts: 500,
      revenueGrowth: 12.5,
      orderTrend: 'up',
      message: 'Dashboard statistics'
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch analytics', message: error.message });
  }
});

export default router;
