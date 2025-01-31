import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Home Page | AnyTech",
  description: "Embrace the future of finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar></Navbar>
        <div className="max-w-screen-xl mx-auto md:p-8 p-2 antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}
