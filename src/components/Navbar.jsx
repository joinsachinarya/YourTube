import { useState } from "react"
import { NOTIFICATIONS_ICON, USER_PROFILE_PIC, YOUTUBE_HOME_ICON } from "../constants/imageLinks"
import { Link } from "react-router-dom"
import HamburgerMenuIcon from "../assets/HamburgerMenuIcon.png"

const Navbar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const handleHamburgerMenuToggel = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <div className="w-full h-14 shadow-lg flex justify-between">
            <div className="flex gap-2">
                <button><img src={HamburgerMenuIcon} alt="hamburger-icon" className="h-8 ml-2" onClick={handleHamburgerMenuToggel} /></button>
                <Link to={"/"} className="">
                    <img src={YOUTUBE_HOME_ICON} alt="youtube-home" className="h-7 mt-[14px] ml-2" />
                </Link>
            </div>
            <div className="flex gap-2">
                <button onClick={() => console.log("Notifications clicked!")} > <img src={NOTIFICATIONS_ICON} alt="notifications" className="h-8 mr-2" /> </button>
                <button onClick={() => console.log("Profile clicked!")} > <img src={USER_PROFILE_PIC} alt="profile-picture" className="h-8 mr-6" /> </button>
            </div>
        </div>
    )
}

export default Navbar