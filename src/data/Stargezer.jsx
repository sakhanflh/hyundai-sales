import { useState } from "react";
import { HeaderM } from "../components/HeaderM";
import { Footer } from "../components/Footer";


export function Stargezer() {
    const utilities = [
        { id: "priceList", name: "Price List" },
        { id: "highlights", name: "Highlights" },
        { id: "performance", name: "Performance" },
        { id: "security", name: "Security" }
    ];

    const Component1 = () => {
        return (
            <div className="flex justify-center pt-5 px-5">
                <div className="w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white p-5 rounded-lg flex flex-col gap-5">
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

                    <div className="border-t">
                        <p><i>*Noted</i></p>
                        <p><i>- Captain Seat +Rp. 1.000.000</i></p>
                        <p><i>- 2 Tone Color +Rp. 1.500.000</i></p>
                    </div>
                </div>
            </div>
        )
    }

    const Component2 = () => {
        return <div>Component 2</div>;
    };

    const Component3 = () => {
        return <div>Component 3</div>;
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
                    <div className={`w-[31%] py-3 items-center flex justify-center rounded-md ${activeComponent === 1 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'bg-slate-200 text-black'}`}  onClick={() => handleClick2(1)}>
                        <button>Pricelist</button>
                    </div>
                    <div className={`w-[33%] py-3 items-center flex justify-center rounded-md ${activeComponent === 2 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'bg-slate-200 text-black'}`} onClick={() => handleClick2(2)}>
                        <button>Hightlights</button>
                    </div>
                    <div className={`w-[31%] py-3 items-center flex justify-center rounded-md ${activeComponent === 3 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'bg-slate-200 text-black'}`}  onClick={() => handleClick2(3)}>
                        <button>Performa</button>
                    </div>
                    <div className={`w-full py-3 items-center flex justify-center rounded-md ${activeComponent === 4 ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white' : 'bg-slate-200 text-black'}`} onClick={() => handleClick2(4)}>
                        <button>Keamanan</button>
                    </div>
                </div>

                {activeComponent === 1 && <Component1 />}
                {activeComponent === 2 && <Component2 />}
                {activeComponent === 3 && <Component3 />}

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
                </div>
            </div>
            <Footer />
        </div>
    )
}