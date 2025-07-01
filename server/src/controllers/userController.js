import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post('/login', async (req, res) => {

    const {email, password} = req.body;
    console.log(req.body);
    

    const result = await userService.login(email, password);

    res.json(result);
});

userController.post('/register', async (req,res)=> {
    const userData = req.body;
    
    const result = await userService.register(userData)

    res.json(result)
      
});

userController.get('/logout', async (req, res) => {

    res.json({});
});


export default userController