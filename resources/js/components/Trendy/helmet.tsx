import {ChevronRight} from "lucide-react"

// helmets import
import Axor from "../../../../public/images/Helmets/axorHelmet.png"
import Fox from "../../../../public/images/Helmets/fox.png"
import Ls2 from "../../../../public/images/Helmets/ls2.png"
import Studds from "../../../../public/images/Helmets/studdsHelm.png"
import Vega from "../../../../public/images/Helmets/vega.png"

import "../../../css/app.css"

interface HelmetProps {
  cursorVariant : React.Dispatch<React.SetStateAction<string>>
}

export default function Helmet({cursorVariant}:HelmetProps){
  const moreButton = (<button
                  // onMouseEnter={()=>cursorVariant("morebutton")}
                  // onMouseLeave={()=>cursorVariant("default")}
                  className="bg-[#ff3635] cursor-pointer flex items-center justify-center gap-2 p-2 text-white h-[44px] w-[130px] rounded-sm hover:bg-[#d13635] hover:border-2 hover:border-[#ff0000]">
                  More Info <ChevronRight/>
                </button>)
  return(
    <>
      {/* -------------- Helmet Section ----------------- */}
      
      <div id="Helmets" className="mt-[100px]"></div>

      <section id="scrollingHelmet" className="relative w-[1600px] h-[190vh] mt-[100px]">
        <div className="sticky top-30 h-[80vh] py-4 px-8 flex flex-col gap-13 ">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#ff3635] text-[70px] uppercase font-bold leading-none">Helmets</h1>
          </div>

          {/* perspective container */}
          <div className="relative flex justify-center items-center h-full " style={{ perspective: '1400px' }}>
            {/* heading */}
            <div id="topseller" className="absolute z-6 bottom-0 border-t-1 border-[#cc3635]  flex justify-center items-center">
              <span className="text-[#cc3635] uppercase tracking-[0.3em] text-sm font-semibold text-center">
                  Choose the best
                </span>

              <h2 className="mt-4 text-6xl font-bold leading-tight text-center text-white">
                Our <span className="text-[#cc3635]"> Top Sellers.</span>
              </h2>
            </div>

            {/* axor */}
            <div
              className="absolute z-5 max-h-[100%] top-10 left-15  card-axor flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[45%]"
            >
              <div>
                <div className="group cursor-pointer flex items-center overflow-hidden justify-center w-[100%] h-[100%]">
                  <img className="w-[90%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Axor} />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">Axor</h1>
                <p className="text-gray-400 text-justify">Engineered for the modern track enthusiast and street rider alike, Axor helmets strike a balance between high-end performance aesthetics and aggressive styling. With ECE 22.06 and DOT-certified models regularly filling their catalog, they provide premium race-replica designs, dual-visor functionality, and sharp ventilation systems without forcing riders to break the bank.</p>
                {moreButton}
              </div>
            </div>

            {/* fox */}
            <div
              className="absolute z-4 bottom-10 -right-15 card-fox max-h-[100%] flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[45%]"
            >
              <div className="flex flex-col items-end justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">Fox Racing</h1>
                <p className="text-gray-400 text-justify">When it comes to off-road dominance, dirt tracks, and motocross culture, Fox Racing stands in a league of its own. Utilizing specialized multi-directional impact protection systems (MIPS) and aggressive chin-bar ventilation, these helmets are designed to keep riders cool under extreme physical exertion while offering unmatched cranial deflection.</p>
                {moreButton}
              </div>
              <div>
                <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                  <img className="w-[70%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Fox} />
                </div>
              </div>
            </div>

            {/* ls2 */}
            <div
              className="absolute z-3 top-12 left-86 card-ls2 max-h-[100%] flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[50%]"
            >
              <div>
                <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                  <img className="w-[88%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Ls2} />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">ls2</h1>
                <p className="text-gray-400 text-justify">LS2 is a global juggernaut known for bringing true track-level engineering, advanced materials, and precise fitment to mainstream riders. Utilizing premium composite fiberglass, carbon fiber, and proprietary Kinetic Polymer Alloys (KPA), LS2 structures their helmets to offer maximum shell integrity with minimum neck strain.</p>
                {moreButton}
              </div>
            </div>

            {/* studds */}
            <div
              className="absolute z-2 bottom-17 right-38 card-studds max-h-[100%] flex gap-5 bg-[#221f20] px-8 py-6 rounded-3xl border-2 border-[#cc3635]/40 max-w-[50%]"
            >
              <div className="flex flex-col items-end justify-center gap-6">
                <h1 className="text-white text-[36px] font-semibold uppercase leading-none">studds</h1>
                <p className="text-gray-400 text-justify">As one of the largest, famous, and most trusted helmet manufacturers in the world, Studds is synonymous with ultimate reliability, daily durability, stylish appearance, and accessible safety. Built to withstand the rigorous wear-and-tear of daily city commuting and long-haul riding, Studds helmets focuses on functional engineering, high-impact thermoplastic shells, and hypoallergenic comfort liners.</p>
                {moreButton}
              </div>
              <div>
                <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[350px] h-[350px]">
                  <img className="w-[80%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Studds} />
                </div>
              </div>
            </div>

            {/* more helmets */}
            <div
              className="absolute z-1 bg-[#131011] top-0 left-0 card-allHelmets h-[65vh] flex flex-col justify-center items-center gap-15 px-8 py-6 w-full"
            >

              {/* Description */}
              <div className="w-[60%] flex flex-col justify-center items-center">
                <span className="text-[#cc3635] uppercase tracking-[0.3em] text-sm font-semibold text-center">
                  Discover More Helmets
                </span>

                <h2 className="mt-4 text-5xl font-bold leading-tight text-center text-white">
                  Ride with <span className="text-[#cc3635]"> Confidence.</span>
                </h2>

                <p className="mt-6 text-[15px] leading-7 text-center text-gray-300">
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

              {/* helmet row */}
              <div className="flex items-start justify-between w-[100%] gap-6">
                {/* axor */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] hover:border-[#0000ff] rounded-xl saturate-20 hover:bg-gradient-to-r via-[#221f20] to-[#0000ff] bg-[length:300%_100%] bg-[posttion:0%_0%] hover:bg-[position:90%_0%] hover:saturate-100 duration-700">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[260px] h-[260px]">
                    <img className="w-[80%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Axor} />
                  </div>
                </div>
                {/* vega */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] hover:border-[#ffd700] rounded-xl saturate-20 bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#ffd700] bg-[length:300%_100%] bg-[posttion:0%_0%] hover:bg-[position:90%_0%] hover:saturate-100 duration-700">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[260px] h-[260px]">
                    <img className="w-[65%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Vega} />
                  </div>
                </div>
                {/* fox */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] hover:border-[#ff0000] rounded-xl saturate-20 bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#ff0000] bg-[length:300%_100%] bg-[posttion:0%_0%] hover:bg-[position:90%_0%] hover:saturate-100 duration-700">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[260px] h-[260px]">
                    <img className="w-[65%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Fox} />
                  </div>
                </div>
                {/* ls2 */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] hover:border-[#BF00FF] rounded-xl saturate-20 bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#BF00FF] bg-[length:300%_100%] bg-[posttion:0%_0%] hover:bg-[position:90%_0%] hover:saturate-100 duration-700">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[260px] h-[260px]">
                    <img className="w-[80%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Ls2} />
                  </div>
                </div>
                {/* studds */}
                <div className="bg-[#221f20] border-1 border-[#cc3635] hover:border-[#00ffff] rounded-xl saturate-20 bg-gradient-to-r from-[#221f20] via-[#221f20] to-[#00ffff] bg-[length:250%_100%] bg-[posttion:0%_0%] hover:bg-[position:100%_0%] hover:saturate-100 duration-700">
                  <div className="group cursor-pointer relative flex items-center overflow-hidden justify-center w-[260px] h-[260px]">
                    <img className="w-[70%] group-hover:scale-[1.18] transition-all smooth duration-600" src={Studds} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}