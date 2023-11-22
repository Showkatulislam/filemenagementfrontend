import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className="max-w-6xl mx-auto">
            {noHeaderFooter || <Navbar/>}
             <Outlet></Outlet>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;