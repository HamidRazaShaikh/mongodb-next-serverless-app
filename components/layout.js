import Head from "next/head";
import NavbarComponent from "./navbar";



export default function Layout({ children }) {
  return (
    <>
     

        <Head>
          <title>MOGODB NEXT JS APP WITH BOOTSTRAP</title>
          <meta
            name="description"
            content="mongodb-nextjs app with bootstrap"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
       
        <NavbarComponent />
        {children}
     
    </>
  );
}
