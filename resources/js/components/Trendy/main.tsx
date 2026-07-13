import {useState} from "react"
import Hero from "./hero"
import Helmet from "./helmet"
import Accessories from "./accessories"
import Parts from "./parts"
import Contact from "./contact"
import Header from "./header"

import Cursor from "../ui/cursor"


import "../../../css/main.css"

interface MainProps{
  helmetlink : string;
  accessorieslink : string;
  aboutlink : string;
  contactlink : string;
  partslink: string;
}
export default function Main({helmetlink, accessorieslink, partslink, aboutlink, contactlink}:MainProps){

  const [cursorVariant, setCursorVariant] = useState<string>("default");
  const [cursorX, setCursorX] = useState<number | undefined>()
  const [cursorY, setCursorY] = useState<number | undefined>()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return(
    <>
      <Header 
        helmetlink = {helmetlink}
        accessorieslink = {accessorieslink}
        aboutlink = {aboutlink}    
        contactlink = {contactlink}
        partslink={partslink}
      />
      <div className="relative h-full">
        <div id="herosec" className="relative bg-[#131011]">
          <div className="hero-pin">
            <Hero 
              helmetlink = {helmetlink}
              cursorVariant = {setCursorVariant}
            />
          </div>
          <div id="mainsec" className="sticky bg-[#131011]">
            <Helmet cursorVariant = {setCursorVariant}/>
          </div>
        </div>
        <Accessories cursorVariant={setCursorVariant}/>
        <Parts cursorVariant={setCursorVariant}/>
        <Contact cursorVariant={setCursorVariant}/>
      </div>



      <Cursor 
        x={cursorX}
        y={cursorY}
        variant={cursorVariant}
      />
    </>
  )
} 