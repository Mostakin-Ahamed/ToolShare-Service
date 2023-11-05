import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-[#FAF5EF]">
            <Navbar></Navbar>
            <Outlet></Outlet>  
        </div>
    );
};

export default MainLayout;