import express from 'express'
import dotenv from  'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

//load env variables
dotenv.config();

import authRoutes from './routes/authRoutes.js'

const app = express() 


//middleware
app.use(express.json())
app.use(cors());


//routes
app.use('/api/auth', authRoutes)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));