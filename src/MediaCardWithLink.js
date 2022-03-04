//React
import React, {useContext} from "react";
import { Link } from "react-router-dom";

//componenten
import FilterContext from "./FilterContext";

const MediaCardWithLink = (props) => {

    const filter = useContext(FilterContext);

        return (           
            <li className="mediaSection__listItem">
                <Link to={props.link}>
                <figure>
                    <img
                        srcSet={props.pictures + "/jpg/640.jpg 640w," + props.pictures + "/jpg/1280.jpg 1280w," + props.pictures + "/jpg/1920.jpg 1920w"}
                        sizes={props.customSizes || "calc(100vw/12 * 3), (max-width: 75rem) calc(100vw/12 * 4), (max-width: 46.875rem) calc(100vw/12 * 6)"}
                        src={props.pictures + "/jpg/640.jpg"}
                        alt={props.alt || "placeholder"}
                        data-filter={filter}
                    />
                </figure>
                </Link>
            </li>
           
        );
    
}

export default MediaCardWithLink;