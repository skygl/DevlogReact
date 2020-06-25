import React from "react";
import './date.css';

const DateBlock = ({date, toggleActive}) => {
    let {year, month, day} = date;

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    return (
        <div>
            <button className={"date_btn"} onClick={() => toggleActive()}>
                <div className={"date_title"}>
                    {[year, month, day].join('.')}
                </div>
                <img src={"/calendar.svg"} className={"calendar_icon"} alt={"select date from calendar"}/>
            </button>
        </div>
    )
};

export default DateBlock;