import express from 'express';
import mongoose from 'mongoose';
import employeeRouter from './routes/employee.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/', employeeRouter);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Connected to MongoDB");
        console.log("Start Server on port 3000");
    })
}).catch(err => {
    console.log(err);
});
   

