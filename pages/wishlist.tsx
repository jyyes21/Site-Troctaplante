import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Wishlist from "@/components/Wishlist";



const PageWishlist = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Wishlist />
      <Footer />
    </div>
    );
  };
  
  export default PageWishlist;