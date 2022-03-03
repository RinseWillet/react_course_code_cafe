import Header from "./Header";
import MediaCard from "./MediaCard";
import VideoCard from "./VideoCard";

import "./MediaSection.css";

const MediaSection = (props) => {
    let data = "";     
    if(props.pictures && props.type === "picture"){
        data = props.pictures.map(picture => {
            return (
                <MediaCard
                    customSizes={props.customSizes}
                    pictures={picture}
                    key={picture + Math.random()}              
                />
            );
        });
    }
    if(props.videos && props.type === "video"){
        data = props.videos.map(video => {
            return <VideoCard video={video} />
        });
    }
    
    return (
        <section className="mediaSection">
            <Header text={props.headerText || "Geen Header"} />
            <ul className={"mediaSection__list " + props.extraClass || ""}>
                {data}                
            </ul>
        </section>
    );
}

export default MediaSection;