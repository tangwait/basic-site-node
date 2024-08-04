const express = require("express");
const path = require('path');
const app = express();

const PORT = 8080;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.get('/shopping.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'shopping.html'));
});

app.get('/checkout.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'checkout.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});