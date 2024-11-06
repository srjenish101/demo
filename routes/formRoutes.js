const express = require('express');
const router = express.Router();
const FormData = require('../models/formModel');

// POST route to handle form submission
router.post('/', async (req, res) => {
  console.log("Received request:", req.body);
  const formData = new FormData(req.body);
  
  try {
    await formData.save();
    console.log("Data saved successfully");
    res.status(201).send("Data saved successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send("Error saving data");
  }
});

module.exports = router;
