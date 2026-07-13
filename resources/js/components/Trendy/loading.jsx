import LoadingText from "./loadingtext"
import "../../../css/app.css"

export default function Loading() {
  return (
    <>
      <div id="preloader" className="absolute z-5 rounded-b-[30px] bg-[#131011] h-full w-[100%]">
      </div>
      <LoadingText />
    </>
  )
}