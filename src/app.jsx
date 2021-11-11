import React, { Component } from "react";
import axios from "axios";

import "./app.css";
import SearchHeader from "./components/searchHeader";
import SearchList from "./components/searchList";

class App extends Component {
    state = {
        videos: [],
    };
    loadItem = async () => {
        axios
            .get(
                "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCbK51antkBhLnolNHnfpXz55m65q3F1CE"
            )
            .then(({ data }) => {
                console.log("성공");
                this.setState({ videos: data.items });
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
        // const { video } = videos.map((item) => {
        //     return item;
        // });
        // console.log(video[0]);
        return (
            <>
                <SearchHeader></SearchHeader>
                <SearchList videos={this.state.videos}></SearchList>
            </>
        );
    }
}

export default App;
