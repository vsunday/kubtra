const express = require('express');
const request = require('request');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	request('http://127.0.0.1:3001', (err, res2, body) => {
		if (err) {res.write('error\n');}
		else {
			res.write(`this is n1 and ${body}\n`);
		}
		res.status(200).end(os.hostname());
	})
});

app.listen(port, () => console.log(`listening on ${port}`));
