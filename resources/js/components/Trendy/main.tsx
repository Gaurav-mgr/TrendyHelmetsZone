import {ChevronRight} from "lucide-react"

// helmets import
import Axor from "../../../../public/images/Helmets/axorHelmet.png"
import Fox from "../../../../public/images/Helmets/fox.png"
import Ls2 from "../../../../public/images/Helmets/ls2.png"
import Studds from "../../../../public/images/Helmets/studdsHelm.png"

// accessories imoprt
import Gloves from "../../../../public/images/Accessories/gloves.png"
import LegGuard from "../../../../public/images/Accessories/legguard.png"
import Raincoat from "../../../../public/images/Accessories/raincoat.png"
import RidingBoots from "../../../../public/images/Accessories/ridingBoots.png"
import RidingJacket from "../../../../public/images/Accessories/ridingJacket.png"
import RowOfAccessories from "../../../../public/images/Accessories/row.png"
import Bag from "../../../../public/images/Accessories/Bag.png"

import "../../../css/app.css"

export default function Main(){
  return(
    <>
      <div id="Helmets" className="mt-[100px]"></div>

      <section id="scrollingHelmet" className="mt-[100px] w-[1600px] py-4 px-8 flex flex-col gap-13">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[#ff3635] text-[70px] uppercase font-bold leading-none">Helmets</h1>
          <p className="text-[#6f6f6f] m-0 leading-none">We've got differnt helmets of different known brands with utmost reliability.</p>
        </div>

        <div id="helmetsection" className="flex flex-col bg-[#221f20] px-15 py-2 rounded-3xl border-2 border-[#cc3635]/40">
          {/* axor */}
          <div className="flex gap-15">
            <div className="right">
              <div className="right group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                <img className="w-[90%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Axor} />
              </div>
            </div>
            <div className="right flex flex-col items-start justify-center gap-6">
              <h1 className="text-white text-[36px] font-semibold uppercase leading-none">Axor</h1>
              <p className="text-gray-400 text-justify">Engineered for the modern track enthusiast and street rider alike, Axor helmets strike a balance between high-end performance aesthetics and aggressive styling. Born out of a collaboration of international designers and cutting-edge tech, Axor pieces are highly regarded for their graphic-heavy shells, integrated spoiler mechanics, and superior aerodynamics. With ECE 22.06 and DOT-certified models regularly filling their catalog, they provide premium race-replica designs, dual-visor functionality, and sharp ventilation systems without forcing riders to break the bank.</p>
              <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                More Info <ChevronRight/>
              </button>
            </div>
          </div>

          {/* fox */}
          <div className="flex gap-15">
            <div className="left flex flex-col items-end justify-center gap-6">
              <h1 className="text-white text-[36px] font-semibold uppercase leading-none">Fox Racing</h1>
              <p className="text-gray-400 text-justify">When it comes to off-road dominance, dirt tracks, and motocross culture, Fox Racing stands in a league of its own. Fox helmets are engineered explicitly for high-impact protection, raw ventilation, and lightweight agility required to handle treacherous terrain. Utilizing specialized multi-directional impact protection systems (MIPS) and aggressive chin-bar ventilation, these helmets are designed to keep riders cool under extreme physical exertion while offering unmatched cranial deflection. They are the definitive choice for riders who live for the dirt, mountain tracks, and adrenaline-fueled trail sessions.</p>
              <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                More Info <ChevronRight/>
              </button>
            </div>
            <div className="left">
              <div className="left group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                <img className="w-[70%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Fox} />
              </div>
            </div>
          </div>

          {/* Ls2 */}
          <div className="flex gap-15">
            <div className="right">
              <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                <img className="w-[88%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Ls2} />
              </div>
            </div>
            <div className="right flex flex-col items-start justify-center gap-6">
              <h1 className="text-white text-[36px] font-semibold uppercase leading-none">ls2</h1>
              <p className="text-gray-400 text-justify">LS2 is a global juggernaut known for bringing true track-level engineering, advanced materials, and precise fitment to mainstream riders. Utilizing premium composite fiberglass, carbon fiber, and proprietary Kinetic Polymer Alloys (KPA), LS2 structures their helmets to offer maximum shell integrity with minimum neck strain. Whether you are looking for an ultra-lightweight racing helmet, a modular touring setup, or a sleek commuter lid, LS2 excels at deliverable safety, boasting exceptionally quiet cabins, optical-class 1 visors, and globally recognized safety certifications..</p>
              <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                More Info <ChevronRight/>
              </button>
            </div>
          </div>

          {/* studds */}
          <div className="flex gap-15">
            <div className="left flex flex-col items-end justify-center gap-6">
              <h1 className="text-white text-[36px] font-semibold uppercase leading-none">studds</h1>
              <p className="text-gray-400 text-justify">As one of the largest and most trusted helmet manufacturers in the world, Studds is synonymous with ultimate reliability, daily durability, and accessible safety. Built to withstand the rigorous wear-and-tear of daily city commuting and long-haul riding, Studds helmets focus on functional engineering, high-impact thermoplastic shells, and hypoallergenic comfort liners. They excel at offering functional, dependable, and highly durable headgear that satisfies essential safety benchmarks, making them the classic, go-to armor for millions of everyday riders who prioritize pragmatic, no-nonsense protection.</p>
              <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                More Info <ChevronRight/>
              </button>
            </div>
            <div className="left">
              <div className="left group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                <img className="w-[80%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Studds} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="Accessories" className="mt-[100px]"></div>

      <section id="scrollingAccessories" className="mt-[100px] w-[1600px] py-4 px-8 flex flex-col gap-13 h-[800px]">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[#ff3635] text-[70px] uppercase font-bold leading-none">Accesssories</h1>
          <p className="text-[#6f6f6f] m-0 leading-none">We've got differnt Motorbike accessories of different known brands with utmost reliability.</p>
        </div>

        <div className="flex gap-6 w-full items-stretch max-h-[80%]">
          <div id="accessoriessection" className="overflow-hidden w-[50%] grid grid-cols-3 grid-rows-4 gap-1 cursor-pointer">
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
          <div className="rightside w-[50%] bg-[#221f20] p-8 rounded-xl border-2 border-[#cc3635]/40 flex flex-col justify-between text-white">
            <div>
              <span className="text-[#cc3635] uppercase tracking-widest text-xs font-bold bg-[#cc3635]/10 px-3 py-1 rounded-full">
                Premium Collection
              </span>
              
              <h2 className="text-3xl font-extrabold mt-4 tracking-tight">
                GEAR UP FOR <br />
                <span className="text-[#cc3635]">THE UNKNOWN</span>
              </h2>
              
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Engineered for ultimate protection, durability, and style. Our curated line of riding essentials ensures you are ready to tackle any terrain, weather, or distance.
              </p>

              {/* Feature Bulletins */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#cc3635] mt-2"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">All-Weather Resilience</h4>
                    <p className="text-xs text-gray-400">From heavy downpours to scorching heat, stay shielded.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#cc3635] mt-2"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">Impact Protection</h4>
                    <p className="text-xs text-gray-400">Reinforced armor points in jackets, gloves, and boots.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#cc3635] mt-2"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">Ergonomic Storage</h4>
                    <p className="text-xs text-gray-400">Tactical bag setups designed for high-speed stability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="cursor-pointer w-full bg-[#cc3635] hover:bg-[#b02e2d] text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-[1.01] shadow-lg shadow-[#cc3635]/20">
                EXPLORE ALL ACCESSORIES
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}