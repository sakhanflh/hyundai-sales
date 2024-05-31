import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export function HeaderM() {
    const [onShowSidebar, setOnShowSidebar] = useState(false)

    function handleShowSidebar() {
        setOnShowSidebar(!onShowSidebar)
    }
    return (
        <>
            <div className="flex flex-col  lg:hidden xl:hidden w-full bg-white fixed z-50 border-b shadow-md">
                <div className="flex w-full h-16 lg:hidden xl:hidden 2xl:hidden px-3  justify-between items-center border-b">
                    <div className="w-32">
                        <img src="/img/Harga-Hyundai-Batam.png" alt="" />
                    </div>
                    <div className="w-6 h-6">
                        <GiHamburgerMenu className="w-full h-full" onClick={handleShowSidebar} />
                    </div>
                </div>

                <div className={onShowSidebar ? "w-full h-32 transition-all duration-500" : "w-full h-0 transition-all duration-500"}>
                    <ul className="text-black flex flex-col w-full h-full justify-around">
                        <Link to={'/'} className={`w-full h-[50%] flex items-center hover:bg-slate-200 px-3 ${onShowSidebar ? "visible" : "hidden"}`}>
                            <li className="font-semibold text-black">Beranda</li>
                        </Link >

                        <Link to={'/produk'} className={`w-full h-[50%] flex items-center hover:bg-slate-200 px-3 ${onShowSidebar ? "visible" : "hidden"}`}>
                            <li className="font-semibold text-black">Produk</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}