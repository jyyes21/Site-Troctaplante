import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Propos from "@/components/Propos";





const PagePropos = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Propos />
      <Footer />
    </div>
    );
  };
  
  export default PagePropos;