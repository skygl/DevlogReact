import React from "react";
import "./date.css";

const Prev = ({date, changeDate}) => {
    const changePrevDate = () => {
        let currentDate = new Date(date.year, date.month - 1, date.day);
        currentDate.setDate(currentDate.getDate() - 1);
        changeDate({
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate()
        })
    };

    return (
        <div className={"prev_date"}>
            <button className={"date_move_btn"} onClick={changePrevDate}>
                <img src={"/back.svg"} alt={"select previous day"} className={"date_move"}/>
            </button>
        </div>
    )
};

export default Prev;