import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./models/user-model"; // Make sure this path is correct
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({ //cred config
      name: "Credentials",
      credentials: { //object that defines the input fields, email & password
        email: { label: "Email", type: "email" }, 
        password: { label: "Password", type: "password" }, 
      },
      async authorize(credentials) { //hanldes the actual auth
        if (!credentials?.email || !credentials?.password) { //checks if email and password are given
          throw new Error("Email and password are required");
        }

        // Find the user in the database by email
        const user = await User.findOne({ email: credentials.email }).exec();

        if (!user) { // if no user found in DB error
          throw new Error("No user found with the provided email");
        }

        // Check if the provided password matches the hashed password in the database
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password); //compare the passwords
        if (!isPasswordValid) {
          throw new Error("Invalid password"); //incorrect password
        }

        // Return the user object to include in the session
        return {
          id: user._id.toString(),
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});

export async function getUserByEmail(email: string) {
  try {
    const user = await User.findOne({ email }).exec();
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
}
