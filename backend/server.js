import express from 'express';
import dotenv from 'dotenv';
import products from './data/product.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
dotenv.config(
     {
         path: './.env'
     }
);
const app = express();
const PORT=process.env.PORT
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

//routes
app.get('/', (req, res) => {
  res.json(products);
})
import userRoute from './routes/userRoute.js';

app.use('/api/v1', userRoute);


app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${process.env.PORT}`);
})