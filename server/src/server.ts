import https from 'https'
import http from 'http'
import fs from 'fs'
import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { error, uncaughtException, unhandledRejection } from './middlewares/errorHandler';
import { initializePassport } from './config/passportConfig';
import passport from 'passport';
import { googleStrategy, localStrategy, githubStrategy, appleStrategy } from './middlewares/passport';
import { User } from './models/userModel';
import { authRoutes } from './routes/authRoutes';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: '*/',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

const PORT = process.env.port || 8000;

const useHttps = process.env.USE_HTTPS === 'true';

if (useHttps) {
    const privateKey = fs.readFileSync('src/key.pem', 'utf8');
    const certificate = fs.readFileSync('src/cert.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate };
    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(PORT, () => {
        console.log(`the Https server is running on port ${PORT}`)
    })
}

else {
    const httpsServer=http.createServer(app).listen(PORT, () => {
        console.log(`the Http server is running on port ${PORT}`)
    })
}

app.use(error);
process.on('uncaughtRejection', unhandledRejection);
process.on('uncaughtException', uncaughtException);

initializePassport(app);

passport.use(githubStrategy);
passport.use(localStrategy);
passport.use(googleStrategy);
passport.use(appleStrategy);

passport.serializeUser(function (user, done) {
    // @ts-ignore
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err: Error, user: Express.User) {
        done(err, user);
    });
});

app.use('/auth',authRoutes);