import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./models/user-model"; // Make sure this path is correct
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        // Find the user in the database by email
        const user = await User.findOne({ email: credentials.email }).exec();

        if (!user) {
          throw new Error("No user found with the provided email");
        }

        // Check if the provided password matches the hashed password in the database
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        // Return the user object with necessary properties for the session
        return {
          id: user._id.toString(),
          email: user.email,
          fname: user.fname, // Include first name
          lname: user.lname, // Include last name
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
        token.fname = user.fname; // Add first name to the token
        token.lname = user.lname; // Add last name to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.fname = token.fname; // Include first name in the session
        session.user.lname = token.lname; // Include last name in the session
      }
      return session;
    },
  },
});
