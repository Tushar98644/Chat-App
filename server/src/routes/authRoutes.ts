import { Router } from "express";
import passport from "passport";

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
    passport.authenticate('google', { scope: ['email','profile'] }));

router.get('/google/callback',
    passport.authenticate('google', { 
        failureRedirect: '/',
        successRedirect: 'http://localhost:3000/'
     }),
    // function (req, res) {
    //     res.redirect('http://localhost:3000');
    // }
    );

router.get('/github',
    passport.authenticate('github'));

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    // function (req, res) {
    //     res.redirect('/');
    // }
    );


export { router as authRoutes };