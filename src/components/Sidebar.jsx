import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2 px-3 pt-3 w-[50%] overflow-y-scroll no-scrollbar">
            <Link>Home</Link>
            <Link>Shorts</Link>
            <Link>Subscription</Link>
            <hr />

            <p className="font-medium pt-2">You</p>
            <Link>Your Channel</Link>
            <Link>History</Link>
            <Link>Watch Letter</Link>
            <Link>Show More</Link>
            <hr />

            <p className="font-medium pt-2">Subscription</p>
            <Link>Sachin Arya</Link>
            <Link>Other</Link>
            <hr className="pt-2" />

            <p className="font-medium pt-2">Explore</p>
            <Link>Music</Link>
            <Link>Gaming</Link>
            <Link>Movies</Link>
            <Link>Podcast</Link>
            <Link>Learning</Link>
            <Link>Live</Link>
            <Link>Sport</Link>
            <hr className="pt-2" />

            <Link>Setting</Link>
            <Link>Help</Link>
        </div>
    )
}

export default Sidebar