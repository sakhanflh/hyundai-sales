import { useState } from "react";
import { HeaderM } from "../components/HeaderM";
import { Footer } from "../components/Footer";
import { FaRegFilePdf } from "react-icons/fa";


export function StargazerX() {
    const pdfPath = '/pdf/BROCHURE_STARGAZER_X_ID.pdf'

    const Component1 = () => {
        return (
            <div className="flex justify-center pt-5 px-5 flex-col gap-5">
                <div className="w-full border-2 shadow-lg text-black p-5 rounded-lg flex flex-col gap-5">
                    <div className="flex justify-between font-semibold">
                        <p>Style 1.5 IVT</p>
                        <p>Rp. 335.800.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Prime 1.5 IVT</p>
                        <p>Rp. 346.400.000</p>
                    </div>

                    <div className="border-t border-2 shadow-md bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg text-center p-2">
                        <p><i>Noted :</i></p>
                        <p><i>Captain Seat +Rp. 1.000.000</i></p>
                        <p><i>2 Tone Color +Rp. 1.500.000</i></p>
                        <p><i>Premium Color +Rp. 3.500.000</i></p>
                    </div>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5">
                    <h1 className="font-semibold text-center"><i>Ada satu langkah kecil yang akan membawa Anda ke dalam keajaiban Stargazer X. Tekan tombol brosur di bawah untuk melihat detail mengenai Stargazer X dan saksikan dunia mobil yang berbeda.</i></h1>
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
                    <h1 className="text-2xl font-semibold">Unleash The X In You</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezerX/D-1-Kolom-Hero-Color-Premium-hargahyundaibatam-081275000750.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Tunjukkan faktor X dalam dirimu bersama Hyundai STARGAZER X. Desain baru berkarakter tegas namun tetap stylish dan futuristik, dilengkapi dengan beragam fitur inovatif membuat eksplorasi dalam hidup lebih menyenangkan.</p>
                </div>


                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-2xl font-semibold text-center">Bluelink Connect With Your Car</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezerX/D_1_Kolom_bluelink-hargahyundaibatam-081275000750.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Hyundai STARGAZER X telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Ada satu langkah kecil yang akan membawa Anda ke dalam keajaiban Stargazer X. Tekan tombol brosur di bawah untuk melihat detail mengenai Stargazer X dan saksikan dunia mobil yang berbeda.</i></h1>
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
                    <h1 className="text-2xl font-semibold text-center">Explore Powerful Performance</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezerX/D_1_Kolom_samping-gasoline-hargahyundaibatam-081275000750.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Hyundai STARGAZER X bermesin Smartstream G1.5 dengan Intelligent Variable Transmission (IVT) menghasilkan tenaga ekstra, responsif dan efisien bahan bakar.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Ada satu langkah kecil yang akan membawa Anda ke dalam keajaiban Stargazer X. Tekan tombol brosur di bawah untuk melihat detail mengenai Stargazer X dan saksikan dunia mobil yang berbeda.</i></h1>
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
        return (
            <div className="w-full justify-center items-center flex flex-col pt-5 px-5 gap-5">
                <div className="">
                    <h1 className="text-2xl font-semibold">Hyundai SmartSense</h1>
                </div>
                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-xl font-semibold text-center">6-Airbag system (Driver, Passenger, Side & Curtain)*</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezerX/Airbag-2-Kolom_544x360-.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">STARGAZER X dilengkapi dengan 6 airbag untuk melindungi pengemudi dan penumpang apabila terjadi benturan yang tidak diinginkan.</p>
                </div>


                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-xl font-semibold text-center">Blind-spot Collision-avoidance Assist (BCA - Dari parkir paralel)*</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/stargezerX/2_kolom_BCA.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Blind-spot Collision-avoidance Assist (BCA) memonitor blind-spot Anda saat berkendara. Jika ada kendaraan lain yang terdeteksi di sekitar mobil Anda, LED pada kaca spion akan menyala memberikan peringatan. Jika ada risiko benturan dengan kendaraan di sisi samping dalam kecepatan rendah (0 - 3km/jam), seperti misalnya saat keluar dari posisi parkir paralel, sistem akan berfungsi secara otomatis membantu pengereman darurat.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Ada satu langkah kecil yang akan membawa Anda ke dalam keajaiban Stargazer X. Tekan tombol brosur di bawah untuk melihat detail mengenai Stargazer X dan saksikan dunia mobil yang berbeda.</i></h1>
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

                <div className="w-full items-center flex flex-col px-5 py-5 gap-5 pt-10">
                    <h1 className="font-semibold text-center"><i>Ada satu langkah kecil yang akan membawa Anda ke dalam keajaiban Stargazer X. Tekan tombol brosur di bawah untuk melihat detail mengenai Stargazer X dan saksikan dunia mobil yang berbeda.</i></h1>
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
            png: "/stargezerX/ks-creamy_4-1.png"
        },
        image2: {
            png: "/stargezerX/ks-dragon_4.png"
        },
        image3: {
            png: "/stargezerX/ks-magnetic_4.png"
        },
        image4: {
            png: "/stargezerX/ks-midnight_4.png"
        },
        image5: {
            png: "/stargezerX/ks-titan_4.png"
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
                    <img src="/img/stargezerX.png" alt="" />
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