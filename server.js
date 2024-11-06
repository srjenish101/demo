const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

console.log(process.env.MONGODB_URI);
// Create express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

  

// Import routes
const formRoutes = require('./routes/formRoutes');

// Use routes
app.use('/api/form', formRoutes);

app.get('/',(req,res)=>{
  res.send('Hello World')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
