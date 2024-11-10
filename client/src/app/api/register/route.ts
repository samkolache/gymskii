import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";
import { getSession } from "next-auth/react";

export const POST = async (request) => { //handle the post request
  try {
    const { fname, lname, email, password } = await request.json(); //parse in json to extract form inputs

    console.log("Received data:", fname, lname, email, password);

    // Ensure all required fields are provided
    if (!fname || !lname || !email || !password) { //error handling
      throw new Error("All fields are required");
    }

    // Connect to the database
    await dbConnect(); //connect to the DB

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 5); 

    // Create a new user object
    const newUser = { 
      fname,
      lname,
      email,
      password: hashedPassword,
    };

    // Save the new user to the database
    await createUser(newUser);

    return new NextResponse("User has been created", { //if it works return this
      status: 201,
    });

  } catch (err) { //error handling
    console.error("Error in /api/register:", err.message);
    return new NextResponse(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const GET = async (request) => {
  try {
    await dbConnect();

    // Get the session to identify the logged-in user
    const session = await getSession({ req: request });

    if (!session) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Find the user in the database using the email from the session
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return user data (only fname, lname, and email)
    return new NextResponse(
      JSON.stringify({
        firstName: user.fname,
        lastName: user.lname,
        email: user.email,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error fetching user data:", err.message);
    return new NextResponse(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};