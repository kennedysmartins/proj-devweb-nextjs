import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: NEXT_JS_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: NEXT_JS_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
});

/*https://www.telerik.com/blogs/how-to-implement-google-authentication-nextjs-app-using-nextauth*/