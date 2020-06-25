import React from 'react';
import Header from "./templates/header";
import Banner from "./templates/banner";
import './App.css';
import './styles/css/fonts.css';

function App() {

    return (
        <div className="App">
            <Header/>
            <Banner/>
            <div className={"content_area"}>
                <div className={"cards_area"}>

                </div>
            </div>
        </div>
    );
}

export default App;
