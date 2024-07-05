import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionIstnace = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected!! DB Host; ${connectionIstnace.connection.host}`)
    } catch (error) {
        console.log('MONGODB connection FAILED', error);
        process.exit(1)
    }
}

export default connectDB;