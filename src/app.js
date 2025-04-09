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

app.use(express.json({limit: '16kb'}))//to parse ncoming JSON payloads and attaches to them to req.body
app.use(express.urlencoded({extended:true, limit: '16kb'}))//necessary for form submission as it allows parsing of nested objects (extended true)
app.use(express.static("public")) // to set as the public folder for server access 
// the above is used to serve all static files like HTML, CSS and images in the public folder
//manual routing is avoided by using express.static for frontend files
app.use(cookieParser())
// parses the cookies from the incoming requests and attaches them to req.cookies

/* middle ware:
    
*/

// routes import 
import userRouter from './routes/user.routes.js';

// routes  declaration

app.use("/api/v1/users", userRouter); // https://localhost:8000/api/v1/users/register





export { app };