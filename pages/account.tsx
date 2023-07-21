import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Account from "@/components/Account";


const PageAccount = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between overflow-y-scroll overflow-hidden'>
      <Header />
      <Account />
      <Footer />
    </div>
    );
  };
  
  export default Account;