<<<<<<< HEAD
import "./VideoCard.css";

const VideoCard = (props) => {
    return(
        <li className="mediaSection__videoItem">
            <video controls>
                <source src={props.video} type="video/mp4" />
=======
//React
import React from 'react';

//style
import "./VideoCard.css";

const VideoCard = ({video}) => {
    return(
        <li className="mediaSection__videoItem">
            <video controls>
                <source src={video} type="video/mp4" />
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
                Sorry, de video kon niet worden afgespeeld
            </video>
        </li>
    )
}

export default VideoCard;