require('dotenv').config();
const express = require('express');
const path = require('path');
const rottify = require('brain-rottify-text');

const app = express();
const PORT = process.env.PORT || 9001;
const API_PREFIX = process.env.API_PREFIX || '/api';

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Debug logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// API endpoint to provide options for the frontend
app.get(`${API_PREFIX}/options`, (req, res) => {
    // Based on the function signature you provided
    const options = {
        rotLevel: 5,                // Default mid-level intensity
        includeSlang: ['GenZ'],     // Default slang type
        includeDread: false,        // Default for existential dread phrases
        includeSymbols: false,      // Default for glitchy symbols
        includeInternetNoise: true  // Default for internet slang
    };
    
    res.json({ options });
});

// API endpoint for rottifying text
app.post(`${API_PREFIX}/rottify`, (req, res) => {
    console.log('Received request to rottify:', req.body);
    const { text, options } = req.body;
    
    try {
        // Pass the exact options from the documentation
        const rottifiedText = rottify.rottifyText(text, options);
        console.log('Rottified result:', rottifiedText);
        res.json({ result: rottifiedText });
    } catch (error) {
        console.error('Error rottifying text:', error);
        res.json({ result: 'Error processing text: ' + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints available at ${API_PREFIX}`);
});