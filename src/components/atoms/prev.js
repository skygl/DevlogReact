import React from "react";
import "./date.css";

const Prev = ({date, changeDate}) => {

    return (
        <div className={"prev_date"}>
            <button className={"date_btn"} onClick={changeDate}>
                <img src={"/back.svg"} alt={"select previous day"} className={"date_move"}/>
            </button>
        </div>
    )
};

export default Prev;