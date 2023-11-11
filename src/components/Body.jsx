import RightSideBar from "./RightSideBar";
import Sidebar from "./Sidebar"

const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            <RightSideBar />
        </div>
    )
}

export default Body;