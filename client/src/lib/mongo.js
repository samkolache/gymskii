

import mongoose from "mongoose";

export async function dbConnect() {
    try { 
        if (mongoose.connection.readyState >= 1) { 
            return mongoose.connection; 
        }
        const conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING), { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected:", conn.connection.host); 
        return conn;
    } catch (e) { 
        console.error("MongoDB connection error:", e.message);
        throw new Error("Failed to connect to MongoDB");
    }
}
