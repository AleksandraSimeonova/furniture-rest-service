import { generateAuthToken } from "../utils/authUtils.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt';



export default{
    async register(userData){

        const createdUser = await User.create(userData);

        const token = generateAuthToken(createdUser);
        

        return {
            _id: createdUser.id,
            email: createdUser.email,
            accessToken: token
        }
    },
    async login(email, password) {
        const user = await User.findOne({ email });
        console.log(user);

        
        if (!user) {
            throw new Error('Email or password are incorrect!');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Email or password are incorrect!');
        }

        const token = generateAuthToken(user);

        return { 
            _id: user.id,
            email: user.email,
            accessToken: token };
    },

}