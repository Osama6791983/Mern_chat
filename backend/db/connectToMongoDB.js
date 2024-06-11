import mongoose from "mongoose";
const connectToMongoDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/quckchat")
        console.log("Connected to mongodb");
    } catch (error) {
        console.log(`error while connecting ${error.message}`);
    }
}

export default connectToMongoDB;