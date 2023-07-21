import React from "react"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
      
<footer className=" rounded-lg items-center w-full h-64 bottom-0 static mt-20">
    <div className="w-full relative container mx-auto p-4 md:px-6 md:py-8 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between items-center ml-8">
            <Link href="/" className="flex items-center mb-4 sm:mb-0" >
                <Image width="100" height="100" src="https://troquetaplante.com/wp-content/uploads/2021/09/Logo-TTP-FB.jpg" className=" mr-3" alt="" /></Link>
                <span className="self-center text-2xl whitespace-nowrap text-slate-900 font-mono font-semibold">Troque Ta Plante</span>
            
            <ul className="flex flex-wrap items-center text-base ">
                <li>
                <Link href="propos" className="mr-4 hover:underline md:mr-[15rem] text-slate-900 font-mono font-semibold" >A propos</Link>
                    </li>
                    <li>
                    <Link href="contact" className="hover:underline md:mr-[15rem] text-slate-900 font-mono font-semibold" >Contact</Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/troquetaplante/" className="mr-4 hover:underline md:mr-[15rem] flex flex-wrap items-center" ><svg className="h-8 w-8 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link>
                </li>
                <li>
                <Link href="https://www.facebook.com/Troquetaplante/" className="mr-4 hover:underline md:mr-[5rem] flex flex-wrap items-center" ><svg className="h-8 w-8 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 3 <Link href="/" className="hover:underline" />Troque Ta Plante™. All Rights Reserved.</span>
    </div>
</footer>


    );
  };
  
  export default Footer;