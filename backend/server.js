import express from 'express';
import dotenv from 'dotenv';
import 'dotenv/config';
import pool from './src/config/db.js';
import cloudinary from "./src/config/cloudinary.js";
import imageRouter from './src/routes/imageRoutes.js';
import cors from 'cors';

const app = express()
const port = process.env.PORT;

app.use(cors());

app.use(express.json()) //express.json is a middleware which convert data into json 
app.use("/api/images",imageRouter);

app.get('/', (req, res) => {
    res.send("3000 port is ")
})

const startServer = async () => {
    try {
        await pool.query("SELECT NOW()");
        console.log("Database connection setup ");

        const result = await cloudinary.api.ping();
        console.log("Cloudinary connected", result);

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (err) {
        console.log("Startup failed", err);
    }
}

startServer()