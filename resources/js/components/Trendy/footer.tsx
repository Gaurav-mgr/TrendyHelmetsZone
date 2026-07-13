import TrendyLogo from "../../../../public/Whitelogo.png"

interface FooterProps {
  helmetlink : string;
  accessorieslink : string;
  aboutlink : string;
  contactlink : string;
  partslink: string;
}

export default function Footer({helmetlink, partslink, accessorieslink, aboutlink, contactlink}:FooterProps){
  return(
    <>
      <footer className="mt-[100px] border-t w-full border-[#cc3635] bg-[#131011] text-[#17201b] flex flex-col items-center">
        <div className="w-[1600px] flex items-center justify-between h-[30vh] px-8">
            <div className="max-w-xl">
                <a href="#About" className="inline-flex items-center">
                    <img src={TrendyLogo} width="25%" alt="TraceIt Logo" />
                </a>
                <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500">
                    Helmet shop where all of your MotorBike necessities are fulfilled.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-2">

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#cc3635]/80">Resources</h3>
                    <ul className="mt-5 space-y-3 text-sm">
                        <li><a className="cursor-pointer text-gray-500 hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={aboutlink}>About</a></li>
                        <li><a className="cursor-pointer text-gray-500 hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={helmetlink}>Helmets</a></li>
                        <li><a className="cursor-pointer text-gray-500 hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={accessorieslink}>Accessories</a></li>
                        <li><a className="cursor-pointer text-gray-500 hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={partslink}>Moto Parts</a></li>
                        <li><a className="cursor-pointer text-gray-500 hover:scale-[1.022] hover:text-[#ff3635] px-2 rounded-sm transition-all smooth duration-300 " href={contactlink}>Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#cc3635]/80">Contact</h3>
                    <ul className="mt-5 space-y-3 text-sm text-gray-500">
                        <li>support@trendyhelmets.com</li>
                        <li>+1 (555) 123-4567</li>
                        <li>123 Inventory Ave, Suite 200</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-[#cc3635] px-6 py-5 text-center text-sm text-gray-500 lg:px-8">
            © 2026 Trendy Helmets Zone - Helmets, Accessoreis, and all MotorBike 
        </div>
    </footer>
    </>
  )
}