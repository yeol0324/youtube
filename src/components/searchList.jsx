import React, { Component } from "react";
import SearchItem from "./searchItem";

class SearchList extends Component {
    render() {
        console.log(this.props.videos);
        return (
            <>
                <ul className="list-box">
                    {this.props.videos.map((item) => (
                        <li className="video-box">
                            <SearchItem video={item} key={item.id}></SearchItem>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default SearchList;
