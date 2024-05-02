import { useState } from "react";
import { HeaderM } from "../components/HeaderM";
import { Footer } from "../components/Footer";
import { FaRegFilePdf } from "react-icons/fa";


export function Stargezer() {
    const pdfPath = '/pdf/New-Stargazer-E-Brochure-id.pdf'

    const Component1 = () => {
        return (
            <div className="flex justify-center pt-5 px-5 flex-col gap-5">
                <div className="w-full border-2 shadow-lg text-black p-5 rounded-lg flex flex-col gap-5">
                    <div className="flex justify-between font-semibold">
                        <p>Active 1.5 M/T</p>
                        <p>Rp. 249.600.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Active 1.5 IVT</p>
                        <p>Rp. 262.600.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Essential 1.5 M/T</p>
                        <p>Rp. 261.400.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Essential 1.5 IVT</p>
                        <p>Rp. 275.300.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Prima 1.5 IVT</p>
                        <p>Rp. 320.900.000</p>
                    </div>

                    <div className="border-t border-2 shadow-md bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg text-center p-2">
                        <p><i>Noted :</i></p>
                        <p><i>Captain Seat +Rp. 1.000.000</i></p>
                        <p><i>2 Tone Color +Rp. 1.500.000</i></p>
                    </div>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5">
                    <h1 className="font-semibold text-center"><i>Penasaran dengan sensasi berkendara yang ditawarkan oleh New STARGAZER? Temukan jawabannya dalam brosur dibawah ini.</i></h1>
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="py-3 px-16 text-xl flex items-center gap-1 bg-blue-950 text-white rounded-lg"><FaRegFilePdf /> E-Brosur</button>
                    </a>
                </div>
            </div>
        )
    }

    const Component2 = () => {
        return (
            <div className="w-full justify-center items-center flex flex-col pt-5 px-5 gap-5">
                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-2xl font-semibold">Bintang Baru Keluarga</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezer/Highlight_1kolom_D_1220x600.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Saatnya menikmati era baru MPV bersama New <span className="font-semibold">STARGAZER</span>, inovasi mobilitas untuk setiap perjalanan berkualitas. Inilah standar baru mobil keluarga yang menghadirkan kenyamanan maksimal dan fitur berkelas, serta memberikan ruang luas untuk kebersamaan Anda dan orang terkasih.</p>
                </div>


                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-2xl font-semibold text-center">Bluelink Connect With Your Car</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezer/23MY_KS_RHD_BLUELINK_1kolom_D_1220x600.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">New <span className="font-semibold">STARGAZER</span> telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Penasaran dengan sensasi berkendara yang ditawarkan oleh New STARGAZER? Temukan jawabannya dalam brosur dibawah ini.</i></h1>
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="py-3 px-16 text-xl flex items-center gap-1 bg-blue-950 text-white rounded-lg"><FaRegFilePdf /> E-Brosur</button>
                    </a>
                </div>
            </div>
        )
    };

    const Component3 = () => {
        return (
            <div className="w-full justify-center items-center flex flex-col pt-5 px-5 gap-5">
                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-2xl font-semibold text-center">Bintangnya Performa Maksimal</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezer/KV01_comp_Compositing_deliveryCS_1kolom_D_1220x600.jpeg" alt="" className="object-cover" />
                    </div>
                    <div className="">
                        <img src="/stargezer/Performance-ID-1-Kolom_1120x600_PC.jpeg" alt="" />
                    </div>
                    <p className="">New <span className="font-semibold">STARGAZER</span> dilengkapi mesin Smartstream 1.5 L dengan sistem Intelligent Variable Transmission (IVT) hasilkan performa tangguh, responsif, serta efisien. Fitur Drive Mode juga tersedia untuk pilihan gaya berkendara yang paling sesuai untuk Anda.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Penasaran dengan sensasi berkendara yang ditawarkan oleh New STARGAZER? Temukan jawabannya dalam brosur dibawah ini.</i></h1>
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="py-3 px-16 text-xl flex items-center gap-1 bg-blue-950 text-white rounded-lg"><FaRegFilePdf /> E-Brosur</button>
                    </a>
                </div>
            </div>
        )
    };

    const Component4 = () => {
        return(
            <div className="w-full justify-center items-center flex flex-col pt-5 px-5 gap-5">
                <div className="">
                    <h1 className="text-2xl font-semibold">Hyundai SmartSense</h1>
                </div>
                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-xl font-semibold">Lane Following Assist (LFA)*</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezer/KS_RHD_LFA_2kolom_544x360.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Kamera depan melacak penanda garis jalur dan membantu menjaga kendaraan tetap aman di tengah jalur.</p>
                </div>


                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-xl font-semibold text-center">Forward Collision-avoidance Assist (FCA)*</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezer/KS_RHD_FCA_2kolom_544x360.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Fitur ini memperingatkan pengemudi ketika sistem mendeteksi ada risiko benturan dari arah depan, seperti misalnya dengan pejalan kaki atau dengan kendaraan yang tiba-tiba melambat atau berhenti. Jika risiko benturan terus meningkat setelah peringatan, maka sistem secara otomatis akan membantu dengan melakukan pengereman darurat.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Penasaran dengan sensasi berkendara yang ditawarkan oleh New STARGAZER? Temukan jawabannya dalam brosur dibawah ini.</i></h1>
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="py-3 px-16 text-xl flex items-center gap-1 bg-blue-950 text-white rounded-lg"><FaRegFilePdf /> E-Brosur</button>
                    </a>
                </div>
            </div>
        )
    };

    const Component5 = () => {
        return (
            <div className="pt-5">
                <div className="flex justify-center text-2xl font-semibold">
                    <h1>Color Options</h1>
                </div>

                <div>
                    <div>
                        {currentImg && (
                            <>
                                <img
                                    src={imagePaths[currentImg].png}
                                    alt="image"
                                />
                            </>
                        )}

                    </div>

                    <div className="w-full flex justify-center px-20 pt-5">
                        <div className="bg-gradient-to-r from-blue-950 to-blue-700 w-full flex justify-center items-center gap-5 rounded-lg py-2">
                            <div className="w-5 h-5 rounded-full bg-creamy" onClick={() => handleClick("image1")}></div>
                            <div className="w-5 h-5 rounded-full bg-red" onClick={() => handleClick("image2")}></div>
                            <div className="w-5 h-5 rounded-full bg-abu" onClick={() => handleClick("image3")}></div>
                            <div className="w-5 h-5 rounded-full bg-midnight" onClick={() => handleClick("image4")}></div>
                            <div className="w-5 h-5 rounded-full bg-titan" onClick={() => handleClick("image5")}></div>
                        </div>
                    </div>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 pt-10">
                    <h1 className="font-semibold text-center"><i>Penasaran dengan sensasi berkendara yang ditawarkan oleh New STARGAZER? Temukan jawabannya dalam brosur dibawah ini.</i></h1>
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="py-3 px-16 text-xl flex items-center gap-1 bg-blue-950 text-white rounded-lg"><FaRegFilePdf /> E-Brosur</button>
                    </a>
                </div>
            </div>
        )
    };


    const [activeComponent, setActiveComponent] = useState(1);

    const handleClick2 = (componentNumber) => {
        setActiveComponent(componentNumber);
    };

    // Utility End
    const [currentImg, setCurrentImg] = useState("image1")

    const imagePaths = {
        image1: {
            png: "/stargezer/ks-creamy_51-768x389.png"
        },
        image2: {
            png: "/stargezer/ks-dragon_51-768x389.png"
        },
        image3: {
            png: "/stargezer/ks-magnetic_51-768x389.png"
        },
        image4: {
            png: "/stargezer/ks-midnight-768x389.png"
        },
        image5: {
            png: "/stargezer/ks-titan_5-768x389.png"
        }
    }

    const handleClick = (imageName) => {
        setCurrentImg(imageName)
    }

    return (
        <div>
            <HeaderM />
            <div className="pt-16 pb-5">
                <div className="">
                    <img src="/img/stargezer.png" alt="" />
                </div>

                <div className="px-5 flex flex-wrap gap-2 justify-center">
                    <div className={`w-[31%] py-3 items-center flex justify-center rounded-md ${activeComponent === 1 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'border-2 shadow-md text-black'}`} onClick={() => handleClick2(1)}>
                        <button>Pricelist</button>
                    </div>
                    <div className={`w-[33%] py-3 items-center flex justify-center rounded-md ${activeComponent === 2 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'border-2 shadow-md text-black'}`} onClick={() => handleClick2(2)}>
                        <button>Highlights</button>
                    </div>
                    <div className={`w-[31%] py-3 items-center flex justify-center rounded-md ${activeComponent === 3 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'border-2 shadow-md text-black'}`} onClick={() => handleClick2(3)}>
                        <button>Performa</button>
                    </div>
                    <div className={`w-[48%] py-3 items-center flex justify-center rounded-md ${activeComponent === 4 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'border-2 shadow-md text-black'}`} onClick={() => handleClick2(4)}>
                        <button>Keamanan</button>
                    </div>
                    <div className={`w-[48%] py-3 items-center flex justify-center rounded-md ${activeComponent === 5 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'border-2 shadow-md text-black'}`} onClick={() => handleClick2(5)}>
                        <button>Warna</button>
                    </div>
                </div>

                {activeComponent === 1 && <Component1 />}
                {activeComponent === 2 && <Component2 />}
                {activeComponent === 3 && <Component3 />}
                {activeComponent === 4 && <Component4 />}
                {activeComponent === 5 && <Component5 />}
            </div>
            <Footer />
        </div>
    )
}