import Hero from "./hero"
import Helmet from "./helmet"
import Accessories from "./accessories"
import Contact from "./contact"

import "../../../css/main.css"

interface MainProps{
  helmetlink: string;
}
export default function Main({helmetlink}:MainProps){

  return(
    <>
      <div id="herosec" className="relative bg-[#131011]">
        <div className="hero-pin">
          <Hero helmetlink = {helmetlink}/>
        </div>
        <div id="mainsec" className="sticky bg-[#131011]">
          <Helmet />
        </div>
      </div>

      <div className="bottompart h-[300vh]">
        <div id="container" className="sticky top-30">
          <div id="accessory" className="relative">
            <Accessories />
            <div id="contact" className="absolute">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 