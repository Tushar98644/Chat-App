import { Request,Response } from "express";
import { User } from "../models";

const RegisterUser = async(req: Request, res: Response) => {
    const { name, email, password,profilepic } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        console.log('User already exists');
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
        name,
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
            profilepic:user.profilepic,
            // token: generateToken(user._id),
        });
    }
    console.log('Invalid user data');
    return res.status(400).json({ message: 'Invalid user data' });
};

const LoginUser = async(req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.password== password)) {
        console.log('User logged in');
        return res.status(200).json({
            _id: user._id,
            name: user.username,
            email: user.email,
            profilepic:user.profilepic,
            // token: generateToken(user._id),
        });
    }   
    console.log('Invalid email or password');
    return res.status(401).json({ message: 'Invalid email or password' });
};

export { RegisterUser,LoginUser };    
    
