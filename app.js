/** @format */
import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); // To allow us to use environment variables

const __filename = fileURLToPath(import.meta.url); // To allow us to use __filename with type: "module" in package.json
const __dirname = path.dirname(__filename); // To allow us to use __dirname with type: "module" in package.json

const port = process.env.PORT; // Our variable declared in .env

// instance of express.
const app = express();

// HBS
hbs.registerPartials(path.join(__dirname, '/views/partials')); // To allow us to use partials

// To use handlebars "hbs"
app.set('view engine', 'hbs');

// To serve static content:
app.use(express.static('public')); // To use the content inside our public folder. This will be rendered in "/" path.

// Routes
app.get('/', (req, res) => {
	res.render('home', {
		name: 'Diego Pagini',
		title: 'Home',
	}); // render to "render" the app
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		name: 'Diego Pagini',
		title: 'Generic',
	});
	// To show our generic page.
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		name: 'Diego Pagini',
		title: 'Elements',
	}); // To show our elements page.
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public', '404.html')); // To show our 404 page.
});

app.listen(port); // To serve our application.
