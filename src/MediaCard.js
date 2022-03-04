<<<<<<< HEAD
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
=======
//React
import React, {useContext} from 'react';

//componenten
import FilterContext from './FilterContext';
import MediaCardWithLink from './MediaCardWithLink';

//style
import "./MediaCard.css";

const MediaCard = (props) => {

    const filter = useContext(FilterContext)
   
        if (props.link) {
            return (
               <MediaCardWithLink link={props.link} pictures={props.pictures} customSizes={props.customSizes}/>
            );
        }
        return (
            <li className="mediaSection__listItem">
                <figure>
                    <img
                        srcSet={props.pictures + "/jpg/640.jpg 640w," + props.pictures + "/jpg/1280.jpg 1280w," + props.pictures + "/jpg/1920.jpg 1920w"}
                        sizes={props.customSizes || "calc(100vw/12 * 3), (max-width: 75rem) calc(100vw/12 * 4), (max-width: 46.875rem) calc(100vw/12 * 6)"}
                        src={props.pictures + "/jpg/640.jpg"}
                        alt={props.alt || "placeholder"} 
                        data-filter={filter}
                        />
                </figure>
            </li>
        );    
>>>>>>> 6a5d77c33f0dff4c9ebee51ad9d75277fae224aa
}

export default MediaCard;