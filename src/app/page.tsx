import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Editor from "./components/Editor";
import Product from "./components/product";
import Classic from "./components/Classic";
import Cart from "./components/Cart";

export default function Home() {
  return (
    <div>
    <Navbar />
    <HomeSection />
    <Editor />
    <Product />
    <Classic />
    <Cart />
   
    </div>
  
  );
}
