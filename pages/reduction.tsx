import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Reduction from "@/components/Reduction";




const PageReduction = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Reduction />
      <Footer />
    </div>
    );
  };
  
  export default PageReduction;