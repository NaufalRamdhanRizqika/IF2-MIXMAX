import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kosatan:2836498235410@cluster0.l5hf0jg.mongodb.net/Rapli').then(()=>console.log('DB connected'))
}