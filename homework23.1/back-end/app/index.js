import express from "express";
import mongoose from 'mongoose';
import { logger } from "../libs/logger.js";
import { todoRouter } from "./controller.js";
import cors from 'cors';




const app = express(); 

app.use(cors());

mongoose.connect('mongodb+srv://root:root@cluster.9tmfeyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'); 

const db = mongoose.connection;

db.on('error', (error) => {
    logger.error(`Connection error: ${JSON.stringify(error)}`);
})

db.on('open', () => {
    logger.info("Connected to MongoDB")
})



const logRequestMiddleware = 
    process.env.LOGGER_LEVEL === "debug"
        ? ( req, res, next ) => {
            logger.info(`${req.method}: '${req.path}'`);
            next();
        }
        : (req , res , next ) => next();

app.use(express.json());
app.use(logRequestMiddleware);
app.use("/", todoRouter )

export { app };


