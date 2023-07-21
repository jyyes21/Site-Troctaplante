import React from "react";
import Image from 'next/image';

const Account = () => {
  return (

    <div className="selection:bg-lime-300 selection:text-lime-900 h-auto w-full ">
      <div className="flex justify-center text-[25px] mb-5"><p>Mon Compte</p></div>
    <div className=" w-screen h-auto justify-center justify-items-center flex">
      <div className="flex-auto grid-cols-1 gap-x-20 gap-y-5 grid ml-60 mr-14 max-w-[220px] max-h-[250px]">
        <div className="bg-lime-300 pl-1">
        <div className="bg-gray-200 pl-4 h-full py-3 pr-10">
          <p className="text-lime-800 font-mono font-semibold mb-4">MES VENTES</p>
          <p className="font-mono pb-3 leading-[16px]">Mes ventes en magasin</p>
        </div>
        </div>

        <div className="bg-lime-300 pl-1">
        <div className="bg-gray-200 pl-4 h-full py-3 pr-10">
          <p className="text-lime-800 font-mono font-semibold mb-4">MES ACHATS</p>
          <p className="font-mono pb-3 leading-[16px]">Mes commandes en ligne</p>
        </div>
        </div>

        <div className="bg-lime-300 pl-1">
        <div className="bg-gray-200 pl-4 h-full py-3 pr-10">
          <p className="text-lime-800 font-mono font-semibold mb-4">MON COMPTE</p>
          <p className="font-mono pb-3 leading-[16px]">Tableau de bord</p>
          <p className="font-mono pb-3 leading-[16px]">Mes coordonnées</p>
          <p className="font-mono pb-3 leading-[16px]">Mon adresse de livraison</p>
        </div>
        </div>

        <div className="bg-lime-300 pl-1">
        <div className="bg-gray-200 pl-4 h-full py-3 pr-10">
          <p className="text-lime-800 font-mono font-semibold mb-4 leading-[16px]">MES SERVICES TROC.COM</p>
          <p className="font-mono pb-3 leading-[16px]">Mes ventes en magasin</p>
        </div>
        </div>
        
      </div>
      <div className="flex-grow ">
      <div className="flex-auto">
      <p className="">Bienvenue &quot;Utilisateur&quot; sur votre compte personnel <a className="font-semibold">Troc.com</a></p>
      </div>
      <div>

        <div className="flex-row flex justify-center max-w-[900px]">
        <div className="py-3 pr-10 w-full">
          <p className="text-lime-800 font-mono font-semibold mb-4 leading-[16px] bg-slate-300 p-4 flex justify-center">Mes ventes en magasin</p>
          <p className="font-mono font-semibold pb-3 pl-6 text-[20px]">Vous avez</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> contrat actif</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> article à la vente</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> article vendu</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> article autre</p>
          <p className="font-mono pl-6 pt-14">Mon solde Troc<a className="font-semibold text-red-600"> 0.00</a></p>
        </div>
        <div className="pl-4 py-3 pr-10 w-full">
          <p className="text-lime-800 font-mono font-semibold mb-4 leading-[16px] bg-slate-300 p-4 flex justify-center">Mes commandes en ligne</p>
          <p className="font-mono font-semibold pb-3 pl-6 text-[20px]">Vous avez</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> en attente de dépôt</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> en attente validation magasin</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> en attente enlèvement</p>
        </div>
        </div>
        <div className="max-w-[900px]">
        <div className="py-3 pr-10 w-full">
          <p className="text-lime-800 font-mono font-semibold mb-4 leading-[16px] bg-slate-300 p-4 flex justify-center">Mes services Troc.com</p>
          <p className="font-mono font-semibold pb-3 pl-6 text-[20px]">Vous avez</p>
          <p className="font-mono pl-6"><a className="font-semibold">0</a> article favori</p>
        </div>
        </div>
      </div>
      </div>
      </div>
<div>

      <div className="mt-40 container mx-auto shadow-lg rounded-lg w-4/6">


    <div className="flex flex-row justify-between bg-white">

    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">

        <div className="border-b-2 py-4 px-2">
          <input
            type="text"
            placeholder="Rechercher"
            className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>



<div className="radio-input">
  <label>
  <input type="radio" name="value-radio"  />
  <Image
  width="700" height="500" 
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              alt=""
            />
  <span>User 1</span>
  </label>
  <label>
  <input type="radio" name="value-radio"  />
  <Image
  width="700" height="500" 
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              alt=""
            />
  <span>User 2</span>
  </label>
  <label>
  <input type="radio" name="value-radio"  />
  <Image
  width="700" height="500" 
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              alt=""
            />
  <span>User 3</span>
  </label>
  <label>
  <input type="radio" name="value-radio"  />
  <Image
  width="700" height="500" 
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              alt=""
            />
  <span>User 4</span>
  </label>
  <label>
  <input type="radio" name="value-radio"  />
  <Image
  width="700" height="500" 
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              alt=""
            />
  <span>User 5</span>
  </label>
  <span className="selection"></span>
</div>
        

      </div>
      <div className="w-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5">
          <div className="flex justify-end mb-4">
            <div
              className="mr-2 py-3 px-4 bg-lime-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
            >
              Lorem, ipsum dolor.
            </div>
            <Image
            width="8" height="8" 
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="flex justify-start mb-4">
            <Image
            width="8" height="8"
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <div>
              <div
                className="mr-2 py-3 px-4 bg-lime-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, repudiandae.
              </div>

              <div
                className="mt-4 mr-2 py-3 px-4 bg-lime-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, reiciendis!
              </div>
            </div>
            <Image
            width="8" height="8"
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="flex justify-start mb-4">
            <Image
            width="8" height="8"
              src="https://troquetaplante.com/wp-content/uploads/2023/02/Couverture-selection-printaniere-createurs-2023-300x169.jpeg"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              Lorem ipsum dolor sit.
            </div>
          </div>
        </div>
        
<input type="text" name="text" className="input" placeholder="Envoyer un message..." />
      </div>

      </div>
    </div>
</div>
</div>

  );
};

export default Account;
