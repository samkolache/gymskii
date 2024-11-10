import { User } from "../models/user-model";

export async function createUser(user) { //takes user as a parameter, expecting an object with fname,lnmae ect
    try {
        await User.create(user); //create is a built in mongoose function to create a user
    } catch (e) {
        throw new Error(e.message || "Failed to create user");
    }
}
