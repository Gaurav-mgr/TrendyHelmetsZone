import { useEffect, useRef } from "react";
import { Head } from "@inertiajs/react";
import { ChevronUp } from "lucide-react";

import Loading from "../components/Trendy/loading";
import Main from "../components/Trendy/main";
import Footer from "../components/Trendy/footer";

import "../../css/app.css";

type HomepageProps = {
    helmet: string;
    accessories: string;
    about: string;
    contact: string;
    parts: string;
};

export default function Welcome({
    helmet,
    accessories,
    about,
    contact,
    parts
}: HomepageProps) {
    const goTopBtn = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
    const handleScroll = () => {
        console.log(window.scrollY);

        if (!goTopBtn.current) return;

        if (window.scrollY > 800) {
            goTopBtn.current.classList.add("show");
        } else {
            goTopBtn.current.classList.remove("show");
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
        <>
            <Head title="Trendy Helmets Zone">
                <link
                    rel="preconnect"
                    href="https://fonts.bunny.net"
                />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative w-full h-full bg-[#131011]">
                <Loading />

                <div
                    id="homepage"
                    className="flex flex-col items-center h-full"
                >
                    <Main
                        helmetlink={helmet}
                        accessorieslink={accessories}
                        aboutlink={about}
                        contactlink={contact}
                        partslink={parts}
                    />

                    <Footer
                        helmetlink={helmet}
                        accessorieslink={accessories}
                        aboutlink={about}
                        contactlink={contact}
                        partslink={parts}
                    />
                </div>

                <a
                    ref={goTopBtn}
                    href="#homepage"
                    className="goupbutton group fixed bottom-10 right-10 z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#cc3635] text-white shadow-lg transition-all duration-400 hover:scale-110 hover:bg-[#b92f2f]"
                    aria-label="Back to top"
                >
                    <ChevronUp
                        size={24}
                        className="animate-bounce [animation-duration:1s] transition-transform [transition-duration:0.5s] group-hover:rotate-[360deg]"
                    />
                </a>
            </div>
        </>
    );
}