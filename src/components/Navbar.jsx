import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <nav className="w-full h-full lg:flex items-center justify-between px-5 hidden">
            <div>
                <img src="/img/Harga-Hyundai-Batam.png" alt="" />
            </div>

            <div>
                <ul className="text-black flex gap-5">
                    <Link to={'/'}>
                        <li className="hover:text-blue-900 font-semibold text-black border-r border-black  px-5 xl:text-xl">Beranda</li>
                    </Link>

                    <Link to={'/produk'}>
                        <li className="hover:text-blue-900 font-semibold xl:text-xl">Produk</li>
                    </Link>
                </ul>
            </div>
        </nav>
        </>
    )
}