import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{ 
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST :${connectionInstance}`) // to know where i am connected as there is possibility of multiple database servers

    }catch(error){
        console.error(`MONGODB connection error: ${error.message}`);
        process.exit(1); // learn exit and process in nodejs documentation

    }
}

export default connectDB;