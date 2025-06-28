import { Router } from "express";

const userController = Router();

userController.post('/users/register', (req,res)=> {
    console.log(req.body);

    res.end()
    
})


export default userController