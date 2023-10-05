import passport from 'passport';
import session from 'express-session';
import { Express } from 'express';

export const initializePassport = (app: Express) => {
    app.use(session({
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}