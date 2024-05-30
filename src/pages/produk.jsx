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
        <div className="overflow-x-hidden text-blue-900">
            <Header />
            <HeaderM />
            <div className="pt-16 xl:pt-32 pb-10">
                <UtilityHome />
            </div>

            {/* Scroll To Top */}
            <div className="px-5 py-3 justify-end flex xl:hidden">
                <div className="flex items-center gap-1 text-base underline px-2 py-1 text-blue-900" onClick={scrollToTop}>
                    <FaArrowUpLong />
                    <p>Back to top</p>
                </div>
            </div>
            {/* Scroll To Top End */}

            <Footer />
        </div>
    )
}