import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export function Footer() {
    return (
        <div className="w-full h-[10rem] bg-gradient-to-r from-blue-800 to-blue-950 justify-center flex flex-col gap-5">
            <div className="text-white flex items-center justify-center w-full gap-5 text-2xl">
                <div className="border-2 rounded-full p-3">
                    <FaTwitter />
                </div>
                <div className="border-2 rounded-full p-3">
                    <FaFacebook />
                </div>
                <div className="border-2 rounded-full p-3">
                    <SiGmail />
                </div>
                <div className="border-2 rounded-full p-3">
                    <FaInstagram />
                </div>
            </div>
            
            <div className="w-full justify-center items-center flex text-white font-semibold">
                <p>Copyright<span className="font-normal">&#9400;</span>2024 Senech.corp</p>
            </div>
        </div>
    )
}