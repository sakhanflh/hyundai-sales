import { CardCar } from "../CardCar";
import { CarData } from "../../data/CarData";

export function UtilityHome(){
    return(
        <>
        <div className="w-full flex flex-wrap gap-5 justify-center pt-10 xl:pt-0">
            {
                CarData.map((data, index) => (
                    <CardCar 
                        key={data.id}
                        image={data.image}
                        name={data.name}
                        linkTo={data.link}

                    />
                ))
            }
        </div>
        </>
    )
}