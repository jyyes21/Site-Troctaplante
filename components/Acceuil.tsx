import React from "react";
import Image from 'next/image';




const Acceuil = () => {
    return (
<div>
    <div className="selection:bg-lime-300 selection:text-lime-900 z-5 mx-auto w-4/6 snap-x scroll-smooth overflow-y-hidden relative h-56 flex flex-nowrap  px-[300px] overflow-x-scroll rounded-lg md:h-96">

            <Image width="800" height="500" className="object-cover w-[800px] mx-20 snap-center my-8" src="https://troquetaplante.com/wp-content/uploads/2021/09/Rejoins-la-communauté-scaled.jpg"  alt="..." />

            <Image width="800" height="500" className="object-cover w-[800px] mx-20 snap-center my-8" src="https://troquetaplante.com/wp-content/uploads/2021/09/Jardinage-et-papotage.jpg" alt="..." />

            <Image width="800" height="500" className="object-cover w-[800px] mx-20 snap-center my-8" src="https://troquetaplante.com/wp-content/uploads/2022/01/DIY.jpg" alt="..." />

            <Image width="800" height="500" className="object-cover w-[800px] mx-20 snap-center my-8" src="https://troquetaplante.com/wp-content/uploads/2021/09/Capture-Découvertes.png" alt="..." />
    </div>


    <div className="flex flex-row flex-nowarp items-center h-[800px] place-content-around mb-20">
        <iframe className="w-[700px] h-[500px]" src="https://www.youtube.com/embed/of7-CdLRw9g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe className="w-[700px] h-[500px]" src="https://www.youtube.com/embed/QmUH_mD59jE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className="ml-[8vw] h-1 w-[1400px] bg-lime-300 mb-60"></div>
    <div className="justify-items-center items-center h-auto place-content-around grid-cols-2 gap-x-8 gap-y-4 grid">
        <Image width="700" height="500" src="https://troquetaplante.com/wp-content/uploads/2021/09/Rejoins-la-communauté-scaled.jpg" alt="..." />
        <Image  width="700" height="500" src="https://troquetaplante.com/wp-content/uploads/2021/09/Rejoins-la-communauté-scaled.jpg" alt="..." />
        <Image  width="700" height="500" src="https://troquetaplante.com/wp-content/uploads/2021/09/Rejoins-la-communauté-scaled.jpg" alt="..." />
        <Image  width="700" height="500" src="https://troquetaplante.com/wp-content/uploads/2021/09/Rejoins-la-communauté-scaled.jpg" alt="..." />
    </div>
</div>




    );
  };
  
  
  export default Acceuil;
