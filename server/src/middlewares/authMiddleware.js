import jsonwebtoken from 'jsonwebtoken';
import { jwt_secret } from '../config/index.js';



export const auth = async (req, res, next) => {
   /// const token = req.header('X-Authorization');
    const token = req.headers['x-authorization'];

    if (!token) {

       return next();
    }


    try{

        const user = jsonwebtoken.verify(token, jwt_secret);

        req.user = user;
        
        
    }catch(err){

        res.status(401).end()
    }


    next()

}
