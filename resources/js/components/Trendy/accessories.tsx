// accessories imoprt
import Gloves from "../../../../public/images/Accessories/gloves.png"
import LegGuard from "../../../../public/images/Accessories/legguard.png"
import Raincoat from "../../../../public/images/Accessories/raincoat.png"
import RidingBoots from "../../../../public/images/Accessories/ridingBoots.png"
import RidingJacket from "../../../../public/images/Accessories/ridingJacket.png"
import RowOfAccessories from "../../../../public/images/Accessories/row.png"
import Bag from "../../../../public/images/Accessories/Bag.png"

import "../../../css/main.css"

interface AccessoriesProps{
  cursorVariant: React.Dispatch<React.SetStateAction<string>>
}

export default function Accessories({cursorVariant}:AccessoriesProps){
  return(
    <>
      {/* -------------- Accessories Section ------------- */}
      <div id="Accessories" className=""></div>

      <section className="relative w-[1600px] mt-[100px]">
        <div className="sticky top-30 h-[80vh] py-4 px-8 flex flex-col gap-13 ">
          <div  className="flex flex-col items-center gap-1">
            <h1 className="text-[#ff3635] text-[70px] uppercase font-bold leading-none">Accesssories</h1>
          </div>

          <div className=" accessoriessection flex gap-6 w-full items-stretch max-h-[80%]">
            <div id="accessoriessection" className="overflow-hidden w-[50%] grid grid-cols-3 grid-rows-4 gap-3 cursor-pointer">
              {/* Row of Accessories */}
              <div className="group col-span-3 row-span-1 bg-[#221f20] px-5 py-2 rounded-xl border-2 border-[#cc3635]/40 overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#cc3635] bg-[length:300%_100%] bg-[position:0%_0%] 
              hover:bg-[position:80%_0%] transition-all duration-300 ease-in-out">
                <img className="w-[90%] h-[100%] group-hover:scale-[1.12] transition-scale duration-700" src={RowOfAccessories} alt="Accessories Row" />
              </div>
              
              {/* Riding Jacket */}
              <div className="group col-span-2 row-span-2 bg-[#221f20] px-5 py-2 rounded-xl border-2 border-[#cc3635]/40 flex items-center justify-center overflow-hidden
              bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#cc3635] bg-[length:300%_100%] bg-[posttion:0%_0%] hover:bg-[position:80%_0%] transition-all duration-300 ease-in-out ">
                <img className="w-[70%] h-[100%] group-hover:scale-[1.12] transition-scale duration-700" src={RidingJacket} alt="Riding Jacket" />
              </div>
              
              {/* Gloves */}
              <div className="group row-span-1 bg-[#221f20] px-5 py-2 rounded-xl border-2 border-[#cc3635]/40 flex items-center justify-center overflow-hidden bg-gradient-to-r from[#221f20] via-[#221f20] to-[#cc3635] bg-[length:300%_100%] bg-[position:0%_0%] hover:bg-[position:80%_0%] transition-all duration-300 ease-in-out ">
                <img className="w-[95%] h-[100%] group-hover:scale-[1.12] transition-scale duration-700" src={Gloves} alt="Gloves" />
              </div>

              {/* Boots */}
              <div className="group row-span-1 bg-[#221f20] px-5 py-2 rounded-xl border-2 border-[#cc3635]/40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#cc3635] bg-[length:300%_100%] bg-[position:0%_0%] hover:bg-[position:80%_0%] transition-all duration-300 ease-in-out ">
                <img className="w-[50%] h-[100%] group-hover:scale-[1.12] transition-scale duration-700" src={RidingBoots} alt="Riding Boots" />
              </div>

              {/* RainCoat */}
              <div className="group row-span-1 bg-[#221f20] px-5 py-2 rounded-xl border-2 border-[#cc3635]/40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#cc3635] bg-[length:300%_100%] bg-[position:0%_0%] hover:bg-[position:80%_0%] transition-all duration-300 ease-in-out">
                <img className="w-[70%] h-[100%] group-hover:scale-[1.12] transition-scale duration-700" src={Raincoat} alt="Raincoat" />
              </div>

              {/* Legguard */}
              <div className="group row-span-1 bg-[#221f20] px-5 py-2 rounded-xl border-2 border-[#cc3635]/40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#cc3635] bg-[length:300%_100%] bg-[position:0%_0%] hover:bg-[position:80%_0%] transition-all duration-300 ease-in-out">
                <img className="w-[50%] h-[100%] group-hover:scale-[1.12] transition-scale duration-700" src={LegGuard} alt="Leg Guard" />
              </div>

              {/* Bag */}
              <div className="group row-span-1 bg-[#221f20] px-5 py-2 rounded-xl border-2 border-[#cc3635]/40 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#cc3635] bg-[length:300%_100%] bg-[position:0%_0%] hover:bg-[position:80%_0%] transition-all duration-300 ease-in-out">
                <img className="w-[40%] h-[100%] group-hover:scale-[1.12] transition-scale duration-700" src={Bag} alt="Bag" />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="rightside w-[50%]  p-8 rounded-xl flex flex-col justify-between text-white">
              <div>
                <span className="text-[#cc3635] uppercase tracking-widest text-sm font-bold py-1 rounded-full">
                  Premium Collection
                </span>
                
                <h2 className="text-5xl font-extrabold mt-3 tracking-tight">
                  Gear up for <span className="text-[#cc3635]"> The Unknown</span>
                </h2>
                
                <p className="text-gray-400 mt-8 text-md leading-relaxed">
                  Engineered for ultimate protection, durability, and style. Our curated line of riding essentials ensures you are ready to tackle any terrain, weather, or distance.
                </p>

                {/* Feature Bulletins */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#cc3635] mt-2"></div>
                    <div>
                      <h4 className="text-md font-semibold text-gray-200">All-Weather Resilience</h4>
                      <p className="text-sm text-gray-400">From heavy downpours to scorching heat, stay shielded.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#cc3635] mt-2"></div>
                    <div>
                      <h4 className="text-md font-semibold text-gray-200">Impact Protection</h4>
                      <p className="text-sm text-gray-400">Reinforced armor points in jackets, gloves, and boots.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#cc3635] mt-2"></div>
                    <div>
                      <h4 className="text-md font-semibold text-gray-200">Ergonomic Storage</h4>
                      <p className="text-sm text-gray-400">Tactical bag setups designed for high-speed stability.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button 
                  onMouseEnter={()=>cursorVariant("button")}
                  onMouseLeave={()=>cursorVariant("default")}
                  id="accessoryButton" className="cursor-pointer w-[50%] bg-[#cc3635] hover:bg-[#b02e2d] mx-auto text-white font-bold py-3 px-6 rounded-lg 
                  border-1 border-[#cc3635] transition-all duration-800 ease-in-out transform hover:bg-transparent hover:text-[#cc3635] hover:w-[100%] hover:scale-[1.01]">
                  EXPLORE ALL ACCESSORIES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}