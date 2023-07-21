import React from "react"
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
      <div className="mt-5 mb-[90px] z-0">
        <div className=" flex flex-row flex-nowarp items-center h-[130px]">
          <Link href="/" ><Image width="250" height="250" src="https://troquetaplante.com/wp-content/uploads/2021/09/Logo-TTP-FB.jpg"  alt={""}/></Link>
          <Link href="papotage" ><button className="focus:text-lime-700 text-slate-900 font-mono font-semibold hover:text-lime-300 duration-300 pl-10 pr-10 hover:mx-4">jardinage et papotage</button></Link>
          <Link href="yourself" ><button className="text-slate-900 font-mono font-semibold hover:text-lime-300 duration-300 pl-10 pr-10 hover:mx-4">Do It Yourserf</button></Link>

          <div className="">

<div className="dropdown inline-block relative w-[190px]">
  <button className=" text-slate-900 font-mono font-semibold py-2 px-4 rounded inline-flex items-center duration-300 hover:mx-4">
  <Link href="decouverte" ><span className="mr-1">Découverte</span></Link>
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul className="duration-300 dropdown-menu absolute hidden text-slate-900 font-mono font-semibold pt-1">
    <li className=""><Link className="hover:px-6 rounded-t bg-gray-100 hover:bg-lime-300 py-2 px-4 block whitespace-no-wrap duration-300 text-xs" href="testpourvous" >J’ai testé pour vous</Link></li>
    <li className=""><Link className="hover:px-6 bg-gray-100 hover:bg-lime-300 py-2 px-4 block whitespace-no-wrap duration-300 text-xs" href="readarticle" >J’ai lu pour vous</Link></li>
    <li className=""><Link className="hover:px-6 rounded-b bg-gray-100 hover:bg-lime-300 py-2 px-4 block whitespace-no-wrap duration-300 text-xs" href="wishlist" >Wishlist du plantaddict</Link></li>
    <li className=""><Link className="hover:px-6 rounded-b bg-gray-100 hover:bg-lime-300 py-2 px-4 block whitespace-no-wrap duration-300 text-xs" href="reduction" >Mes codes de réduction</Link></li>
  </ul>
</div>

</div>

          <Link href="communaute" ><button className="text-slate-900 font-mono font-semibold hover:text-lime-300 duration-300 hover:mx-4">Notre communauté</button></Link>

          <Link href="annonce" ><button className="text-slate-900 font-mono font-semibold hover:text-lime-300 duration-300 pl-10 hover:mx-4">Déposer une annonce</button></Link>

          
          <ul className="flex flex-wrap items-center text-base ml-[100px] w-[250px]">
            <li>
              <Link href="account" >
              <svg className="md:mr-[2rem] w-10 h-10 hover:w-14 hover:h-14 duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
              </svg>
              </Link>
              
            </li>
            <li>
              <Link href="https://www.instagram.com/troquetaplante/" className="hover:animate-bounce hover:underline md:mr-[2rem] flex flex-wrap items-center" ><svg className="h-8 w-8 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/Troquetaplante/" className="hover:animate-bounce hover:underline md:mr-[2rem] flex flex-wrap items-center" ><svg className="h-8 w-8 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link>
            </li>
            </ul>
          
            <div className='max-w-md w-[300px] mr-5'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg focus-within:shadow-gray-400/50 bg-white overflow-hidden shadow-lg shadow-gray-200/50">
        <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full max-w-full outline-none text-sm text-gray-700 pr-2 placeholder-gray-500"
        type="text"
        id="search"
        placeholder="Rechercher..." /> 
    </div>
    <div className="dropdown inline-block relative w-[190px]">
  <button className=" text-slate-900 font-mono font-semibold py-2 px-4 rounded inline-flex items-center duration-300">
  <span className="mr-1">Filtre</span>
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul className="duration-300 dropdown-menu absolute hidden text-slate-900 font-mono font-semibold p-1 px-4 bg-slate-200 w-[300px] rounded-md">
  <div className="relative " data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="text"
              required  />
            <label
              htmlFor="exampleFormControlInput22"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-neutral-500"
              >Pays
            </label>
          </div>
          <div className="relative " data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="text"
              required  />
            <label
              htmlFor="exampleFormControlInput22"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-neutral-500"
              >Région
            </label>
          </div>
          <div className="relative " data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="text"
              required  />
            <label
              htmlFor="exampleFormControlInput22"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-neutral-500"
              >Département
            </label>
          </div>

          <div
          className="mt-2 mb-4 flex items-center w-6/6 mx-auto bg-gray-700 h-[1px] rounded">
          </div>

          <label className="inline-flex items-center ">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" /><span className="ml-2 text-gray-700" />Produits neufs uniquement<span/>
            </label>
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" /><span className="ml-2 text-gray-700" />Dans les magasins autour de moi<span/>
            </label>
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" /><span className="ml-2 text-gray-700" />Dans mes magasins<span/>
            </label>
            <label className="inline-flex items-center ">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" /><span className="ml-2 text-gray-700" />Mon magasin favori<span/>
            </label>
             </ul>



</div>
</div>
</div>
        </div>
    );
  };
  
  export default Header;