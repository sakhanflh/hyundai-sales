import { Link } from "react-router-dom";

export function SideBar({onShowSidebar}){
    return(
        <>
        <div className={onShowSidebar ? "opacity-100 w-full h-[6rem] translate-y-[80px] -translate-x-3 flex absolute bg-white xl:hidden transition-all duration-500 shadow-2xl " : "w-full h-[6rem] -z-50 -translate-y-[50px] -translate-x-3 flex absolute bg-white xl:hidden transition-all duration-500 shadow-2xl opacity-0"}>
            <div className="w-full h-full flex justify-center items-center">
                <ul className="text-black flex flex-col  w-full h-full justify-around">
                    <Link to={'/'} className="w-full h-[50%] flex items-center hover:bg-slate-200 px-5">
                        <li className=" font-semibold text-black">Beranda</li>
                    </Link >

                    <Link to={'/produk'} className="w-full h-[50%] flex items-center hover:bg-slate-200 px-5">
                        <li className="font-semibold text-black">Produk</li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    )
}