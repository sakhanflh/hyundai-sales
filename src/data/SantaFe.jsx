import { useState } from "react";
import { HeaderM } from "../components/HeaderM";
import { Footer } from "../components/Footer";
import { FaRegFilePdf } from "react-icons/fa";


export function SantaFe() {
    const pdfPath = '/pdf/SANTA FE.pdf'

    const Component1 = () => {
        return (
            <div className="flex justify-center pt-5 px-5 flex-col gap-5">
                <div className="w-full border-2 shadow-lg text-black p-5 rounded-lg flex flex-col gap-5">
                    <div className="flex justify-between font-semibold">
                        <p>Prime AT</p>
                        <p>Rp. 625.000.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Signature AT</p>
                        <p>Rp. 706.000.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Prime DCT</p>
                        <p>Rp. 686.500.000</p>
                    </div>

                    <div className="flex justify-between font-semibold">
                        <p>Signature DCT</p>
                        <p>Rp. 759.000.000</p>
                    </div>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5">
                    <h1 className="font-semibold text-center"><i>Jelajahi kecanggihan dan keindahan mobil Hyundai Santa Fe dengan mengetuk tombol brosur di bawah. Mulailah perjalanan Anda ke dalam dunia kinerja dan kemewahan yang tiada tara.</i></h1>
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
                    <h1 className="text-2xl font-semibold">Drive SANTA FE Together</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/santafe/Santa-FE-Gallery-5-pc.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Dengan SANTA FE, hari-hari Anda akan selalu diawali dengan menyenangkan. Baik untuk rutinitas sehari-hari, menciptakan momen-momen spesial atau merencanakan perjalanan jauh. SANTA FE akan selalu memberi berbagai kemudahan dalam berkendara serta kenyamanan untuk perjalanan yang penuh gaya bagi Anda sekeluarga. SANTA FE membuat segalanya jadi lebih baik.</p>
                </div>


                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-2xl font-semibold text-center">Rediscovering Happiness</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/santafe/Santa-FE-Cafe-Side-pc.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Semua detail yang ada pada SANTA FE diciptakan untuk satu tujuan: keluarga Anda. Desainnya yang mewah begitu memanjakan, ruang interior yang luas mendukung berbagai aktivitas Anda sekeluarga, serta teknologi terdepan yang menjaga semua orang agar tetap aman setiap saat. Rencanakan saja apa yang bisa membuat keluarga Anda bahagia, selebihnya biarkan SANTA FE yang bekerja.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Jelajahi kecanggihan dan keindahan mobil Hyundai Santa Fe dengan mengetuk tombol brosur di bawah. Mulailah perjalanan Anda ke dalam dunia kinerja dan kemewahan yang tiada tara.</i></h1>
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
                    <h1 className="text-2xl font-semibold text-center">Diverse Power Options Controlled Easily</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/santafe/santafe.jpeg" alt="" className="object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/santafe/Santa-FE-Teks-engine-desc-ID-pc.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Performa berkendara SANTA FE tidak hanya memukau di atas kertas, tetapi juga memberikan pilihan berkendara yang dinamis maupun nyaman, fleksibel menyesuaikan kondisi medan.</p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Jelajahi kecanggihan dan keindahan mobil Hyundai Santa Fe dengan mengetuk tombol brosur di bawah. Mulailah perjalanan Anda ke dalam dunia kinerja dan kemewahan yang tiada tara.</i></h1>
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
                    <h1 className="text-2xl font-semibold">Smart Technology Used Wisely</h1>
                </div>
                <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                    <h1 className="text-xl font-semibold text-center">Lane Following Assist (LFA)</h1>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/santafe/Santa-FE-Interior-top-view-pc.jpeg" alt="" className="object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <img src="/santafe/Santa-FE-LFA-pc.jpeg" alt="" className="object-cover" />
                    </div>
                    <p className="">Lane Following Assist (LFA) menggunakan kamera yang tertanam di kaca depan untuk mendeteksi garis marka dan kendaraan lain yang hendak mendahului Anda dari sisisamping. Ketika fitur ini aktif, steering assistance memastikan kendaraan Anda tetap berada di dalam garis marka. <i className="font-semibold">*Hanya di Signature.</i></p>
                </div>

                <div className="w-full items-center flex flex-col py-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Jelajahi kecanggihan dan keindahan mobil Hyundai Santa Fe dengan mengetuk tombol brosur di bawah. Mulailah perjalanan Anda ke dalam dunia kinerja dan kemewahan yang tiada tara.</i></h1>
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
                    <h1 className="font-semibold text-center"><i>Jelajahi kecanggihan dan keindahan mobil Hyundai Santa Fe dengan mengetuk tombol brosur di bawah. Mulailah perjalanan Anda ke dalam dunia kinerja dan kemewahan yang tiada tara.</i></h1>
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
            png: "/santafe/SANTA_-_Glacier_White_Metallic1-1.png"
        },
        image2: {
            png: "/santafe/SANTA_-_Lagoon_Blue_Pearl-3.png"
        },
        image3: {
            png: "/santafe/SANTA_-_Magnetic_Gray_Metallic1-1.png"
        },
        image4: {
            png: "/santafe/SANTA_-_Abyss_Black_Pearl1-1.png"
        },
        image5: {
            png: "/santafe/SANTA_-_Typhoon_Silver_Metallic1-2.png"
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
                    <img src="/img/santafe.png" alt="" />
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