import https from 'https'
import fs from 'fs'
import express from 'express'
import * as dotenv from 'dotenv'
import { error, uncaughtException, unhandledRejection } from './middlewares/errorHandler';

const app = express();
dotenv.config();

const PORT = process.env.port || 8000;

const useHttps = process.env.USE_HTTPS === 'true';

if (useHttps) {
    const privateKey = fs.readFileSync('src/key.pem', 'utf8');
    const certificate = fs.readFileSync('src/cert.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate };
    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(PORT, () => {
        console.log(`the https server is running on port ${PORT}`)
    })

}

else {
    app.listen(PORT, () => {
        console.log(`the server is running on port ${PORT}`)
    })
}

app.use(error);
process.on('uncaughtRejection',unhandledRejection);
process.on('uncaughtException',uncaughtException);

app.use('/', (req, res) => {
    res.send('hello world! Finally got the server running');
})