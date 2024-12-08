import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Editor from "./components/Editor";
import Product from "./components/product";
import Classic from "./components/Classic";
import Cart from "./components/Cart";
import Neural from "./components/Neural";
import Footer from "./components/Foooter";

export default function Home() {
  return (
    <div>
   
    <HomeSection />
    <Editor />
    <Product />
    <Classic />
   
    <Neural />
    <Cart />
   <Footer />
    </div>
  
  );
}
