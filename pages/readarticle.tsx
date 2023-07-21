import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Readarticle from "@/components/Readarticle";




const PageReadarticle = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Readarticle />
      <Footer />
    </div>
    );
  };
  
  export default PageReadarticle;