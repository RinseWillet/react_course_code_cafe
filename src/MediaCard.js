import React, {useContext} from 'react';
import FilterContext from './FilterContext';
import "./MediaCard.css";
import MediaCardWithLink from './MediaCardWithLink';

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
    
}

export default MediaCard;