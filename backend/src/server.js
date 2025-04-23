const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Since password is empty in your DB, we'll skip password check for now
    // In a real app, you'd hash passwords and compare them (e.g., using bcrypt)
    if (user.password && user.password !== password) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user: { fullName: user.fullName, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));