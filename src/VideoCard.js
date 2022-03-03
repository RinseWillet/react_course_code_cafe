import "./VideoCard.css";

const VideoCard = (props) => {
    return(
        <li className="mediaSection__videoItem">
            <video controls>
                <source src={props.video} type="video/mp4" />
                Sorry, de video kon niet worden afgespeeld
            </video>
        </li>
    )
}

export default VideoCard;