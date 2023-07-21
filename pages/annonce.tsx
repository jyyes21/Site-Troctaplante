import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Annonce from "@/components/Annonce";



const PageAnnonce = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Annonce />
      <Footer />
    </div>
    );
  };
  
  export default PageAnnonce;