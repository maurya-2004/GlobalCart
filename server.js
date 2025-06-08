const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    cart: [{
        productId: String,
        quantity: Number,
        price: Number
    }]
});

const User = mongoose.model('User', userSchema);

// Authentication Middleware
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const user = await User.findOne({ _id: decoded._id });
        
        if (!user) {
            throw new Error();
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

// Routes
// Signup
app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            cart: []
        });

        await user.save();

        // Generate token
        const token = jwt.sign({ _id: user._id }, 'your_jwt_secret');
        
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ _id: user._id }, 'your_jwt_secret');
        
        res.json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Add to Cart
app.post('/api/cart/add', auth, async (req, res) => {
    try {
        const { productId, quantity, price } = req.body;
        
        const user = req.user;
        const cartItem = user.cart.find(item => item.productId === productId);

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            user.cart.push({ productId, quantity, price });
        }

        await user.save();
        res.json(user.cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Cart
app.get('/api/cart', auth, async (req, res) => {
    try {
        res.json(req.user.cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update Cart Item
app.put('/api/cart/update', auth, async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        
        const user = req.user;
        const cartItem = user.cart.find(item => item.productId === productId);

        if (cartItem) {
            cartItem.quantity = quantity;
            await user.save();
            res.json(user.cart);
        } else {
            res.status(404).json({ error: 'Item not found in cart' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Remove from Cart
app.delete('/api/cart/remove/:productId', auth, async (req, res) => {
    try {
        const user = req.user;
        user.cart = user.cart.filter(item => item.productId !== req.params.productId);
        await user.save();
        res.json(user.cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 