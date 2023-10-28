import { HAMBURGER_MENU, LOGO } from "../constants/imageLink";
import Notification from "../assets/images/notifications-outline-icon.webp";
import User from "../assets/images/user-icon.webp";

const Navbar = () => {
    return (
        <div className="flex justify-between h-16 shadow-lg">
            <div className="flex">
                <button className=""><img src={HAMBURGER_MENU} alt="hamburger-menu" className="h-8 mx-4" /></button>
                <img src={LOGO} alt="logo" className="" />
            </div>
            <div className="flex">
                <img src={Notification} alt="notification" className="h-8 mt-4 mr-6" />
                <img src={User} alt="user" className="h-8 mt-4 mr-6" />
            </div>
        </div>
    );
}

export default Navbar;
