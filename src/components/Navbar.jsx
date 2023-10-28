import { HAMBURGER_MENU, LOGO } from "../constants/imageLink";
import Notification from "../assets/images/notifications-outline-icon.webp";
import User from "../assets/images/user-icon.webp";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <button className="your-class-name-here"><img src={HAMBURGER_MENU} alt="hamburger-menu" /></button>
                <img src={LOGO} alt="logo" className="your-class-name-here" />
            </div>
            <div className="flex">
                <button className="your-class-name-here"><img src={Notification} alt="notification" /></button>
                <button className="your-class-name-here"><img src={User} alt="user" /></button>
            </div>
        </div>
    );
}

export default Navbar;
