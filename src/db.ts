import mongoose from "mongoose";

export async function connectDB(){
    try {
        const mongoURI = process.env.MONGODB_URI || ""
        await mongoose.connect(mongoURI)
    } catch (error) {
        console.log(error);
    }
}