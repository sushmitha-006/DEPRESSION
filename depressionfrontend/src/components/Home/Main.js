import React from "react";
import Footer from "./Footer";
import MainContent from "./Maincontent";
import "./Main.css";
const Main = () => {
    return (
        <div className="main">
        <div className="body-container">
            <MainContent/>
        </div>
        <Footer/>
        </div>
    );
}

export default Main;