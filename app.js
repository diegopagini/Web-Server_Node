/** @format */
import 'hbs';

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 8080;

// instance of express.
const app = express();

// To use handlebars "hbs"
app.set('view engine', 'hbs');

// To serve static content:
app.use(express.static('public')); // To use the content inside our public folder. This will be rendered in "/" path.

// Routes
app.get('/', (req, res) => {
	res.render('home');
});

app.get('/generic', (req, res) => {
	res.sendFile(path.join(__dirname, '/public', 'generic.html')); // To show our generic page.
});

app.get('/elements', (req, res) => {
	res.sendFile(path.join(__dirname, '/public', 'elements.html')); // To show our elements page.
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public', '404.html')); // To show our 404 page.
});

app.listen(port);
