const VideoCard = () => {
    return (
        <div className="flex flex-col p-3">
            <iframe
                allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
                width="380"
                height="220"
                src="https://www.youtube.com/embed/eZHsmb4ezEk?si=e472eDel2UfNQ8U_"
                title="Youtube player"
                allowFullScreen
                className="rounded-xl"
            />
            <p className="font-medium text-lg">Video Title</p>
            <p className="">Channel name</p>
            <p>2.4M views</p>
        </div>
    )
}

export default VideoCard