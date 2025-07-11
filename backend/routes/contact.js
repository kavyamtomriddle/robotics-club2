const express = require('express');
const router = express.Router();
const Message = require('../models/message'); // Use lowercase if file is named 'message.js'

// @route   POST /api/contact
// @desc    Save contact form submission
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(200).json({ success: true, message: 'Message received' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// @route   GET /api/contact
// @desc    Fetch all messages (for testing in browser/Postman)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to fetch messages' });
  }
});

module.exports = router;
