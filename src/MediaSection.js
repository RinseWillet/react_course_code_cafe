<<<<<<< HEAD
=======
//React
import React from 'react';

//componenten
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
import Header from "./Header";
import MediaCard from "./MediaCard";
import VideoCard from "./VideoCard";

<<<<<<< HEAD
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
=======
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
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
                />
            );
        });
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
            </ul>
        </section>
    );
}

export default MediaSection;