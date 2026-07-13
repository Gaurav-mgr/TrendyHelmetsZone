import WhiteLogo from "../../../../public/Whitelogo.png"
import {Link} from "@inertiajs/react"
import "../../../css/app.css"

interface HeaderProps {
  helmetlink : string;
  accessorieslink : string;
  aboutlink : string;
  contactlink : string;
  partslink: string;
}

export default function Header({helmetlink, accessorieslink, partslink, aboutlink, contactlink}:HeaderProps){
  return(
    <>
      <header id="header" className="z-10000 sticky top-0 bg-[#221f20] rounded-xl w-[1600px] py-5 px-8 h-[85px] flex items-center justify-between mt-2">
        <Link href={route('home')}>
          <img src={WhiteLogo} className="z-1 w-[96px]" />
        </Link>
        <div className="flex text-[#fefefe] h-[28px] w-[30%] justify-between font-light">
          <a className="hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={aboutlink}>About</a>
          <a className="hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={helmetlink}>Helmets</a>
          <a className="hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={accessorieslink}>Accessories</a>
          <a className="hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={partslink}>Moto Parts</a>
          <a className="hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={contactlink}>Contact</a>
        </div>
      </header>
    </>
  )
}