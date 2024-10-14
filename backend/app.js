
import express from 'express';
import dotenv from "dotenv";

const env = dotenv.config({ path: "./.env" });

console.log(process.env.MONGO_URI);

const app = express();

export default app;