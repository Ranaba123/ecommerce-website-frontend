import mongoose from "mongoose";
import Mongoose from "mongoose"

const connectDB = async () => {
    mongoose.connection.on('connected',()=>{
        console.log("MongoDB connection established successfully");
    })
    await Mongoose.connect(`${process.env.MONGODB_URI}/lightup_candles_project`)
}

export  default connectDB;