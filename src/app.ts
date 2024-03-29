import express from 'express';

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.listen(port, () =>
{
	console.log(`Server listening on http://localhost:${port}`);
});

app.get('/', (_req, res) =>
{
	res.send('Hello World!');
});