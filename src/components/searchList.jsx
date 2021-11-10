import React, { Component } from "react";
import axios from "axios";
// import SearchItem from "./searchItem";

class SearchList extends Component {
    state = {
        videos: [],
    };
    loadItem = async () => {
        axios
            .get(
                "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCbK51antkBhLnolNHnfpXz55m65q3F1CE"
            )
            .then(({ data }) => {
                console.log(data);
                console.log("성공");
                this.setState({ videos: data });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    componentDidMount() {
        this.loadItem(); // loadItem 호출
    }

    render() {
        const { videos } = this.state;
        console.log(videos);
        // const videos = this.state.videos.map((item) => {
        //     return item;
        // });
        // console.log(videos);
        return <></>;
    }
}

export default SearchList;
