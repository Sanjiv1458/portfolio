// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Set up static file serving (for your HTML files, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render your HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'portfolio.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
