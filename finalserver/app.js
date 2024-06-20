// app.js

const express = require('express');
const app = express();
const port = 5000; // Changed port to 5000
const cors = require('cors'); // Import CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const patientRoutes = require('./routes/patients.js');
const userRoutes = require('./routes/users.js');

// Use routes
app.use('/patients', patientRoutes);
app.use('/users', userRoutes);
app.get("/", (req,res) => {
    res.json({ message: "Hello, there" });
  });
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
