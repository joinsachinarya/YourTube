import Sidebar from "./sidebar";
import VideoList from "./VideoList";

const Body = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <VideoList />
        </div>
    )
}

export default Body