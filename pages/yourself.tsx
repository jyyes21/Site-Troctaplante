import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Yourserf from "@/components/Yourserf";


const PageYourself = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Yourserf />
      <Footer />
    </div>
    );
  };
  
  export default PageYourself;