/** @format */
import http from 'http';

// Package from node.

http
	.createServer((request, response) => {
		console.log(request); // Sended information.

		response.writeHead(404, { 'Content-Type': 'text/plain' }); // Headers.

		response.write('404 | Page not found'); // To write something.
		response.end(); // To end writing.
	})
	.listen(8080);

console.log('Escuchando el puerto ', 8080);
