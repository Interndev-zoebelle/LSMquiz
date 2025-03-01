import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import {Nunito} from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // @ts-expect-error Suppress hydration warning caused by Grammarly extension
  return (
    <html lang="en">
      <head>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
        />
      </head>
      <ClerkProvider>
        <body className={`${nunito.className}  antialiased`}>
          <Header />
          <main className="py-8 mx-[15rem] xl:mx-[25rem] h-full">
            {children}
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
