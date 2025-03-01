
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const e = require('cors');
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
// User Registration
exports.register = async (req, res) => {
    const { name, number,email,gender,roles } = req.body;
      
    try {
        // Hash Password
             // Create New User
        const newUser = new User({
            name: name,
         number: number,
            email: email,
            gender: gender,
            roles: roles,
           


                 });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

// User Login
exports.login = async (req, res) => {
    const { name, number } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ name,number });
        if (!user) {
            return res.status(400).json({ error: 'Invalid firstname or lastname' });
        }

        // Check if password is correct
       

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, userId: user._id, name: user.name, number: user.number });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
exports.profile = async (req, res) => {
    try {
        console.log('Fetching profile for appointmentId:', req.user.userId); // Log
        const user = await User.findById(req.user.userId);
          if (!user) {
            return res.status(404).json({ error: 'User appointment found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching appointment profile:', error); // Log
        res.status(500).json({ error: 'Error fetching appointment profile' });
    }
};
// Récupérer le profil de l'utilisateur



// Reset Password

