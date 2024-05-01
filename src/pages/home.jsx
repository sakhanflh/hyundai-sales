import { SwiperSlider } from "../components/SwiperSlider";
import { Header } from "../components/home/Header";
import { FaCarSide, FaHome, FaInstagram, FaRegSmileWink, FaWhatsapp } from "react-icons/fa";
import { UtilityHome } from "../components/home/UtilityHome";
import { HeaderM } from "../components/HeaderM";
import { TbBrandWechat } from "react-icons/tb";
import { GiTrade } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";
import { Map } from "../components/home/Map";



export default function HomePage(){
    const handleClick = () => {
        window.location.href = 'https://api.whatsapp.com/send/?phone=6283808883438&text&type=phone_number&app_absent=0'
    }

    return(
        <>
        <div className="text-blue-900">
            <Header />
            <HeaderM />
            <SwiperSlider />
            
            {/* Card Profil */}
            <div className="pt-5 px-5 w-full gap-5 flex items-center flex-col xl:flex-row xl:gap-40 xl:h-[35rem] xl:pl-32">
                <div className="w-44 xl:w-72 rounded-xl overflow-hidden">
                    <img src="/img/fotoprofil.jpg" alt="" className="w-full"/>
                </div>

                <div className="w-full xl:w-96 gap-5 flex flex-col">
                    <h1 className="font-bold text-2xl xl:translate-x-20">Hi, Saya Yoga Aditya Sales Executive Di Hyundai Cibubur</h1>

                    <div className="flex flex-col gap-5 items-center xl:translate-x-20">
                        <p className=" font-medium">Pelayanan Utama Saya Adalah Penjualan Unit Baru Dan Untuk Mendukung Layanan Utama Ini Saya Memberikan Layanan Spesial Yaitu Tukar Tambah.</p>
                        <p className=" font-medium">Berbekal Pengalaman Di Bidang Otomotif Sejak Tahun 2011 Dengan Senang Hati Saya Siap Untuk Memberikan Layanan Terbaik Untuk Anda Di Wilayah Cibubur, Jakarta, Bogor, Depok, Tangerang, Bekasi.</p>
                        <p className="text-center"><i>“Konsumen Baik Hanya dilayani Oleh Sales Terbaik”</i></p>
                        <p className="text-center"><i>~Yoga 2024~</i></p>
                    </div>

                    <div className="w-full xl:hidden flex flex-wrap gap-2 justify-center">
                        <div className="w-[45%] flex flex-col items-center border rounded-lg p-2">
                            <TbBrandWechat className="w-10 h-10"/>
                            <p>Konsultan Otomotif</p>
                        </div>
                        <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                            <FaCarSide className="w-10 h-10"/>
                            <p>Penjualan Unit Baru</p>
                        </div>
                        <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                            <GiTrade className="w-10 h-10"/>
                            <p>Tukar Tambah</p>
                        </div>
                        <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                            <FaHome className="w-10 h-10"/>
                            <p>Home Test Drive</p>
                        </div>
                        <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                            <Ri24HoursLine className="w-10 h-10"/>
                            <p>Chat 24 Jam</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-5">
                        <button className="py-3 px-5 rounded-lg flex xl:py-3 xl:px-20 bg-green-500 justify-center text-white items-center gap-3 xl:rounded-xl"><FaWhatsapp className="text-2xl" onClick={handleClick}/> Whatsapp</button>
                        <button className="py-3 px-5 rounded-lg flex xl:py-3 xl:px-20 bg-blue-900 justify-center text-white items-center gap-3 xl:rounded-xl"><FaInstagram className="text-2xl"/> Instagram</button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-5 pt-5 w-full">
                    <h1 className="w-full font-bold text-lg border-b-4 py-1 border-blue-900">PRICELIST HYUNDAI 2024</h1>
                    <img src="/img/WhatsApp-Image-2024-03-28-at-10.11.05.jpeg" alt="" />
                </div>
            </div>
            {/* Card Profil End */}
            <UtilityHome/>

            <div className="w-full px-5 pt-10 gap-5 flex flex-col">
                <h1 className="font-bold text-lg border-b-4 py-1 border-blue-900">Galeri Serah Terima Mobil</h1>

                <div className="flex flex-wrap w-full gap-2">
                    <div className="w-[48%] h-48 rounded-xl overflow-hidden">
                        <img src="/img/1714499198146.jpg" alt="" className="w-full h-full object-cover"/>
                    </div>

                    <div className="w-[48%] h-48 rounded-xl overflow-hidden">
                        <img src="/img/1714499198106.jpg" alt="" className="w-full h-full object-cover"/>
                    </div>

                    <div className="w-full rounded-xl overflow-hidden">
                        <img src="/img/1714499198160.jpg" alt="" className="w-full h-full object-cover"/>
                    </div>

                    <div className="w-[48%] h-48 rounded-xl overflow-hidden">
                        <img src="public/img/1714499198122.jpg" alt="" className="w-full h-full object-cover"/>
                    </div>

                    <div className="w-[48%] h-48 rounded-xl overflow-hidden">
                        <img src="public/img/1714499198178.jpg" alt="" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <Map />
        </div>
        </>
    )
}