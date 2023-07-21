import React from "react";

const Signalement = () => {
  return (

<div>

<div className="selection:bg-lime-300 selection:text-lime-900 w-[300px] h-auto float-right mr-20 mt-[100px]">
</div>
<form>
<div className="w-3/6 mx-auto">
<div className="flex justify-center text-[25px] mb-5"><p>Signaler une annonce :</p></div>
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Motif de signalement</label>
<textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Décrivez au mieux la raison de votre signalement..." required ></textarea>

            <button
              type="submit"
              className="mt-4 inline-block rounded bg-primary px-10 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-slate-600 bg-slate-300 hover:bg-slate-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Signaler l&apos;annonce
            </button>

</div>
</form>
</div>

  );
};

export default Signalement;
