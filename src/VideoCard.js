import React from 'react';
import "./VideoCard.css";

const VideoCard = ({video}) => {
    return(
        <li className="mediaSection__videoItem">
            <video controls>
                <source src={video} type="video/mp4" />
                Sorry, de video kon niet worden afgespeeld
            </video>
        </li>
    )
}

export default VideoCard;