import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Loading from "../components/Trendy/loading"
import LoadingText from "../components/Trendy/loadingtext"
import Main from "../components/Trendy/main"
import Header from "../components/Trendy/header"
import Footer from "../components/Trendy/footer"

type HomepageProps = {
    helmet: string;
    accessories: string;
    about : string;
    contact : string;
}

export default function Welcome({helmet, accessories, about, contact}:HomepageProps) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            
            <Head title="Trendy Helmets Zone">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="relative w-full h-[100%] bg-[#131011]">
                <Loading />
                <LoadingText />
                <div id="homepage" className="flex flex-col items-center h-[100%]">
                    
                    <Main 
                        helmetlink = {helmet}
                        accessorieslink = {accessories}
                        aboutlink = {about}
                        contactlink = {contact}
                    />
                    <Footer 
                        helmetlink = {helmet}
                        accessorieslink = {accessories}
                        aboutlink = {about}
                        contactlink = {contact}
                    />
                </div>
            </div>
        </>
    );
}
