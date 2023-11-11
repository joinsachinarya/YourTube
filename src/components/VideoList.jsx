import VideoCard from "./VideoCard"

const VideoList = () => {

    return (
        <div className="flex flex-wrap">
            {Array(10).fill("").map((item, index) => (
                <VideoCard key={index} />
            ))}
        </div>
    )
}

export default VideoList