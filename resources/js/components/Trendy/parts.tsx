// accessories imoprt
import Tyres  from "../../../../public/images/Parts/tyres.png"
import Mobils from "../../../../public/images/Parts/mobils.png"
import HelmetCleaner from "../../../../public/images/Parts/helmetCleaner.png"
import ChainLube from "../../../../public/images/Parts/chainLube.png"
import Shiner from "../../../../public/images/Parts/shiner.png"
import Wax from "../../../../public/images/Parts/wax.png"
import ColorSpray from "../../../../public/images/Parts/colorSpray.png"
import Wd40 from "../../../../public/images/Parts/wd40.png"

import "../../../css/main.css"

interface AccessoriesProps{
  cursorVariant: React.Dispatch<React.SetStateAction<string>>
}

export default function Accessories({cursorVariant}:AccessoriesProps){
  return(
    <>
      {/* -------------- Accessories Section ------------- */}
      <div id="Parts" className=""></div>

      <section className="relative w-[1600px] mt-[100px]">
        <div className="sticky  top-30 h-[80vh] py-4 px-8 flex flex-col gap-5 ">
          <div  className="flex flex-col items-center gap-1">
            <h1 className="text-[#ff3635] text-[70px] uppercase font-bold leading-none">Moto Parts</h1>
          </div>

          <div className=" partsection  flex gap-6 w-full items-stretch h-full">

            {/* Moto Parts */}
            <div
              className=" z-1 top-0 left-0 h-full flex flex-col justify-center items-center gap-15 px-8 py-6 w-full"
            >

              {/* Description */}
              <div className="w-[60%] flex flex-col justify-center items-center">
                <span className="text-[#cc3635] uppercase tracking-[0.3em] text-sm font-semibold text-center">
                  Discover More Items
                </span>

                <h2 className="mt-2 text-5xl font-bold leading-tight text-center text-white">
                  Suffice Your <span className="text-[#cc3635]"> Needs.</span>
                </h2>
              </div>

              {/* parts row */}
              <div className="flex items-start justify-between w-[100%] gap-2">
                {/* tyres */}
                <div className="border-1 border-[#cc3635] rounded-xl  duration-700 bg-gradient-to-b from-[#221f20] via-[#221f20] to-[#cc3635]">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[320px] h-[200px]">
                    <img className="w-[95%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Tyres} />
                  </div>
                </div>
                {/* mobils */}
                <div className="border-1 border-[#cc3635] rounded-xl  duration-700 bg-gradient-to-b from-[#221f20] via-[#221f20] to-[#cc3635]">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[320px] h-[200px]">
                    <img className="w-[80%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Mobils} />
                  </div>
                </div>
                {/* color spray */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] rounded-xl  duration-700 bg-gradient-to-b from-[#221f20] via-[#221f20] to-[#cc3635]">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[320px] h-[200px]">
                    <img className="w-[70%] group-hover:scale-[1.18] transition-all smooth duration-600" src={ColorSpray} />
                  </div>
                </div>
                {/* chain lube */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] rounded-xl  duration-700 bg-gradient-to-b from-[#221f20] via-[#221f20] to-[#cc3635]">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[100px] h-[200px]">
                    <img className="w-[76%] group-hover:scale-[1.18] transition-all smooth duration-600" src={ChainLube} />
                  </div>
                </div>
                {/* wax */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] rounded-xl  duration-700 bg-gradient-to-b from-[#221f20] via-[#221f20] to-[#cc3635]">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[100px] h-[200px]">
                    <img className="w-[70%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Wax} />
                  </div>
                </div>
                {/* shiner */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] rounded-xl  duration-700 bg-gradient-to-b from-[#221f20] via-[#221f20] to-[#cc3635]">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[100px] h-[200px]">
                    <img className="w-[42%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Shiner} />
                  </div>
                </div>
                {/* helmet cleaner */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] rounded-xl  duration-700 bg-gradient-to-b from-[#221f20] via-[#221f20] to-[#cc3635]">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[100px] h-[200px]">
                    <img className="w-[38%] group-hover:scale-[1.18] transition-all smooth duration-600" src={HelmetCleaner} />
                  </div>
                </div>
              </div>

              {/* cta */}
              <div className="w-[60%] flex flex-col justify-center items-center">
                <p className="text-[15px] leading-7 text-center text-gray-300">
                  Discover premium helmets from industry-leading brands built for every
                  riding style. Whether you prefer aggressive racing, touring, or everyday
                  commuting, our collection combines safety, comfort, and modern design.
                </p>

                <button
                  onMouseEnter={()=>cursorVariant("button")}
                  onMouseLeave={()=>cursorVariant("default")}
                 className="cursor-pointer group mt-8 w-fit rounded-md border border-[#cc3635] bg-[#cc3635] px-7 py-3 font-medium text-white hover:bg-transparent hover:text-[#cc3635] transition-all duration-500">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}