import { useParams } from 'react-router-dom'
import { CarData } from '../data/CarData'
import { HeaderM } from '../components/HeaderM'
import { Footer } from '../components/Footer'
import { useState } from 'react'
import Component1 from '../components/layout/Pricelist'
import Component2 from '../components/layout/Highlights'
import Component3 from '../components/layout/Performa'
import Component4 from '../components/layout/Keamanan'
import Component5 from '../components/layout/Warna'
import { FaRegFilePdf } from 'react-icons/fa'

export default function DetailCar() {
    const { id } = useParams()
    const selectedCar = CarData.find(car => car.link == id)
    const [activeIndex, setActiveIndex] = useState(1)
    const fitur = selectedCar.fitur
    const model = fitur[0].model
    const pdfPath = selectedCar.pdfPath
    console.log(pdfPath)
    function handleTab(id) {
        setActiveIndex(id)
    }


    console.log(model)


    return (
        <>
            <div>
                <HeaderM />
                <div className="pt-16 pb-5">
                    <div className="">
                        <img src={selectedCar.image} alt="" />
                    </div>

                    <div className="px-5 flex flex-wrap gap-2 justify-center">
                        {
                            fitur.map((data, index) => (
                                <div key={index} className={`w-[31%] py-3 items-center flex justify-center rounded-md border`} onClick={() => handleTab(data.id)}>
                                    <button>{data.title}</button>
                                </div>
                            ))
                        }
                    </div>


                    {activeIndex === 1 && <Component1 fitur={fitur} model={model} />}
                    {activeIndex === 2 && <Component2 selectedCar={selectedCar}/>}
                    {activeIndex === 3 && <Component3 selectedCarPerforma={selectedCar}/>}
                    {activeIndex === 4 && <Component4 selectedCarKeamanan={selectedCar}/>}
                    {activeIndex === 5 && <Component5 selectedCarWarna={selectedCar} />}
                </div>
                <div className="w-full items-center flex flex-col py-5 px-5 gap-5 ">
                    <h1 className="font-semibold text-center"><i>Penasaran dengan sensasi berkendara yang ditawarkan oleh New STARGAZER? Temukan jawabannya dalam brosur dibawah ini.</i></h1>
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="py-3 px-16 text-xl flex items-center gap-1 bg-blue-950 text-white rounded-lg"><FaRegFilePdf /> E-Brosur</button>
                    </a>
                </div>

                <Footer />
            </div>
        </>
    )
}