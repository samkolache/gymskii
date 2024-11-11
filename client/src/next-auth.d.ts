// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    fname: string;
    lname: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      fname: string;
      lname: string;
    };
  }

  interface JWT {
    id: string;
    fname: string;
    lname: string;
  }
}
