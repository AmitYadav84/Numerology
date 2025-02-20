import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const mongoUrl = process.env.MONGO_URI;

const  connectDb = () => {
     
   return  mongoose.connect(mongoUrl)
          .then(() => {
            console.log(`Database Connected Successfully`);
          })
          .catch((err) => {
            console.log("Database Error -->", err);
          });
}

export default connectDb;
