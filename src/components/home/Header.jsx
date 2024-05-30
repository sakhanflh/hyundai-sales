import { Navbar } from "../Navbar";

export function Header() {
    return(
        <>
        <div className="w-full h-16 px-5 bg-white fixed border-b shadow-md z-50 hidden lg:block xl:block">
            <Navbar />
        </div>
        </>
    )
}