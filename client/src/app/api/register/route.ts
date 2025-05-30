import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";

export const POST = async (request) => { 
  try {
    const { fname, lname, email, password } = await request.json(); 

    console.log("Received data:", fname, lname, email, password);

    // Ensure all required fields are provided
    if (!fname || !lname || !email || !password) { 
      throw new Error("All fields are required");
    }

    
    await dbConnect(); 

    
    const hashedPassword = await bcrypt.hash(password, 5); 

    
    const newUser = { 
      fname,
      lname,
      email,
      password: hashedPassword,
    };

    
    await createUser(newUser);

    return new NextResponse("User has been created", { 
      status: 201,
    });

  } catch (err) { 
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

