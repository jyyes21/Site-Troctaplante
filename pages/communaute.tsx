import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Communaute from "@/components/Communaute";



const PageCommunaute = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between overflow-y-scroll overflow-hidden'>
      <Header />
      <Communaute />
      <Footer />
    </div>
    );
  };
  
  export default PageCommunaute;