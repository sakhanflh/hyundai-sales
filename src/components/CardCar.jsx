import { Link } from "react-router-dom";

export function CardCar({image, name, linkTo, id}) {
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