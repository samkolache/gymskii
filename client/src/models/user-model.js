import mongoose, {Schema} from "mongoose"
//a schema defines the strucutre of the documents within a collection

const userSchema = new Schema({ //instance of a schema
    fname: {
        required: true, 
        type: String,
    },
    lname: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema); //creates a "User" model using the user schema

