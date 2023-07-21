import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Papotage from "@/components/Papotage";


const PagePapotage = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Papotage />
      <Footer />
    </div>
    );
  };
  
  export default PagePapotage;