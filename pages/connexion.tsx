import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Connexion from "@/components/Connexion";



const PageConnexion = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between overflow-y-scroll overflow-hidden'>
      <Header />
      <Connexion />
      <Footer />
    </div>
    );
  };
  
  export default PageConnexion;