import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import authRouter from './routes/auth.router.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'


dotenv.config()
let app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
let port = process.env.PORT || 6000


app.use('/api/auth',authRouter)

app.listen(port,()=>{
    connectDb();
    console.log('server started successfully!');
});