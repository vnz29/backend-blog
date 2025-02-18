import express from "express";
import { connectDB } from './config/db.js'
import routes from './routes/indexRoutes.js'
const app = express();
// Connect to MongoDB
connectDB();

app.use(express.json())
app.use(routes)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`RUNNING IN PORT ${PORT}`)
})
