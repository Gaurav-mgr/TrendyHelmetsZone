import {useState} from "react"
import "../../../css/main.css"

interface CursorProps{
  x: number | undefined
  y: number | undefined
  variant : string
}

export default function Cursor({x, y, variant}:CursorProps){
  return(
    <div className={`cursor ${variant} z-9999999999`}
      style={{
        left: x ,
        top: y
      }}
    ></div>
  )
}