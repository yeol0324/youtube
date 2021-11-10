import React, { Component } from "react";
import "./app.css";
import SearchHeader from "./components/searchHeader";
import SearchList from "./components/searchList";

class App extends Component {
    state = {
        habits: [
            { id: 1, name: "studying", count: 0 },
            { id: 2, name: "running", count: 0 },
            { id: 3, name: "coding", count: 0 },
        ],
    };
    habitAdd = (name) => {
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
        this.setState({ habits });
    };

    render() {
        return (
            <>
                <SearchHeader></SearchHeader>
                <SearchList></SearchList>
            </>
        );
    }
}

export default App;
