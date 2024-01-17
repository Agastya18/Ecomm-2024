import express from 'express';
import dotenv from 'dotenv';

dotenv.config(
    // {
    //     path: './.env'
    // }
);
const app = express();
const PORT=process.env.PORT
app.get('/', (req, res) => {
  res.send('Server is ready');
})

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${process.env.PORT}`);
})