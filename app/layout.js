import "./globals.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"/>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}