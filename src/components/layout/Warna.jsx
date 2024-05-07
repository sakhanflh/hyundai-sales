import { useState } from "react";

const Component5 = ({ selectedCarWarna }) => {
    const warna = selectedCarWarna.fitur.find(warna => warna.title.toLowerCase() == 'warna')
    console.log(warna)
    const [currentImg, setCurrentImg] = useState('')

    function handleClick(id) {
        const selectedColor = warna.data[0].images.find(color => color.name == id)
        setCurrentImg(selectedColor.img)
    }

    return (
        <div className="pt-5">
            <div className="flex justify-center text-2xl font-semibold">
                <h1>Color Options</h1>
            </div>

            <div>
                <div>
                    <img
                        src={currentImg ? currentImg : warna.data[0].images[0].img}
                        alt=""
                    />
                </div>

                <div className="w-full flex justify-center px-20 pt-5">
                    <div className="bg-gradient-to-r from-blue-950 to-blue-700 w-full flex justify-center items-center gap-5 rounded-lg py-2">
                        {
                            warna.data[0].colors.map((data, index) => (
                                <div key={index} className={`w-5 h-5 rounded-full bg-${data.name}`} onClick={() => handleClick(data.name)}></div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
};

export default Component5;