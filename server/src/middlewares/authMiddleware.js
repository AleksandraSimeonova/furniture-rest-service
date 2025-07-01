import jsonwebtoken from 'jsonwebtoken';
import { jwt_secret } from '../config/index.js';



export const auth = async (req, res, next) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return next();
    }

    try{

        const user = jsonwebtoken.verify(token, jwt_secret);

        req.user = user;
        next();
    }catch(err){

        res.status(401).end()
    }

}
