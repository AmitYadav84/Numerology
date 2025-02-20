import express from 'express'
import mongoose from "mongoose";
import connectDb from "./database/db.js"
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
dotenv.config();

import AuthRouter from './Routes/AuthRouter.js'
 
const port = process.env.PORT || 3000;

connectDb(); 

app.get("/", (req, res) => {
    res.send("Hello I am Numerology Web App in Backend");
})
app.use(bodyParser.json());
app.use(cors());
app.use("/auth/user", AuthRouter);
app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
})