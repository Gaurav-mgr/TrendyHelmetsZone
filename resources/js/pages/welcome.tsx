import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Loading from "../components/Trendy/loading"
import LoadingText from "../components/Trendy/loadingtext"
import Main from "../components/Trendy/main"
import Hero from "../components/Trendy/hero"
import Header from "../components/Trendy/header"


export default function Welcome({helmet}:{helmet:string}) {
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
                    <Header helmetlink = {helmet}/>
                    <Hero helmetlink = {helmet}/> 
                    <Main />
                </div>
            </div>
        </>
    );
}
