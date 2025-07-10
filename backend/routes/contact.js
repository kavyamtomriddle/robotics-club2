// routes/contact.js
const express = require('express');
const router = express.Router();
const Message = require('../models/message');

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

module.exports = router;
