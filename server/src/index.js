import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.use(cors());

/// app.use((req,res,next) => {
///     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
/// 
///     next()
/// })
 


 mongoose.connect('mongodb://localhost:27017', {dbName: 'furniture-may-2025'})
.then(()=> console.log('Successfuly connect to DB'))
.catch((err)=> console.log('Can not connect to DB: ', err.message))

app.use(routes);

app.use(auth);

app.get('/data/catalog', (req,res) =>{
    res.json([])
})


app.listen(3030, ()=>{console.log('Server is listening on port http://localhost:3030 ...')})