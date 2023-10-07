import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github';
import { Strategy as AppleStrategy } from 'passport-apple';
import { User } from '../models/userModel';
import * as dotenv from 'dotenv'

dotenv.config();

const githubStrategy = new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  callbackURL: '/auth/github/callback',
},
  function (accessToken, refreshToken, profile, cb) {
    // User.find({ githubId: profile.id }, function (err : Error, user: Express.User) {
    //   return cb(err, user);
    // });
    return cb(null, profile);
  }
);

const localStrategy = new LocalStrategy(
  function (username, password, done) {
    // User.findOne({ username: username }, function (err: Error, user: Express.User) {
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }
    //   return done(null, user);
    // });
    return done(null, { username, password });
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
  function (accessToken, refreshToken, profile, cb) {
    // User.find({ googleId: profile.id }, function (err: Error, user: Express.User) {
    //   return cb(err, user);
    // });
    return cb(null, profile);
  }
);

const appleStrategy = new AppleStrategy({
  clientID: process.env.APPLE_CLIENT_ID as string,
  teamID: process.env.APPLE_TEAM_ID as string,
  keyID: process.env.APPLE_KEY_ID as string,
  privateKeyLocation: process.env.APPLE_PRIVATE_KEY_LOCATION as string,
  callbackURL: "/auth/apple/callback",
},
  function (accessToken, refreshToken, profile, cb) {
    // User.find({ appleId: profile.id }, function (err: Error, user: Express.User) {
    //   return cb(err, user);
    // });
    // @ts-ignore
    return cb(null, profile);
  }
);


export {
  googleStrategy,
  localStrategy,
  githubStrategy,
  appleStrategy
}

