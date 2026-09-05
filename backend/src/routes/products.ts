import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// Mock products
const mockProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 29.99,
    description: 'High-quality wireless headphones',
    supplier: 'AliExpress',
    image: 'https://via.placeholder.com/300x300?text=Headphones'
  },
  {
    id: '2',
    name: 'Phone Case',
    price: 12.99,
    description: 'Durable phone protective case',
    supplier: 'AliExpress',
    image: 'https://via.placeholder.com/300x300?text=Phone+Case'
  },
  {
    id: '3',
    name: 'USB-C Cable',
    price: 8.99,
    description: 'Fast charging USB-C cable',
    supplier: 'Printful',
    image: 'https://via.placeholder.com/300x300?text=USB+Cable'
  }
];

// Get all products
router.get('/', (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 20, search } = req.query;
    const pageNum = Number(page);
    const limitNum = Number(limit);

    let filtered = mockProducts;
    if (search) {
      filtered = mockProducts.filter(p => 
        p.name.toLowerCase().includes(String(search).toLowerCase()) ||
        p.description.toLowerCase().includes(String(search).toLowerCase())
      );
    }

    const start = (pageNum - 1) * limitNum;
    const paginatedProducts = filtered.slice(start, start + limitNum);

    res.json({
      data: paginatedProducts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: filtered.length,
        pages: Math.ceil(filtered.length / limitNum)
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch products', message: error.message });
  }
});

// Create product
router.post('/', (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const product = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      supplier: 'Custom',
      image: 'https://via.placeholder.com/300x300?text=Product'
    };

    mockProducts.push(product);
    res.status(201).json(product);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create product', message: error.message });
  }
});

// Get product by ID
router.get('/:id', (req: Request, res: Response) => {
  try {
    const product = mockProducts.find(p => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch product', message: error.message });
  }
});

export default router;
