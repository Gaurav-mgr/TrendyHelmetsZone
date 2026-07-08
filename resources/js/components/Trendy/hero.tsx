import {Link} from "@inertiajs/react"
import {ChevronRight, ChevronDown} from "lucide-react"
import HeroHelmet from "../../../../public/images/Helmets/herohelmet.png"
import "../../../css/app.css"

interface HeaderProps {
    helmetlink : string;
}

export default function Hero({helmetlink}:HeaderProps){
  
  return (
    <>
      <main className="relative w-[1600px] px-8 flex items-center justify-between h-[88vh]">

        {/* left */}
        <div className="max-w-[50%] flex flex-col gap-6">

          <div id="maintitle" className="flex flex-col mb-7">
            <h1 className="text-[80px] text-[#ff3635] font-[400] m-0 leading-none">
              GEAR UP.
            </h1>
            <h1 className="text-[130px] text-[#ff3635] font-[900] m-0 leading-none">
              RIDE HARD.
            </h1>
          </div>

          <div id="subtext" className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold tracking-wider text-white uppercase m-0 leading-none">
                Protect Your Passion.
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed m-0 max-w-[85%]">
                Premium helmets, track-tested apparel, and performance parts built for riders who refuse to compromise. Dominate the asphalt with gear engineered for maximum safety and ultimate speed.
              </p>
            </div>

            <a href={helmetlink}>
              <button className="flex items-center justify-center cursor-pointer gap-3 bg-[#cc3635] text-white px-4 py-2 font-semibold text-[17px] rounded-sm self-start hover:bg-[#ff3635] hover:scale-[1.04] transition-all duration-450 ease-in-out">
                EXPLORE GEAR <ChevronRight />
              </button>
            </a>
          </div>

        </div>

        {/* right */}
        <div id="mainhelmet" className="relative max-w-[50%]">
          <section id="heroHelmet" className="flex justify-center items-center">
            <img id="helmetimg" className="relative w-[75%] z-1" src={HeroHelmet}/>
            <div className="absolute bg-red-900/10 blur-[30px] h-[80%] w-[80%] rounded-[50%]"></div>
          </section>
          <div className="z-2 flex justify-center items-center absolute bg-[#f5f5f5]/30 h-[50px] w-[340px] bottom-6 right-30 rounded-lg text-white text-[20px] shadow-lg shadow-black/30 border-b-1 border-[#fff]">ECE 22.06 &nbsp; | &nbsp; DOT &nbsp; | &nbsp; SNELL</div>
        </div>

        <a href={helmetlink}>
          <div className="animate-bounce [animation-duration:2s] absolute bottom-0 left-[45%] flex items-center justify-center cursor-pointer gap-2  text-white p-1.5 font-semibold text-[17px] rounded-full hover:scale-[1.04] ease-in-out bg-[#fff]/20">
            <p className="bg-[#221f20] px-6 py-2 rounded-full">Scroll Down</p>
            <p className="bg-[#221f20]  p-2 rounded-full"><ChevronDown /></p>
          </div>
        </a>
      </main>
    </>
  )
}