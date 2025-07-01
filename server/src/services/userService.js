import User from "../models/User.js";



export default{
    register(userData){

        const createdUser = User.create(userData)
        return {
            _id:'',
            email: '',
            accessToken: ''}
    }

}