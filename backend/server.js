import express from 'express';
import dotenv from 'dotenv';
import products from './data/product.js';
import connectDB from './config/db.js';
dotenv.config(
    // {
    //     path: './.env'
    // }
);
const app = express();
const PORT=process.env.PORT
connectDB();
//middlewares

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.json(products);
})
app.get('/api/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  console.log(product);
  res.json(product);
})

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${process.env.PORT}`);
})