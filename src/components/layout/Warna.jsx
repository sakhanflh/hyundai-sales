import { useState } from "react";

const Component5 = ({ selectedCarWarna }) => {
    const warna = selectedCarWarna.fitur.find(warna => warna.title.toLowerCase() == 'warna')
    const [currentImg, setCurrentImg] = useState('')

    function handleClick(id) {
        const selectedColor = warna.data[0].images.find(color => color.name == id)
        setCurrentImg(selectedColor.img)
    }

    return (
        <div className="pt-5">
            <div className="flex justify-center text-2xl xl:text-3xl font-semibold">
                <h1>Color Options</h1>
            </div>

            <div>
                <div className=" flex justify-center">
                    <img
                        src={currentImg ? currentImg : warna.data[0].images[0].img}
                        alt=""
                    />
                </div>

                <div className="w-full flex justify-center px-20 pt-5">
                    <div className="bg-gradient-to-r from-blue-950 to-blue-700 w-full  xl:w-[30rem] xl:h-[5rem] flex justify-center items-center gap-5 rounded-lg py-3 ">
                        {
                            warna.data[0].colors.map((data, index) => (
                                <div key={index} className={`w-7 h-7 xl:w-[3rem] xl:h-[3rem] rounded-full ${data.name}`} onClick={() => handleClick(data.name)}></div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Component5;