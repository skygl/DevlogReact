import React from "react";
import "./date.css";

const Next = ({date, changeDate}) => {
    const changeNextDate = () => {
        let currentDate = new Date(date.year, date.month - 1, date.day);
        currentDate.setDate(currentDate.getDate() + 1);
        changeDate({
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate()
        })
    };

    return (
        <div className={"next_date"}>
            <button className={"date_move_btn"} onClick={changeNextDate}>
                <img src={"/next.svg"} alt={"select next day"} className={"date_move"}/>
            </button>
        </div>
    )
};

export default Next;