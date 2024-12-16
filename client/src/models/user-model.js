import mongoose, {Schema} from "mongoose"


const userSchema = new Schema({ 
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

export const User = mongoose.models.User || mongoose.model("User", userSchema); 

