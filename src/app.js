import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// express documentation 
// requst and response 

// requests to be studied
/*

*/ 

// cookie parser, CORS
// app.use is used for middlewares

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) // learn cors documentation

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended:true, limit: '16kb'}))
app.use(express.static("public")) // to set as the public folder for server access
app.use(cookieParser())

/* middle ware:
    
*/

export { app };