import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { HeaderM } from "../components/HeaderM";
import { Header } from "../components/home/Header";
import { UtilityHome } from "../components/home/UtilityHome";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function ProdukPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.scrollY > 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

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
                <div className="fixed translate-x-80 translate-y-[40rem] w-12 h-12 xl:hidden">
                    {isVisible &&
                        <FaCircleArrowUp className="w-full h-full text-black" onClick={scrollToTop} />
                    }
                </div>
                <UtilityHome />
            </div>
            <Footer />
        </div>
    )
}