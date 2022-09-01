/** @format */
import express from 'express';

const app = express();

// Routes
app.get('/', (req, res) => {
	res.send('Home page');
});

app.get('/hello-world', (req, res) => {
	res.send('Hello World from /hello-world route');
});

app.listen(8080);
