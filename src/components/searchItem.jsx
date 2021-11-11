import React, { Component } from "react";

class SearchItem extends Component {
    render() {
        return (
            <>
                <div>
                    <img src={this.props.video.snippet.thumbnails.medium.url} alt="" />
                    <h3>{this.props.video.snippet.title}</h3>
                    <span>{this.props.video.snippet.channelTitle}</span>
                </div>
            </>
        );
    }
}

export default SearchItem;
