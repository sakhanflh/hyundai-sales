export function Navbar(){
    return(
        <>
        <div className="w-full h-full xl:flex items-center justify-between px-5 hidden">
            <div>
                <img src="/img/Harga-Hyundai-Batam.png" alt="" />
            </div>

            <div>
                <ul className="text-black flex gap-5">
                    <li className="hover:border-b border-blue-900 font-semibold text-blue-900">Beranda</li>
                    <li className="hover:border-b border-blue-900 font-semibold text-blue-900">Produk</li>
                </ul>
            </div>
        </div>
        </>
    )
}