import mongoose from "mongoose";

const userSchema = mongoose.Schema (
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        quote: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export const User = mongoose.model('user', userSchema);