import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { HeaderM } from "../components/HeaderM";
import { Header } from "../components/home/Header";
import { UtilityHome } from "../components/home/UtilityHome";
import { FaArrowUpLong } from "react-icons/fa6";


export default function ProdukPage() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
            <Header />
            <HeaderM />
            <div className="pt-16 xl:pt-32 pb-10">
                <UtilityHome />

            </div>
            <div className="p-5">
                <div className="flex items-center gap-1 text-lg hover:underline justify-end" onClick={scrollToTop}>
                    <FaArrowUpLong />
                    <p>Back to top</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}