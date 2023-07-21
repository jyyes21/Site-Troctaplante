import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Decouverte from "@/components/Decouverte";


const PageDecouverte = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Decouverte />
      <Footer />
    </div>
    );
  };
  
  export default PageDecouverte;