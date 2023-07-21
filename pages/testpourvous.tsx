import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Testpourvous from "@/components/Testpourvous";



const PageTestpourvous = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Testpourvous />
      <Footer />
    </div>
    );
  };
  
  export default PageTestpourvous;