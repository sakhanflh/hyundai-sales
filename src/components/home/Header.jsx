import { Navbar } from "../Navbar";

export function Header() {
    return(
        <>
        <div className="w-full h-16 bg-white fixed z-50 hidden xl:block">
            <Navbar />
        </div>
        </>
    )
}