import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db';
import UserRoutes from '../routes/UserRoutes';

const app = express();
dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server started on port ${process.env.PORT}`);
    }  
);

app.use('/api/user',UserRoutes)