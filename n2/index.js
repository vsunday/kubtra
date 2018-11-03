const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
	console.log('n2 requested');
	res.set({'Content-Type': 'text/plain'});
	res.send('hello from n2');
});

app.listen(port, () => console.log(`listening on ${port}`));
