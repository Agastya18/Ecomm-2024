import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoute.js';
import productRoutes from './routes/productRoute.js';
dotenv.config(
    //  {
    //      path: './.env'
    //  }
);
const app = express();
const PORT=process.env.PORT
connectDB();

//middlewares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

//routes



app.use('/api/v1/user', userRoutes);

app.use('/api/v1/product',productRoutes)

app.listen(PORT, () => {
  console.log(`Serve running at:  http://localhost:${PORT}`);
})