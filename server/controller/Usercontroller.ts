import { Request, Response } from "express";
import { User } from "../models";
import generateToken from "../config/token";

const RegisterUser = async (req: Request, res: Response) => {
    const { username, email, password, profilepic } = req.body;
    console.log({ username, email, password, profilepic });

    const userExists = await User.findOne({ email });

    if (userExists) {
        console.log('User already exists');
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        const user = await User.create({
            username,
            email,
            password,
            profilepic
        });

        if (user) {
            console.log('User created');
            return res.status(201).json({
                _id: user._id,
                name: user.username,
                email: user.email,
                password: user.password,
                profilepic: user.profilepic,
                // token: generateToken(user._id),
            });
        }
        else {
            console.log('Invalid user data');
            return res.status(400).json({ message: 'Invalid user data' });
        }
    }
    catch (error) {
        console.log('Error creating user:', error);
        return res.status(500).json({ message: 'Error creating user' });
    }
};

const LoginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (user.password == password)) {
        console.log('User logged in');
        return res.status(200).json({
            _id: user._id,
            name: user.username,
            email: user.email,
            profilepic: user.profilepic,
            // token: generateToken(user._id),
        });
    }

    console.log('Invalid email or password');
    return res.status(401).json({ message: 'Invalid email or password' });
};

export { RegisterUser, LoginUser };

