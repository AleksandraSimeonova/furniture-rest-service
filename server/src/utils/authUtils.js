import jsonwebtoken from 'jsonwebtoken';
import { jwt_secret } from '../config/index.js';

export const generateAuthToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
    };

    const token = jsonwebtoken.sign(payload, jwt_secret, {expiresIn: '2h'});
    return token
}