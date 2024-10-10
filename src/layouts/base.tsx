import {Outlet} from "react-router-dom";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

const Base = ()=>{
    return (
        <>
            <div className="app min-h-screen w-screen flex flex-col">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}

export default Base