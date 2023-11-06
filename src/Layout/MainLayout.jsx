import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#FAF5EF]">
            <Navbar></Navbar>
            <Outlet></Outlet>  
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;