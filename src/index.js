const express = require('express');
const path = require('path');
const rottify = require('brain-rottify-text');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Debug logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Endpoint to get available options
app.get('/api/options', (req, res) => {
    try {
        // Check if the module provides a way to get default options
        let options = {};
        
        // Try to access defaultOptions or similar properties if they exist
        if (typeof rottify.getDefaultOptions === 'function') {
            options = rottify.getDefaultOptions();
        } else if (rottify.defaultOptions) {
            options = rottify.defaultOptions;
        } else {
            // If we can't find default options, inspect the module to see what it might accept
            console.log('Module inspection:', Object.keys(rottify));
            
            // Provide some basic options that might be common
            options = {
                // These are just examples - the actual module may support different options
                // We'll display whatever options we detect on the frontend
            };
        }
        
        res.json({ options });
    } catch (error) {
        console.error('Error getting options:', error);
        res.json({ error: 'Failed to retrieve available options' });
    }
});

// API endpoint for rottifying text
app.post('/api/rottify', (req, res) => {
    console.log('Received request to rottify:', req.body);
    const { text, options } = req.body;
    
    try {
        // Check if the module accepts options as a second parameter
        let rottifiedText;
        if (options && Object.keys(options).length > 0) {
            console.log('Applying options:', options);
            rottifiedText = rottify.rottifyText(text, options);
        } else {
            rottifiedText = rottify.rottifyText(text);
        }
        
        console.log('Rottified result:', rottifiedText);
        res.json({ result: rottifiedText });
    } catch (error) {
        console.error('Error rottifying text:', error);
        res.json({ result: 'Error processing text: ' + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
    // Log available module properties to help with debugging
    console.log('Available module properties:', Object.keys(rottify));
    console.log('rottifyText type:', typeof rottify.rottifyText);
});