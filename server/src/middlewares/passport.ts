import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github';
import { User } from '../models/userModel';
import * as dotenv from 'dotenv'

dotenv.config();

const githubStrategy = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    callbackURL: "http://localhost:8000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.find({ githubId: profile.id }, function (err : Error, user: Express.User) {
    //   return cb(err, user);
    // });
    return cb(null, profile);
  }
);

const localStrategy = new LocalStrategy(
  function(username, password, done) {
    // User.findOne({ username: username }, function (err: Error, user: Express.User) {
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }
    //   return done(null, user);
    // });
    return done(null, {username, password});
  }
);

const googleStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "/auth/google/callback",
  },
  // () => {
  //   console.log('google strategy')
  // }
  function(accessToken, refreshToken, profile, cb) {
    // User.find({ googleId: profile.id }, function (err: Error, user: Express.User) {
    //   return cb(err, user);
    // });
    return cb(null, profile);
  }
);

export  {
  googleStrategy,
  localStrategy,
  githubStrategy
}

