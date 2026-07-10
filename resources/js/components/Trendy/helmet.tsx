import {ChevronRight} from "lucide-react"

// helmets import
import Axor from "../../../../public/images/Helmets/axorHelmet.png"
import Fox from "../../../../public/images/Helmets/fox.png"
import Ls2 from "../../../../public/images/Helmets/ls2.png"
import Studds from "../../../../public/images/Helmets/studdsHelm.png"

import "../../../css/app.css"

export default function Helmet(){
  return(
    <>
      {/* -------------- Helmet Section ----------------- */}
      
      <div id="Helmets" className="mt-[100px]"></div>

      <section id="scrollingHelmet" className="relative w-[1600px] h-[400vh] mt-[100px]">
        <div className="sticky top-30 h-[80vh] py-4 px-8 flex flex-col gap-13 ">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#ff3635] text-[70px] uppercase font-bold leading-none">Helmets</h1>
            <p className="text-[#6f6f6f] m-0 leading-none">We've got differnt helmets of different known brands with utmost reliability.</p>
          </div>

          {/* perspective container */}
          <div className="relative flex justify-center items-center h-full " style={{ perspective: '1400px' }}>

            {/* axor */}
            <div
              className="absolute z-4 max-h-[100%] top-25 left-15  card-axor flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[45%]"
            >
              <div>
                <div className="group cursor-pointer flex items-center overflow-hidden justify-center w-[100%] h-[100%]">
                  <img className="w-[90%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Axor} />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">Axor</h1>
                <p className="text-gray-400 text-justify">Engineered for the modern track enthusiast and street rider alike, Axor helmets strike a balance between high-end performance aesthetics and aggressive styling. With ECE 22.06 and DOT-certified models regularly filling their catalog, they provide premium race-replica designs, dual-visor functionality, and sharp ventilation systems without forcing riders to break the bank.</p>
                <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                  More Info <ChevronRight/>
                </button>
              </div>
            </div>

            {/* fox */}
            <div
              className="absolute z-3 bottom-14 -right-15 card-fox max-h-[100%] flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[45%]"
            >
              <div className="flex flex-col items-end justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">Fox Racing</h1>
                <p className="text-gray-400 text-justify">When it comes to off-road dominance, dirt tracks, and motocross culture, Fox Racing stands in a league of its own. Utilizing specialized multi-directional impact protection systems (MIPS) and aggressive chin-bar ventilation, these helmets are designed to keep riders cool under extreme physical exertion while offering unmatched cranial deflection.</p>
                <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                  More Info <ChevronRight/>
                </button>
              </div>
              <div>
                <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                  <img className="w-[70%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Fox} />
                </div>
              </div>
            </div>

            {/* ls2 */}
            <div
              className="absolute z-2 top-24 left-86 card-ls2 max-h-[100%] flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[50%]"
            >
              <div>
                <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                  <img className="w-[88%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Ls2} />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">ls2</h1>
                <p className="text-gray-400 text-justify">LS2 is a global juggernaut known for bringing true track-level engineering, advanced materials, and precise fitment to mainstream riders. Utilizing premium composite fiberglass, carbon fiber, and proprietary Kinetic Polymer Alloys (KPA), LS2 structures their helmets to offer maximum shell integrity with minimum neck strain.</p>
                <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                  More Info <ChevronRight/>
                </button>
              </div>
            </div>

            {/* studds */}
            <div
              className="absolute z-1 bottom-22 right-38 card-studds max-h-[100%] flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[50%]"
            >
              <div className="flex flex-col items-end justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">studds</h1>
                <p className="text-gray-400 text-justify">As one of the largest, famous, and most trusted helmet manufacturers in the world, Studds is synonymous with ultimate reliability, daily durability, stylish appearance, and accessible safety. Built to withstand the rigorous wear-and-tear of daily city commuting and long-haul riding, Studds helmets focuses on functional engineering, high-impact thermoplastic shells, and hypoallergenic comfort liners.</p>
                <button className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                  More Info <ChevronRight/>
                </button>
              </div>
              <div>
                <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                  <img className="w-[80%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Studds} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}