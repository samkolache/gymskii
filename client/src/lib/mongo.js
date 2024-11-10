

import mongoose from "mongoose";

export async function dbConnect() {
    try { //check connection state
        if (mongoose.connection.readyState >= 1) { //checks the connection === 1(connected) or 0(disconnected)
            return mongoose.connection; //returns connection
        }
        const conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING), { //connects to DB from .env and stores in conn
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected:", conn.connection.host); //log the conn was successfull 
        return conn;
    } catch (e) { //catch any error
        console.error("MongoDB connection error:", e.message);
        throw new Error("Failed to connect to MongoDB");
    }
}
