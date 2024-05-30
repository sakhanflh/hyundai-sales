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
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";




export default function HomePage() {
    const phoneNumber = "6283808883438"; 
    const message = "Halo, Saya ingin info promo hyundai Palisade..."; 
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

    const handleClick = () => {
        window.location.href = whatsappUrl
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
    // Animation Layout
    const [showLayout, setShowLayout] = useState(false)

    useEffect(() => {
        setShowLayout(true);
    }, []);

    const [showLayout2, setShowLayout2] = useState(false)

    useEffect(() => {
        setShowLayout2(true);
    }, []);

    const [showLayout3, setShowLayout3] = useState('-translate-x-full')

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768 && window.scrollY > 500) {
                setShowLayout3('translate-x-0');
            } else if (window.innerWidth < 768 && window.scrollY > 1100) {
                setShowLayout3('translate-x-0');
            } else {
                setShowLayout3('-translate-x-full');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showImg, setShowImg] = useState('-translate-x-full opacity-0')

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768 && window.scrollY > 1600) {
                setShowImg('translate-x-0 opacity-100');
            } else if (window.innerWidth < 768 && window.scrollY > 3700) {
                setShowImg('translate-x-0 opacity-100');
            } else {
                setShowImg('-translate-x-full opacity-0');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showImg2, setShowImg2] = useState('translate-x-full opacity-0')

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768 && window.scrollY > 1600) {
                setShowImg2('translate-x-0 opacity-100');
            } else if (window.innerWidth < 768 && window.scrollY > 3700) {
                setShowImg2('translate-x-0 opacity-100');
            } else {
                setShowImg2('translate-x-full opacity-0');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Animation Layout End


    return (
        <>
            <div className="text-blue-900 overflow-x-hidden">
                <Header />
                <HeaderM />
                <div className="w-full">
                    <SwiperSlider />
                </div>

                {/* Card Profil */}
                <div className="pt-5 px-5 w-full gap-5 flex items-center flex-col lg:flex-row md:gap-32 lg:pl-32 lg:py-10 justify-center">
                    {showLayout && (
                        <div className="w-44 h-52 lg:w-96 lg:h-[30rem] rounded-xl overflow-hidden showLayout">
                            <img src="/img/fotoprofil.jpg" alt="" className="w-full object-cover" />
                        </div>
                    )}
                    {showLayout2 && (
                        <div className={`w-full showLayout-2 lg:w-[35rem] gap-5 flex flex-col text-black transition-opacity duration-1000 ${showLayout2 ? 'opacity-100' : 'opacity-0'}`}>
                            <h1 className="font-bold text-2xl ">Halo!, Saya Yoga Aditya, Sales Consultant Di Hyundai Cibubur</h1>

                            <div className="flex flex-col gap-5 items-center lg:text-lg">
                                <p className=" font-medium">Menyediakan layanan terbaik dalam penjualan unit baru, saya siap memenuhi kebutuhan Anda dengan penuh dedikasi. Salah satu keunggulan yang saya tawarkan adalah program spesial tukar tambah, yang dirancang untuk membuat pengalaman Anda lebih menguntungkan.</p>
                                <p className=" font-medium">Dengan antusiasme dan pengalaman dalam industri otomotif sejak tahun 2022, saya siap membantu Anda menemukan kendaraan baru yang sempurna. Wilayah layanan saya mencakup Cibubur, Jakarta, Bogor, Depok, Tangerang, dan Bekasi.</p>
                                <p className="text-center"><i>“Kepuasan Anda merupakan kesenangan bagi Saya.”</i></p>
                                <p className="text-center"><i>~Yoga 2024~</i></p>
                            </div>

                            <div className="w-full lg:hidden flex flex-wrap gap-2 justify-center text-blue-900">
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

                            <div className="flex flex-col lg:flex-row gap-5">
                                <button className="py-3 px-5 rounded-lg flex lg:py-3 lg:px-20 bg-green-500 justify-center text-white items-center gap-3 lg:rounded-xl hover:scale-90 transition-all duration-500" onClick={handleClick}><FaWhatsapp className="text-2xl" /> Whatsapp</button>
                                <button className="py-3 px-5 rounded-lg flex lg:py-3 lg:px-20 bg-blue-900 justify-center text-white items-center gap-3 lg:rounded-xl hover:scale-90 transition-all duration-500" onClick={handleInstagram}><FaInstagram className="text-2xl" /> Instagram</button>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col items-center gap-5 pt-5 w-full lg:hidden">
                        <h1 className="w-full font-bold text-lg border-b-4 py-1 border-blue-900">PRICELIST HYUNDAI 2024</h1>
                        <img src="/img/WhatsApp-Image-2024-03-28-at-10.11.05.jpeg" alt="" />
                    </div>

                </div>
                <div className={`flex pt-5 px-5 gap-3 flex-wrap justify-center pb-10 transition-transform duration-1000 transform ${showLayout3}`}>
                    <div className="text-center flex flex-nowrap w-full justify-center text-2xl text-black font-semibold">
                        <h1>Leasing Support</h1>
                    </div>
                    <div className="lg:w-[15%] lg:h-full">
                        <img src="/img/mybank.jpg" alt="" className="lg:object-cover lg:w-full lg:h-full" />
                    </div>

                    <div className="lg:w-[15%] lg:h-full">
                        <img src="/img/mandiri-tunas-finance.jpg" alt="" className="lg:object-cover lg:w-full lg:h-full" />
                    </div>

                    <div className="lg:w-[15%] lg:h-full">
                        <img src="/img/MAF.jpg" alt="" className="lg:object-cover lg:w-full lg:h-full" />
                    </div>

                    <div className="lg:w-[15%] lg:h-full">
                        <img src="/img/cimb-niaga.png" alt="" className="lg:object-cover lg:w-full lg:h-full" />
                    </div>
                </div>
                {/* Card Profil End */}
                <div>
                    <UtilityHome />
                </div>

                <div className="w-full px-5 pt-10 gap-5 flex flex-col">
                    <h1 className="font-bold text-lg border-b-4 py-1 border-blue-900">Galeri Serah Terima Mobil</h1>

                    <LazyLoad
                        height={200}
                        offset={200}
                        placeholder={<div>Loading...</div>}>
                        <div className={`flex flex-wrap w-full gap-2 justify-center`}>
                            <div className={`w-[48%] lg:w-[30%] rounded-xl overflow-hidden  transition-all duration-500 ${showImg}`}>
                                <img src="/img/1714499198146.jpg" alt="" className="w-full h-full object-fill" />
                            </div>

                            <div className={`w-[48%] lg:w-[30%] rounded-xl overflow-hidden  transition-all duration-500 ${showImg2}`}>
                                <img src="/img/1714499198106.jpg" alt="" className="w-full h-full object-fill" />
                            </div>

                            <div className={`w-[48%] lg:w-[30%] rounded-xl overflow-hidden  transition-all duration-500 delay-75 ${showImg}`}>
                                <img src="/img/1714499198122.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className={`w-[48%] lg:w-[30%] rounded-xl overflow-hidden  transition-all duration-500 delay-75 ${showImg2}`}>
                                <img src="/img/1714499198178.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className={`w-[48%] lg:w-[30%] rounded-xl overflow-hidden  transition-all duration-500 delay-100 ${showImg}`}>
                                <img src="/img/WhatsApp Image 2024-05-05 at 01.15.24_23aa979f.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className={`w-[48%] lg:w-[30%] rounded-xl overflow-hidden  transition-all duration-500 delay-100 ${showImg2}`}>
                                <img src="/img/WhatsApp Image 2024-05-05 at 01.15.24_29f41f60.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full lg:w-[30%] rounded-xl overflow-hidden">
                                <img src="/img/1714499198160.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className="w-[48%] lg:w-[30%] rounded-xl overflow-hidden">
                                <img src="/img/WhatsApp Image 2024-05-05 at 01.15.24_53b76af4.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className="w-[48%] lg:w-[30%] rounded-xl overflow-hidden">
                                <img src="/img/WhatsApp Image 2024-05-05 at 01.15.25_986a815c.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className="w-[48%] lg:w-[30%] rounded-xl overflow-hidden">
                                <img src="/img/WhatsApp Image 2024-05-05 at 01.15.25_c3848080.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <div className="w-[48%] lg:w-[30%] rounded-xl overflow-hidden">
                                <img src="/img/WhatsApp Image 2024-05-05 at 01.15.25_e3d8148a.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </LazyLoad>
                </div>

                <div className="w-full px-5 lg:pt-10 pt-5">
                    <h1 className="font-semibold text-xl lg:text-2xl w-full  text-blue-900 border-b-4 border-blue-900">Lokasi</h1>
                </div>

                <LazyLoad
                    height={200}
                    offset={200}
                    placeholder={<div>Loading...</div>}>
                    <div className="w-full py-5 flex flex-col gap-5 relative items-center">
                        <Map />
                    </div>
                </LazyLoad>

                {/* Scroll To Top */}
                <div className="px-5 py-3 justify-end flex">
                    <div className="flex items-center gap-1 text-base underline px-2 py-1 " onClick={scrollToTop}>
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