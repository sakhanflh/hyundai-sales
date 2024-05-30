import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export function Footer() {
    const handleWhatsapp = () => {
        window.location.href = 'https://api.whatsapp.com/send/?phone=6283808883438&text&type=phone_number&app_absent=0'
    }

    const handleInstagram = () => {
        window.location.href = 'https://www.instagram.com/yoga_aditya117?igsh=MWhmMHY3eHFiMWV5eg=='
    }

    const handleGmail = () => {
        window.location.href = 'mailto:Yoga083808883438@gmail.com'
    }

    return (
        <div className="w-full bg-gradient-to-r from-blue-800 to-blue-950 justify-center flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-1">
                <div className="w-36 xl:w-60">
                    <img src="/img/Harga-Hyundai-Batam.png" alt="" />
                </div>

                <div className="text-white text-sm xl:text-lg ">
                    <p>Hyundai Mobil Indonesia Cibubur</p>
                    <p>Jl. Alternatif Cibubur Transyogi No. 25 Jatisampurna, Bekasi</p>
                </div>
            </div>

            <div className="text-white flex items-center justify-center w-full gap-5 text-base xl:text-2xl pt-10">
                <div className="border-2 rounded-full p-3 hover:scale-90" onClick={handleWhatsapp}>
                    <FaWhatsapp />
                </div>
                <div className="border-2 rounded-full p-3 hover:scale-90" onClick={handleGmail}>
                    <SiGmail />
                </div>
                <div className="border-2 rounded-full p-3 hover:scale-90" onClick={handleInstagram}>
                    <FaInstagram />
                </div>
            </div>

            <div className="w-full justify-center items-center flex text-white font-semibold text-sm xl:text-lg">
                <p>Copyright<span className="font-normal">&#9400;</span>2024 Senech.corp</p>
            </div>
        </div>
    )
}