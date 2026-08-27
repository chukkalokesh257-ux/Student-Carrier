import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase()
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Email already registered'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      email: email.toLowerCase(),
      password: hashedPassword
    });

    // Save user to MongoDB Atlas
    await user.save();

    res.status(201).json({
      message: 'Registration successful',
      user: {
        email: user.email
      }
    });

  } catch (error) {
    console.error('Registration error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

export default router;