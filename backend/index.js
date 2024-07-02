import express, { response } from "express";
import mongoose from "mongoose";
import {PORT,mongoDBURL} from "./config.js"
import {Book} from './models/bookModel.js'
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'
const app=express();

app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods:['PUT','DELETE','GET','POST'],
//     allowedHeaders:['Content-Type'],
// }));

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome")
});

app.use('/books', bookRoutes);


mongoose.connect(mongoDBURL)
.then(()=>{
console.log("App conected to database")
app.listen(PORT,()=>{
    console.log(`App is listening to posrt: ${PORT}`);
})
})
.catch((error)=>{
console.error();
})