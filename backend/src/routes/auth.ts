import express, { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router: Router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Mock user storage
const users: any[] = [];

// Register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if user exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      id: Date.now().toString(),
      email,
      name,
      password: hashedPassword
    };
    users.push(user);

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(201).json({ 
      user: { id: user.id, email: user.email, name: user.name }, 
      token,
      message: '✅ Registration successful'
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Registration failed', message: error.message });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d'
    });

    res.json({ 
      user: { id: user.id, email: user.email, name: user.name }, 
      token,
      message: '✅ Login successful'
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Login failed', message: error.message });
  }
});

// Demo login (for quick testing)
router.post('/demo-login', (req: Request, res: Response) => {
  const demoUser = { id: '1', email: 'demo@example.com', name: 'Demo User' };
  const token = jwt.sign({ id: demoUser.id, email: demoUser.email }, JWT_SECRET, {
    expiresIn: '7d'
  });
  
  res.json({ 
    user: demoUser, 
    token,
    message: '✅ Demo login successful'
  });
});

export default router;
