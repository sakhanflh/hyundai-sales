export function SideBar({onShowSidebar}){
    return(
        <>
        <div className={onShowSidebar ? "w-60 h-[47rem] translate-y-[406px] translate-x-44 flex absolute items-center justify-between bg-white xl:hidden transition-all duration-500 shadow-2xl" : "w-60 h-[47rem] translate-y-[409px] translate-x-96 flex absolute items-center justify-between bg-white xl:hidden transition-all duration-500 shadow-2xl"}>
            <div className="w-full h-full p-5">
                <ul className="text-black flex flex-col gap-5 w-full h-full">
                    <li className="hover:border-b border-blue-900 font-semibold text-blue-900">Beranda</li>
                    <li className="hover:border-b border-blue-900 font-semibold text-blue-900">Produk</li>
                </ul>
            </div>
        </div>
        </>
    )
}