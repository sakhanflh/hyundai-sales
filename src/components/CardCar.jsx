import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

export function CardCar({image, name, linkTo, id}) {
    // useGSAP(() => {
    //     gsap.from("#elementRef1", {
    //         x: 100,
    //         opacity: 100, 
    //         duration: 2, 
    //         ease: "expo.inOut",
    //         delay: 0.5,
    //     })
    // })
    // useGSAP(() => {
    //     gsap.from("#elementRef2", {
    //         x: 100, // Mulai dari bawah
    //         opacity: 0, // Opacity awal
    //         duration: 3.5, // Durasi animasi
    //         ease: "bounce",
    //     })
    // })
    // useGSAP(() => {
    //     gsap.from("#elementRef3", {
    //         x: 100, // Mulai dari bawah
    //         opacity: 0, // Opacity awal
    //         duration: 3.5, // Durasi animasi
    //         ease: "bounce",
    //     })
    // })
    // useGSAP(() => {
    //     gsap.from("#elementRef4", {
    //         x: 100, // Mulai dari bawah
    //         opacity: 0, // Opacity awal
    //         duration: 3.5, // Durasi animasi
    //         ease: "bounce",
    //     })
    // })
    // useGSAP(() => {
    //     gsap.from("#elementRef5", {
    //         x: 100, // Mulai dari bawah
    //         opacity: 0, // Opacity awal
    //         duration: 3.5, // Durasi animasi
    //         ease: "bounce",
    //     })
    // })
    // useGSAP(() => {
    //     gsap.from("#elementRef6", {
    //         x: 100, // Mulai dari bawah
    //         opacity: 0, // Opacity awal
    //         duration: 3.5, // Durasi animasi
    //         ease: "bounce",
    //     })
    // })
    // useGSAP(() => {
    //     gsap.from("#elementRef7", {
    //         x: 100, // Mulai dari bawah
    //         opacity: 0, // Opacity awal
    //         duration: 3.5, // Durasi animasi
    //         ease: "bounce",
    //     })
    // })
    // useGSAP(() => {
    //     gsap.from("#elementRef8", {
    //         x: 100, // Mulai dari bawah
    //         opacity: 0, // Opacity awal
    //         duration: 3.5, // Durasi animasi
    //         ease: "bounce",
    //     })
    // })


    return (
        <div className="w-72 xl:w-[28%] border rounded-lg p-5" id={`elementRef${id}`}>
            <div className="hover:scale-110 transition-all duration-300">
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-black font-semibold">{name}</p>
                <Link to={`/car/${linkTo}`}>
                    <button className="bg-blue-900 text-white hover:bg-blue-700 transition-all duration-300 px-16 xl:px-24 py-1 rounded-lg font-medium">Selengkapnya</button>
                </Link>
            </div>
        </div>
    )
}