import "./MediaCard.css";

const MediaCard = ({pictures, alt, customSizes}) => {   
    return (
        <li className="mediaSection__listItem">
            <figure>
                <img
                    srcSet={pictures + "/jpg/640.jpg 640w," + pictures + "/jpg/1280.jpg 1280w," + pictures + "/jpg/1920.jpg 1920w"}
                    sizes={customSizes || "calc(100vw/12 * 3), (max-width: 75rem) calc(100vw/12 * 4), (max-width: 46.875rem) calc(100vw/12 * 6)"}
                    src={pictures + "/jpg/640.jpg"}
                    alt={alt || "placeholder"} />
            </figure>
        </li>
        
    );
}

export default MediaCard;