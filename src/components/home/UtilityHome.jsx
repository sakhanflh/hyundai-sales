import { CardCar } from "../CardCar";
import { CarData } from "../../data/CarData";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);


export function UtilityHome(){
    useGSAP(() => {
        gsap.from("#elementRef1", {
            x: 100,
            opacity: 0, 
            duration: 2, 
            ease: "back.out",
            delay: 0.5,
        })
    })
    useGSAP(() => {
        gsap.from("#elementRef2", {
            x: -100, // Mulai dari bawah
            opacity: 0, // Opacity awal
            duration: 2, // Durasi animasi
            ease: "back.out",
        })
    })
    
    useGSAP(() => {
        gsap.from("#elementRef3", {
            x: 100, // Mulai dari bawah
            opacity: 0, // Opacity awal
            duration: 2, // Durasi animasi
            ease: "back.out",
        })
    })
    useGSAP(() => {
        gsap.from("#elementRef4", {
            x: -100, // Mulai dari bawah
            opacity: 0, // Opacity awal
            duration: 2, // Durasi animasi
            ease: "back.out",
        })
    })
    useGSAP(() => {
        gsap.from("#elementRef5", {
            x: 100, // Mulai dari bawah
            opacity: 0, // Opacity awal
            duration: 2, // Durasi animasi
            ease: "back.out",
        })
    })
    useGSAP(() => {
        gsap.from("#elementRef6", {
            x: -100, // Mulai dari bawah
            opacity: 0, // Opacity awal
            duration: 2, // Durasi animasi
            ease: "back.out",
        })
    })
    useGSAP(() => {
        gsap.from("#elementRef7", {
            x: 100, // Mulai dari bawah
            opacity: 0, // Opacity awal
            duration: 2, // Durasi animasi
            ease: "back.out",
        })
    })
    useGSAP(() => {
        gsap.from("#elementRef8", {
            x: -100, // Mulai dari bawah
            opacity: 0, // Opacity awal
            duration: 2, // Durasi animasi
            ease: "back.out",
        })
    })



    return(
        <>
        <div className="w-full flex flex-wrap gap-5 justify-center pt-10 xl:pt-0 xl:text-xl">
            {
                CarData.map((data, index) => (
                    <CardCar 
                        key={data.id}
                        image={data.image}
                        name={data.name}
                        linkTo={data.link}
                        id={data.id}
                    />
                ))
            }
        </div>
        </>
    )
}