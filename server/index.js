import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/auth', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});