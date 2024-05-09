import { SwiperSlider } from "../components/SwiperSlider";
import { Header } from "../components/home/Header";
import { FaCarSide, FaHome, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { UtilityHome } from "../components/home/UtilityHome";
import { HeaderM } from "../components/HeaderM";
import { TbBrandWechat } from "react-icons/tb";
import { GiTrade } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";
import { Map } from "../components/home/Map";
import { Footer } from "../components/Footer";
import { FaArrowUpLong } from "react-icons/fa6";




export default function HomePage() {
    const handleClick = () => {
        window.location.href = 'https://api.whatsapp.com/send/?phone=6283808883438&text&type=phone_number&app_absent=0'
    }

    const handleInstagram = () => {
        window.location.href = 'https://www.instagram.com/yoga_aditya117?igsh=MWhmMHY3eHFiMWV5eg=='
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className="text-blue-900">
                <Header />
                <HeaderM />
                <SwiperSlider />
                
                {/* Card Profil */}
                <div className="pt-5 px-5 w-full gap-5 flex items-center flex-col xl:flex-row xl:gap-32  xl:pl-32 xl:py-10">
                    <div className="w-44 h-52 xl:w-96 xl:h-[30rem] rounded-xl overflow-hidden ">
                        <img src="/img/fotoprofil.jpg" alt="" className="w-full object-cover" />
                    </div>

                    <div className="w-full xl:w-[35rem] gap-5 flex flex-col text-black">
                        <h1 className="font-bold text-2xl ">Halo!, Saya Yoga Aditya, Sales Consultant Di Hyundai Cibubur</h1>

                        <div className="flex flex-col gap-5 items-center xl:text-lg">
                            <p className=" font-medium">Menyediakan layanan terbaik dalam penjualan unit baru, saya siap memenuhi kebutuhan Anda dengan penuh dedikasi. Salah satu keunggulan yang saya tawarkan adalah program spesial tukar tambah, yang dirancang untuk membuat pengalaman Anda lebih menguntungkan.</p>
                            <p className=" font-medium">Dengan antusiasme dan pengalaman dalam industri otomotif sejak tahun 2022, saya siap membantu Anda menemukan kendaraan baru yang sempurna. Wilayah layanan saya mencakup Cibubur, Jakarta, Bogor, Depok, Tangerang, dan Bekasi.</p>
                            <p className="text-center"><i>“Kepuasan Anda merupakan kesenangan bagi Saya.”</i></p>
                            <p className="text-center"><i>~Yoga 2024~</i></p>
                        </div>

                        <div className="w-full xl:hidden flex flex-wrap gap-2 justify-center text-blue-900">
                            <div className="w-[45%] flex flex-col items-center border rounded-lg p-2">
                                <TbBrandWechat className="w-10 h-10" />
                                <p className="text-black">Konsultan Otomotif</p>
                            </div>
                            <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                                <FaCarSide className="w-10 h-10" />
                                <p className="text-black">Penjualan Unit Baru</p>
                            </div>
                            <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                                <GiTrade className="w-10 h-10" />
                                <p className="text-black">Tukar Tambah</p>
                            </div>
                            <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                                <FaHome className="w-10 h-10" />
                                <p className="text-black">Home Test Drive</p>
                            </div>
                            <div className="w-[45%] flex flex-col items-center  border rounded-lg p-2">
                                <Ri24HoursLine className="w-10 h-10" />
                                <p className="text-black">Chat 24 Jam</p>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row gap-5">
                            <button className="py-3 px-5 rounded-lg flex xl:py-3 xl:px-20 bg-green-500 justify-center text-white items-center gap-3 xl:rounded-xl" onClick={handleClick}><FaWhatsapp className="text-2xl" /> Whatsapp</button>
                            <button className="py-3 px-5 rounded-lg flex xl:py-3 xl:px-20 bg-blue-900 justify-center text-white items-center gap-3 xl:rounded-xl" onClick={handleInstagram}><FaInstagram className="text-2xl" /> Instagram</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-5 pt-5 w-full xl:hidden">
                        <h1 className="w-full font-bold text-lg border-b-4 py-1 border-blue-900">PRICELIST HYUNDAI 2024</h1>
                        <img src="/img/WhatsApp-Image-2024-03-28-at-10.11.05.jpeg" alt="" />
                    </div>
                </div>
                <div className="flex pt-5 px-5 gap-3 flex-wrap justify-center pb-10 ">
                    <div className="text-center flex flex-nowrap w-full justify-center text-2xl text-black font-semibold">
                        <h1>Leasing Support</h1>
                    </div>
                    <div className="xl:w-[15%] xl:h-full">
                        <img src="/img/mybank.jpg" alt="" className="xl:object-cover xl:w-full xl:h-full" />
                    </div>

                    <div className="xl:w-[15%] xl:h-full">
                        <img src="/img/mandiri-tunas-finance.jpg" alt="" className="xl:object-cover xl:w-full xl:h-full" />
                    </div>

                    <div className="xl:w-[15%] xl:h-full">
                        <img src="/img/MAF.jpg" alt="" className="xl:object-cover xl:w-full xl:h-full" />
                    </div>

                    <div className="xl:w-[15%] xl:h-full">
                        <img src="/img/cimb-niaga.png" alt="" className="xl:object-cover xl:w-full xl:h-full" />
                    </div>
                </div>
                {/* Card Profil End */}
                <UtilityHome />

                <div className="w-full px-5 pt-10 gap-5 flex flex-col">
                    <h1 className="font-bold text-lg border-b-4 py-1 border-blue-900">Galeri Serah Terima Mobil</h1>

                    <div className="flex flex-wrap w-full gap-2 justify-center">
                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/1714499198146.jpg" alt="" className="w-full h-full object-fill" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/1714499198106.jpg" alt="" className="w-full h-full object-fill" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/1714499198122.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/1714499198178.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/WhatsApp Image 2024-05-05 at 01.15.24_23aa979f.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/WhatsApp Image 2024-05-05 at 01.15.24_29f41f60.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full xl:w-[30%] xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/1714499198160.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/WhatsApp Image 2024-05-05 at 01.15.24_53b76af4.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/WhatsApp Image 2024-05-05 at 01.15.25_986a815c.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/WhatsApp Image 2024-05-05 at 01.15.25_c3848080.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-[48%] xl:w-[30%] h-48 xl:h-96 rounded-xl overflow-hidden">
                            <img src="/img/WhatsApp Image 2024-05-05 at 01.15.25_e3d8148a.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 xl:pt-10 pt-5">
                    <h1 className="font-semibold text-xl xl:text-2xl w-full  text-blue-900 border-b-4 border-blue-900">Lokasi</h1>
                </div>

                <div className="w-full py-5 flex flex-col gap-5 relative items-center">
                    <Map />
                </div>

                {/* Scroll To Top */}
                <div className="p-5">
                    <div className="flex items-center gap-1 text-lg hover:underline justify-end" onClick={scrollToTop}>
                        <FaArrowUpLong />
                        <p>Back to top</p>
                    </div>
                </div>
                {/* Scroll To Top End */}

                <Footer />
            </div>
        </>
    )
}