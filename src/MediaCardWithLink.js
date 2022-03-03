import React from "react";
import { Link } from "react-router-dom";
import FilterContext from "./FilterContext";

class MediaCardWithLink extends React.Component {

    render() {
        return (           
            <li className="mediaSection__listItem">
                <Link to={this.props.link}>
                <figure>
                    <img
                        srcSet={this.props.pictures + "/jpg/640.jpg 640w," + this.props.pictures + "/jpg/1280.jpg 1280w," + this.props.pictures + "/jpg/1920.jpg 1920w"}
                        sizes={this.props.customSizes || "calc(100vw/12 * 3), (max-width: 75rem) calc(100vw/12 * 4), (max-width: 46.875rem) calc(100vw/12 * 6)"}
                        src={this.props.pictures + "/jpg/640.jpg"}
                        alt={this.props.alt || "placeholder"}
                        data-filter={this.context}
                    />
                </figure>
                </Link>
            </li>
           
        );
    }
}

MediaCardWithLink.contextType = FilterContext;

export default MediaCardWithLink;