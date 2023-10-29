import { HAMBURGER_MENU, LOGO } from "../constants/imageLink";
import Notification from "../assets/images/notifications-outline-icon.webp";
import User from "../assets/images/user-icon.webp";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="flex justify-between h-16 shadow-lg">
            <div className="flex">
                <button className=""><img src={HAMBURGER_MENU} alt="hamburger-menu" className="h-8 mx-4" /></button>
                <Link to={"/"}><img src={LOGO} alt="logo" className="h-16" /></Link>
            </div>
            <div className="flex">
                <button><img src={Notification} alt="notification" className="h-8  mr-6" /></button>
                <button><img src={User} alt="user" className="h-8  mr-6" /></button>
            </div>
        </div>
    );
}

export default Navbar;
