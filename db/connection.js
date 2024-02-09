import mongoose from "mongoose";

const connectDB=async ()=>{
    return await mongoose.connect(process.env.DB).
    then(()=>{
        console.log("Connection Success!");
    }).catch((err)=>{
        console.log(`Error while connecting to DB:${err}`);
    })
    
}
export default connectDB;