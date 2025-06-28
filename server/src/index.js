import express from 'express';
import routes from './routes.js';


const app = express();

app.use(express.json())

 app.use((req,res,next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
 
     next()
 })
 
app.use(routes);


app.get('/data/catalog', (req,res)=> {
    res.json({});
});


app.listen(3030, ()=>{console.log('Server is listening on port http://localhost:3030 ...')})