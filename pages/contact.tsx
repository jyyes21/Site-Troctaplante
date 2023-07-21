import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";




const PageContact = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Contact />
      <Footer />
    </div>
    );
  };
  
  export default PageContact;