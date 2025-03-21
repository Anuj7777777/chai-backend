// require("dotenv").config({path: "./.env"}); // to load the environment variables from the .env file
// the hampers the consistency of code as import is used to import new files

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});


connectDB();


































// import mongoose from 'mongoose';
// // wrap the database in a try catch block 
// // database is another in another continent
// // requirement of time due to propagation delay might happen
// // hence async await is used
// import {DB_NAME } from "./constants";
// import express from "express";
// const app = express();


// // iffy function (async () => {})() method

//     // data base connection is always in another continent therefore async await is used
// async function connectDB(){

//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error(`Error: ${error.message}`);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//     }catch(error){
//         console.error(`Error: ${error.message}`);
//     }

// }

// connectDB();