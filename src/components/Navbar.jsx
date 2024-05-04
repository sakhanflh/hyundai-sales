import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <div className="w-full h-full xl:flex items-center justify-between px-5 hidden">
            <div>
                <img src="/img/Harga-Hyundai-Batam.png" alt="" />
            </div>

            <div>
                <ul className="text-black flex gap-5">
                    <Link to={'/'}>
                        <li className="hover:text-blue-900 font-semibold text-black border-r border-black  px-5">Beranda</li>
                    </Link>

                    <Link to={'/produk'}>
                        <li className="hover:text-blue-900 font-semibold ">Produk</li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    )
}