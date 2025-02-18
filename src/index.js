import express from "express";
import { connectDB } from './config/db.js'
import routes from './routes/indexRoutes.js'
const app = express();
// Connect to MongoDB
connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(routes)
app.get('/', (req, res) => {
    res.send('Hello from Express on Vercel!');
  });

app.listen(PORT, () =>{
    console.log(`RUNNING IN PORT ${PORT}`)
})
