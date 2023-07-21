import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Forgotten from "@/components/Forgotten";



const PageForgotten = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Forgotten />
      <Footer />
    </div>
    );
  };
  
  export default PageForgotten;