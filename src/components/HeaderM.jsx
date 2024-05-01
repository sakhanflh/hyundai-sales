import { useState } from "react";
import { SideBar } from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";

export function HeaderM(){
    const [onShowSidebar, setOnShowSidebar] = useState(false)

    function handleShowSidebar(){
        setOnShowSidebar(!onShowSidebar)
        console.log('first')
    }
    return(
        <>
        <div  className="bg-white fixed z-50 flex w-full h-16 lg:hidden xl:hidden 2xl:hidden px-3 justify-between items-center border-b shadow-md">
            <div className="w-32">
                <img src="/img/Harga-Hyundai-Batam.png" alt=""/>
            </div>
            <div className="w-6 h-6">
                <GiHamburgerMenu className="w-full h-full"  onClick={handleShowSidebar}/>
            </div>
            <SideBar onShowSidebar={onShowSidebar}/>
        </div>
        </>
    )
}