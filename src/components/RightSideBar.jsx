import { EasySearchButtonTitleArray } from "../constants/imageLink";
import EasySearchButton from "./EasySearchButton";
import VideoList from "./VideoList";

const RightSideBar = () => {
    return (
        <div className="flex flex-col p-4">
            <input className="p-2 m-2 border rounded-full" placeholder="Search" type="text" />
            <div className="flex flex-shrink-0 gap-2">
                {EasySearchButtonTitleArray.map((it, idx) => (<EasySearchButton key={idx} title={it} />))}
            </div>
            <VideoList />
        </div>
    )
}
export default RightSideBar;