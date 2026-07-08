import "../../../css/app.css"

export default function LoadingText() {
  return (
    <>
      <div id="loadingtext" className="z-6 absolute flex items-center justify-center h-[100vh] w-[100%]">
        <div id="textbox" className="flex flex-col items-center justify-center h-[300px] w-[600px]">
          <h1 className="text-[#fff] text-[45px] font-bold">Trendy Helmets Zone</h1>
          <p className="text-[#ff0000] text-[23px]">Buy Helmets and Motorbike Accessories</p>
        </div>
      </div>
    </>
  )
}