import express from 'express';
import healthRoutes from './features/health/healthRoutes';

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use('/health', healthRoutes);

app.listen(port, () =>
{
	console.log(`Server listening on http://localhost:${port}`);
});