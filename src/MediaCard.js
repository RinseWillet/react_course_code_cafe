import React from 'react';
import FilterContext from './FilterContext';
import "./MediaCard.css";
import MediaCardWithLink from './MediaCardWithLink';

class MediaCard extends React.Component {

    render() {
        console.log(this.context);
        if (this.props.link) {
            return (
               <MediaCardWithLink link={this.props.link} pictures={this.props.pictures} customSizes={this.props.customSizes}/>
            );
        }
        return (
            <li className="mediaSection__listItem">
                <figure>
                    <img
                        srcSet={this.props.pictures + "/jpg/640.jpg 640w," + this.props.pictures + "/jpg/1280.jpg 1280w," + this.props.pictures + "/jpg/1920.jpg 1920w"}
                        sizes={this.props.customSizes || "calc(100vw/12 * 3), (max-width: 75rem) calc(100vw/12 * 4), (max-width: 46.875rem) calc(100vw/12 * 6)"}
                        src={this.props.pictures + "/jpg/640.jpg"}
                        alt={this.props.alt || "placeholder"} 
                        data-filter={this.context}
                        />
                </figure>
            </li>
        );
    }
}

MediaCard.contextType = FilterContext;

export default MediaCard;