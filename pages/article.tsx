import React from "react"
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Article from "@/components/Article";




const PageArticle = () => {
    return (
      <div className=' pt-3 flex flex-col h-screen justify-between overflow-y-scroll overflow-hidden'>
      <Header />
      <Article />
      <Footer />
    </div>
    );
  };
  
  export default PageArticle;