import React, {useState} from 'react';
import Header from "./templates/header";
import Banner from "./templates/banner";
import './App.css';
import './styles/css/fonts.css';
import DatePicker from "./templates/datePicker";

function App() {
    const today = new Date();
    const [date, setDate] = useState({
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate()
    });

    const changeDate = ({year, month, day}) => {
        setDate({year, month, day});
    };

    return (
        <div className="App">
            <Header/>
            <Banner/>
            <div className={"content_area"}>
                <div className={"cards_area"}>
                    <DatePicker date={date} changeDate={changeDate}/>
                </div>
            </div>
        </div>
    );
}

export default App;
