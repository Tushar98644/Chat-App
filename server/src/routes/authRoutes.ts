import { Router } from "express";
import passport from "passport";
import * as dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup'
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: 'http://localhost:3000'
    }),
    // function (req, res) {
    //     res.redirect('http://localhost:3000');
    // }
);

router.get('/github',
    passport.authenticate('github'));

router.get('/github/callback',
    passport.authenticate('github',
        {
            failureRedirect: '/login',
            successRedirect: 'http://localhost:3000'
        }
    ),
);

router.get('/apple', passport.authenticate('apple', { scope: ['email', 'profile'] }));
router.get('/apple/callback',passport.authenticate('apple', { 
    failureRedirect: '/login' ,
    successRedirect: 'http://localhost:3000'
},
));


export { router as authRoutes };