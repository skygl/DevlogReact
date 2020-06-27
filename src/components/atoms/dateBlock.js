import React from "react";
import '../../styles/css/date.css';

const DateBlock = ({date, toggleActive}) => {
    let {year, month, day} = date;

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