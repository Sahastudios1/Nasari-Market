import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saabiqsaha:Fatimahmahamadu1@cluster0.rpori2u.mongodb.net/e-commerce').then(()=>console.log("DB Connected"));
}