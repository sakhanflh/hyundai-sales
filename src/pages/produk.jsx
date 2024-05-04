import { Footer } from "../components/Footer";
import { HeaderM } from "../components/HeaderM";
import { Header } from "../components/home/Header";
import { UtilityHome } from "../components/home/UtilityHome";

export default function ProdukPage(){
    return(
        <div>
            <Header />
            <HeaderM />
            <div className="pt-16 xl:pt-32 pb-10">
                <UtilityHome />
            </div>
            <Footer />
        </div>
    )
}