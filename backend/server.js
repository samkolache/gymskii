import express from 'express'
import mongoose from 'mongoose'
import { PORT, mongoDBURL } from './config.js'
//import schema
//import route file
import cors from 'cors'
import { User } from './models/userModel.js'
import userRoutes from './routes/userRoutes.js'

const app = express() 

app.use(express.json())

app.use(cors());

app.use('/profile', userRoutes)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listenting on ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })