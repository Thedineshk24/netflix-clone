import React from 'react';
import Nav from "./Nav";
import Banner from "./Banner";

// css
import "./HomeScreen.css";

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
        </div>
    )
}

export default HomeScreen
