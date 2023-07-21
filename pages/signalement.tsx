import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Signalement from "@/components/Signalement";



const PageSignalement = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Signalement />
      <Footer />
    </div>
    );
  };
  
  export default PageSignalement;