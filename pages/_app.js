import { SessionProvider } from "next-auth/react";
function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default App;
//https://www.blackslate.io/articles/nextjs-google-authentication-using-nextauth