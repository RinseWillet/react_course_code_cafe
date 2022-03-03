import React from 'react';
import Header from "./Header";
import MediaCard from "./MediaCard";
import VideoCard from "./VideoCard";

import "./MediaSection.css";

const MediaSection = ({pictures, link, customSizes, type, videos, headerText, extraClass, filter}) => {

    let data = "";
    if (pictures && type === "picture") {
        data = pictures.map(picture => {
            return (
                <MediaCard
                    filter={filter}
                    link={link}
                    customSizes={customSizes}
                    pictures={picture}
                    key={picture + Math.random()}
                />
            );
        });
    }
    if (videos && type === "video") {
        data = videos.map(video => {
            return <VideoCard video={video} />
        });
    }

    return (
        <section className="mediaSection">
            <Header text={headerText || "Geen Header"} />
            <ul className={"mediaSection__list " + extraClass || ""}>
                {data}
            </ul>
        </section>
    );
}

export default MediaSection;