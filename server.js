// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Serve static files from "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route for the homepage
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Basic Authentication Middleware
const basicAuth = (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) {
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).send('Authentication required');
    }

    const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
    const username = credentials[0];
    const password = credentials[1];

    const validUsername = 'mask';
    const validPassword = 'mask';

    if (username === validUsername && password === validPassword) {
        return next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).send('Invalid Credentials');
    }
};

// Apply Basic Authentication to all routes
app.use(basicAuth);

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
