import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server started on port ${process.env.PORT}`);
    }   
);

app.get('/', (_req, res) => {
    return res.send('Hello World');
}
);
