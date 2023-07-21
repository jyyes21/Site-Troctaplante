import React from "react";

const Contact = () => {
  return (

<div>
<form>
<div className="w-3/6 mx-auto">
<div className="flex text-[35px] mb-8"><p>Contact</p></div>
<div className="mb-8"><p>Si vous avez des questions, des suggestions, des propositions de collaboration, n’hésitez pas à me contacter ici :</p></div>
<div className="mb-6">
    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
    <input type="text" id="base-input" className="bg-gray-50 rounded border border-gray-300 text-gray-900 text-sm w-full p-2.5" required />
</div>
<div className="mb-6">
    <label  htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    <input required placeholder="Email address" type="email" id="base-input" className="bg-gray-50 rounded border border-gray-300 text-gray-400 text-sm  w-full p-2.5 block file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-lime-700 hover:file:bg-gray-100" />
</div>
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
<textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required />

            <button
              type="submit"
              className="mt-4 inline-block rounded bg-primary px-10 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-slate-600 bg-slate-300 hover:bg-slate-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Envoyer
            </button>

</div>
</form>
</div>

  );
};

export default Contact;
