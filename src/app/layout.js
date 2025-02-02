import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";

export const metadata = {
  title: "Home Page | AnyTech",
  description: "Embrace the future of finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Banner></Banner>
        {/* <Navbar></Navbar> */}
        <div className="max-w-screen-xl mx-auto lg:p-16 md:p-8 p-2 antialiased">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
