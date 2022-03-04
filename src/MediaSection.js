//React
import React from 'react';

//componenten
import Header from "./Header";
import MediaCard from "./MediaCard";
import VideoCard from "./VideoCard";

//style
import "./MediaSection.css";
import "./Animations.css";

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
                    key={picture}
                />
            );
        });
    }
    if (videos && type === "video") {
        data = videos.map(video => {
            return <VideoCard 
            key={video}
            video={video} />
        });
    }

    return (
        <section className="mediaSection a-comeUp">
            <Header text={headerText || "Geen Header"} />
            <ul className={"mediaSection__list " + extraClass || ""}>
                {data}
            </ul>
        </section>
    );
}

export default MediaSection;